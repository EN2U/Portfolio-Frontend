<template>
  <q-page
    padding
    class="bg-primary"
  >
    <span v-text="'Under construction'" />
    <q-select
      v-model="selectedMarket"
      :options="marketOptions"
    />
    <VueApexCharts
      class=""
      style="width: 1000px; "
      :series="marketCandles"
      :options="chartOptions"
    />
  </q-page>
</template>

<script>
import PublicMarketCandles from 'src/js/Trading.js'

import { onMounted, ref } from 'vue'

export default {
  name: 'Trading',
  setup () {
    const marketOptions = ref([])
    const selectedMarket = ref('')
    const marketCandles = ref([])

    onMounted(async () => {
      marketOptions.value = await PublicMarketCandles.markets()
      selectedMarket.value = marketOptions.value[0]
      marketCandles.value = await PublicMarketCandles.marketCandles()
    })

    const chartOptions =
          {
            chart: {
              type: 'candlestick',
              height: 350
            },
            title: {
              text: 'CandleStick Chart',
              align: 'left'
            },
            xaxis: {
              type: 'datetime'
            },
            yaxis: {
              tooltip: {
                enabled: true
              }
            }
          }

    return {
      marketOptions,
      selectedMarket,
      marketCandles,
      chartOptions
    }
  }
}
</script>
