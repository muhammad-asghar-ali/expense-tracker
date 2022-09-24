import { configureStore } from '@reduxjs/toolkit'
import apiSlice from './apiSlice'
import expanseSlice from './reducer'

export const store = configureStore({
    reducer: {
        expense: expanseSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
}) 