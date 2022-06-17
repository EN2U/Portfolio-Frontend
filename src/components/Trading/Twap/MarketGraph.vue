<template>
  <div>
    <VueApexCharts
      style="width: 1000px"
      :series="marketCandles"
      :options="chartOptions"
    />
  </div>
</template>

<script>
import PublicMarketCandles from 'src/js/Trading.js'

export default {
  name: 'MarketGraph',
  async setup () {
    const marketCandles = await PublicMarketCandles.marketCandles()
    const chartOptions = {
      chart: {
        type: 'candlestick'
      },
      title: {
        text: 'CandleStick Chart',
        align: 'left',
        style: {
          color: 'white'
        }
      },
      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            colors: '#fff'
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: '#fff'
          }
        }
      }
    }
    return {
      marketCandles,
      chartOptions
    }
  }
}
</script>
