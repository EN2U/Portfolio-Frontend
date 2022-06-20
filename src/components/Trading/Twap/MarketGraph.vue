<template>
  <div
    v-if="marketCandles"
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
    },
    title: {
      required: true,
      type: String,
      default: ''
    }
  },
  async setup (props) {
    const chartOptions = {
      chart: {
        type: 'candlestick'
      },
      title: {
        text: props.title,
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
