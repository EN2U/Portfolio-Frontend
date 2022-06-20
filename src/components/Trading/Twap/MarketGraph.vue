<template>
  <div
    v-if="marketCandles"
    class=""
  >
    <VueApexCharts
      :series="marketCandles"
      :options="chartOptions"
    />
  </div>
</template>

<script>

export default {
  name: 'MarketGraph',
  props: {
    marketCandles: {
      required: true,
      type: Object,
      default: null
    }
  },
  async setup () {
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
      chartOptions
    }
  }
}
</script>

<style lang="sass" scoped>
#marketChart
  max-width: 1400px
</style>
