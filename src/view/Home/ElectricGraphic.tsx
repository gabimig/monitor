import React from 'react'
import Chart from 'react-google-charts'
import { useSelector } from 'react-redux'
import { Metric, metricsSelector } from '../../storage/metricsSlice'

const mapMetricsToChart = (metricsRedux: Metric[]) => {
    const metricsChartHeader = ['Hora', 'Kwh']
    const metricsChartValues = metricsRedux.map((metric) => [new Date(metric.date), metric.value])
    const metricsChart = [metricsChartHeader, ...metricsChartValues]

    return metricsChart
}

const ElectricGraphic = (): React.ReactElement => {
    const metricsRedux: Metric[] = useSelector(metricsSelector)
    const metricsChart = mapMetricsToChart(metricsRedux)

    return (
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
    )
}

export default ElectricGraphic
