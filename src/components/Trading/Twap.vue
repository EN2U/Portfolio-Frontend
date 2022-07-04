<template>
  <div class="row justify-center">
    <MarketConfig
      v-model="selectedMarket"
      :market-options="marketOptions"
    />
    <div class="full-width row justify-center full-height q-pt-xl">
      <MarketGraph
        class=" col-12 col-md-6"
        :market-candles="marketCandles"
        :title="selectedMarket"
      />
    </div>
  </div>
</template>

<script>
import MarketConfig from 'src/components/Trading/Twap/MarketConfig.vue'
import MarketGraph from 'src/components/Trading/Twap/MarketGraph.vue'
import PublicMarketCandles from 'src/js/Trading.js'
import TWAP from 'src/js/TWAP.js'

import { ref, watch } from 'vue'

export default {
  name: 'Twap',
  components: { MarketConfig, MarketGraph },
  async setup () {
    const marketCandles = ref(await PublicMarketCandles.marketCandles({}))
    const marketOptions = await PublicMarketCandles.markets()
    const selectedMarket = ref(marketOptions[0])
    const candlestickAverage = ref(await new TWAP(marketCandles.value[0].data.length, '1DAY', 1000, 'BTC-USD').candlestickOrderCalc())

    const marketSeries = [{
      name: 'line',
      type: 'line',
      data: candlestickAverage.value
    }, {
      name: 'candle',
      type: 'candlestick',
      data: marketCandles.value
    }]

    console.log(marketSeries)
    watch(selectedMarket, async () => {
      marketCandles.value = await PublicMarketCandles.marketCandles(selectedMarket.value)
    })
    return {
      marketCandles,
      marketOptions,
      selectedMarket,
      marketSeries
    }
  }
}
</script>
