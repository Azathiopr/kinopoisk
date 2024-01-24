import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { kinoPoiskAPI } from "../../axios";
import { AxiosError } from "axios";
import { IDetail } from "../modules";

type DatailSlice = {
    detail: IDetail | null
    loading: boolean
    error: null | string | undefined
}

const initialState: DatailSlice = {
    detail: null,
    error: null,
    loading: false,
}

export const fetchByDatail = createAsyncThunk<IDetail, string, { rejectValue: string }>(
    'kino/fetchByDatail',
    async (id, { rejectWithValue }) => {
        try {
            const res = await kinoPoiskAPI.getDetailKino(id)
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            const data = res.data
            return data as IDetail
        } catch (error) {
            if (error instanceof AxiosError) {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                return rejectWithValue(message);
            }
            // unhandled non-AxiosError goes here
            throw error
        }
    }
)

const datailSlice = createSlice({
    name: 'kino',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchByDatail.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchByDatail.fulfilled, (state, action) => {
            state.detail = action.payload
            state.loading = false
        })
        addCase(fetchByDatail.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 Not fount'
            } else {
                state.error = action.payload
            }
        })
    }
})

export default datailSlice.reducer
