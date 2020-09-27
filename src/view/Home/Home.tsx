import React, { useEffect } from 'react'
import { Grid } from '@material-ui/core'
import PowerIcon from '@material-ui/icons/Power'
import NewReleasesIcon from '@material-ui/icons/NewReleases'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import io from 'socket.io-client'
import { Chart } from 'react-google-charts'
import CollapsablePanel from 'collapsable-panel'
import { metricsSelector, setMetrics, Metric } from '../../storage/metricsSlice'
import ProductionTable, { Production } from './ProductionTable'
import { productionSelector, setProduction } from '../../storage/productionSlice'

const ENDPOINT = 'http://localhost:3000'
const socket = io(ENDPOINT)

const useStyles = makeStyles(() => createStyles({
    container: {
        width: '100%',
    },
    placeHolder: {
        textAlign: 'center',
    },
    production: {
        padding: '1em',
    },
}))

const mapMetricsToChart = (metricsRedux: Metric[]) => {
    const metricsChartHeader = ['Hora', 'Kwh']
    const metricsChartValues = metricsRedux.map((metric) => [metric.date, metric.value])
    const metricsChart = [metricsChartHeader, ...metricsChartValues]

    return metricsChart
}

const Home = (): React.ReactElement => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const metricsRedux: Metric[] = useSelector(metricsSelector)
    const productionRedux: Production[] = useSelector(productionSelector)
    const metricsChart = mapMetricsToChart(metricsRedux)

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
        socket.on('production', (production: Production[]) => {
            if (production) {
                dispatch(setProduction(production))
            }
        })

        return () => { socket.disconnect() }
    }, [dispatch])

    return (
        <Grid container>
            <Grid item xs={7} className={classes.placeHolder}>
                <CollapsablePanel title="General Elec." iconComponent={PowerIcon}>
                    <Chart
                      chartType="AreaChart"
                      data={metricsChart}
                      options={{
                          vAxis: { minValue: 0 },
                          hAxis: {
                              format: 'HH:mm:ss',
                              maxTextLines: 10,
                          },
                          series: {
                              0: { color: '#222' },
                          },
                      }}
                    />
                </CollapsablePanel>
            </Grid>
            <Grid item xs={5}>
                <CollapsablePanel title="Productions" iconComponent={NewReleasesIcon} hideable>
                    <ProductionTable production={productionRedux} />
                </CollapsablePanel>
            </Grid>
        </Grid>
    )
}

export default Home
