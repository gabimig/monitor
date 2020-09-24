import { configureStore } from '@reduxjs/toolkit'
import { testReducer } from './testSlice'

const store = configureStore({
    reducer: {
        metrics: testReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store
