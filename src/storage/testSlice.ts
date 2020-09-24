import { createSlice } from '@reduxjs/toolkit'

export type Metric = {value: number, date: Date}

const initState: Metric[] = []

export const {
    actions: {
        setMetrics,
    },
    reducer: testReducer,
} = createSlice({
    name: 'Metrics',
    initialState: initState,
    reducers: {
        setMetrics: (state, { payload }) => payload,
    },
})

export const metricsSelector = ({ metrics }: { metrics: Metric[] }): Metric[] => metrics
