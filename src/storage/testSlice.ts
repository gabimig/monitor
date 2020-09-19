import { createSlice } from '@reduxjs/toolkit'

export const {
    actions: {
        setState,
    },
    reducer: testReducer,
} = createSlice({
    name: 'test',
    initialState: 'init-state',
    reducers: {
        setState: (state, { payload }) => payload,
    },
})

export const sessionInfoSelector = ({ test }: { test: string }): string => test
