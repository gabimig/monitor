import { createSlice } from '@reduxjs/toolkit'

export type Production = {name: string, weight: number}

// const initState: Production[] = [
//     { name: 'CF00562', weight: 125 },
//     { name: 'X154', weight: 96 },
//     { name: 'CF00563', weight: 101 },
//     { name: 'CF00564', weight: 56 },
//     { name: 'X155', weight: 136 },
//     { name: 'X156', weight: 89 },
//     { name: 'CF00565', weight: 83 },
//     { name: 'X157', weight: 114 },
// ]
const initState: Production[] = []

export const {
    actions: {
        setProduction,
    },
    reducer: productionReducer,
} = createSlice({
    name: 'Production',
    initialState: initState,
    reducers: {
        setProduction: (state, { payload }) => payload,
    },
})

export const productionSelector = (
    { production }: { production: Production[] },
): Production[] => production
