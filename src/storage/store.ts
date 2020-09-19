import { configureStore } from '@reduxjs/toolkit'
import { testReducer } from './testSlice'

const store = configureStore({
    reducer: {
        test: testReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store
