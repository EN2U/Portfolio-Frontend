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
      />
    </div>
  </div>
</template>

<script>
import MarketConfig from 'src/components/Trading/Twap/MarketConfig.vue'
import MarketGraph from 'src/components/Trading/Twap/MarketGraph.vue'
import PublicMarketCandles from 'src/js/Trading.js'

import { ref, watch } from 'vue'

export default {
  name: 'Twap',
  components: { MarketConfig, MarketGraph },
  async setup () {
    const marketCandles = ref(await PublicMarketCandles.marketCandles())
    const marketOptions = await PublicMarketCandles.markets()
    const selectedMarket = ref(marketOptions[0])

    watch(selectedMarket, async () => {
      marketCandles.value = await PublicMarketCandles.marketCandles(selectedMarket.value)
    })
    return {
      marketCandles,
      marketOptions,
      selectedMarket
    }
  }
}
</script>
