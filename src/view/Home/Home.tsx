import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import io from 'socket.io-client'
import { Chart } from 'react-google-charts'
import { metricsSelector, setMetrics, Metric } from '../../storage/testSlice'

const ENDPOINT = 'http://localhost:3000'
const socket = io(ENDPOINT)

const useStyles = makeStyles(() => createStyles({
    container: {
        width: '100%',
    },
    placeHolder: {
        textAlign: 'center',
    },
}))

const formatHour = (date: Date) => `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

const Home = (): React.ReactElement => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const metricsRedux: Metric[] = useSelector(metricsSelector)
    const metricsChartHeader = ['Hora', 'Kwh']
    const metricsChartValues = metricsRedux.map((metric) => [metric.date, metric.value])
    const metricsChart = [metricsChartHeader, ...metricsChartValues]

    useEffect(() => {
        if (!socket.connected) {
            socket.connect()
        }
        socket.on('metrics', (metrics: Metric[]) => {
            if (metrics) {
                const metricsDatesMapped = metrics.map((metric: Metric) => (
                    { date: new Date(metric.date), value: metric.value }
                ))
                dispatch(setMetrics(metricsDatesMapped))
            }
        })

        return () => { socket.disconnect() }
    }, [dispatch])

    return (
        <Grid container>
            <Grid item xs={12} className={classes.placeHolder}>
                <h2>Home Page Placeholder</h2>
            </Grid>
            <Grid item xs={12} className={classes.placeHolder}>
                <Chart
                  chartType="AreaChart"
                  data={metricsChart}
                  options={{
                      vAxis: { minValue: 0 },
                      hAxis: {
                          format: 'HH:mm:ss',
                          maxTextLines: 10,
                          //   slantedText: true,
                          //   textStyle: { fontSize: 12 },
                      },
                  }}
                />
            </Grid>
        </Grid>
    )
}

export default Home
