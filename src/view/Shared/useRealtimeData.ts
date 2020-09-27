import { Dispatch } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import io from 'socket.io-client'
import { Metric, setMetrics } from '../../storage/metricsSlice'
import { Production, setProduction } from '../../storage/productionSlice'

const ENDPOINT = 'http://localhost:3000'
const socket = io(ENDPOINT)

const useRealtimeData = (dispatch: Dispatch): void => {
    useEffect(() => {
        if (!socket.connected) {
            socket.connect()
        }
        socket.on('metrics', (metrics: Metric[]) => {
            if (metrics) {
                dispatch(setMetrics(metrics))
            }
        })
        socket.on('production', (production: Production[]) => {
            if (production) {
                dispatch(setProduction(production))
            }
        })

        return () => { socket.disconnect() }
    }, [dispatch])
}

export default useRealtimeData
