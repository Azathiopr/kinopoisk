import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IAll, kinoPoiskAPI } from "../../axios"
import { AxiosError } from "axios"
import { IKino } from "../modules"

type KinoSlice = {
    kino: IKino[]
    loading: boolean
    error: null | string | undefined
}

const initialState: KinoSlice = {
    kino: [],
    error: null,
    loading: false,
}

export const fetchByAllFilm = createAsyncThunk<IKino[], void, { rejectValue: string }>(
    'kino/fetchByAllFilm',
    async (_, { rejectWithValue }) => {
        try {
            const res = await kinoPoiskAPI.getAllKino()
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            return res.data.items
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

export const fetchBySearch = createAsyncThunk<IKino[], string, { rejectValue: string }>(
    'kino/fetchBySearch',
    async (value, { rejectWithValue }) => {
        try {
            const res = await kinoPoiskAPI.getByName(value)
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            return res.data.films
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

export const fetchByFilter = createAsyncThunk<IKino[], IAll, { rejectValue: string }>(
    'kino/fetchByFilter',
    async (all, { rejectWithValue }) => {
        try {
            const res = await kinoPoiskAPI.getFilterBiYear(all)
            // console.log(res);
            if (res.status !== 200) {
                throw new Error('Server error')
            }
            return res.data.items
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

const kinoSlice = createSlice({
    name: 'kino',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchByAllFilm.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchByAllFilm.fulfilled, (state, action) => {
            state.kino = action.payload
            state.loading = false
        })
        addCase(fetchByAllFilm.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 Not fount'
            } else {
                state.error = action.payload
            }
        })

        addCase(fetchBySearch.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchBySearch.fulfilled, (state, action) => {
            state.kino = action.payload
            state.loading = false
        })
        addCase(fetchBySearch.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 Not fount'
            } else {
                state.error = action.payload
            }
        })

        addCase(fetchByFilter.pending, (state) => {
            state.loading = true
            state.error = null
        })
        addCase(fetchByFilter.fulfilled, (state, action) => {
            state.kino = action.payload
            state.loading = false
        })
        addCase(fetchByFilter.rejected, (state, action) => {
            state.loading = false
            if (action.payload?.includes('404')) {
                state.error = '404 Not fount'
            } else {
                state.error = action.payload
            }
        })
    }
})

export default kinoSlice.reducer
