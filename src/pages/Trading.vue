<template>
  <q-page
    padding
    class="bg-primary column"
  >
    <Introduction class="row window-height" />
    <div class="col-4 row items-center justify-center text-white q-pb-md">
      <q-select
        v-model="selectedMarket"
        class="text-white col-3"
        style="text-color: white !important"
        :options="marketOptions"
      />
    </div>
    <div class="col-9 row items-center justify-center">
      <VueApexCharts
        style="width: 1000px"
        :series="marketCandles"
        :options="chartOptions"
      />
    </div>
  </q-page>
</template>

<script>
import PublicMarketCandles from 'src/js/Trading.js'

import { onMounted, ref } from 'vue'
import Introduction from 'src/components/Trading/Introduction.vue'

export default {
  name: 'Trading',
  components: { Introduction },
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
      marketOptions,
      selectedMarket,
      marketCandles,
      chartOptions
    }
  }
}
</script>
