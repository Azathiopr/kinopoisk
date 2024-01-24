import { configureStore } from "@reduxjs/toolkit";
import kinoSlice from "./slice/kinoSlice";
import datailSlice from "./slice/datailSlice";


const store = configureStore({
    reducer: {
        kino: kinoSlice,
        Datail: datailSlice
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch