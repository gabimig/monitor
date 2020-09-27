import { configureStore } from '@reduxjs/toolkit'
import { metricReducer } from './metricsSlice'
import { productionReducer } from './productionSlice'

const store = configureStore({
    reducer: {
        metrics: metricReducer,
        production: productionReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store
