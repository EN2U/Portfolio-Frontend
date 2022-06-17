<template>
  <div class="column full-width ">
    <div class="col-2 row justify-center">
      <div class="col-2">
        <q-select
          v-model="selectedMarket"
          filled
          standout
          class="col-3 bg-secondary"
          label-color="white"
          :options="marketOptions"
          input-class="text-red"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PublicMarketCandles from 'src/js/Trading'
import { ref } from 'vue'
export default {
  name: 'MarketConf',
  async setup () {
    const marketOptions = await PublicMarketCandles.markets()
    const selectedMarket = ref(marketOptions[0])
    console.log(marketOptions, selectedMarket.value)
    return {
      marketOptions,
      selectedMarket
    }
  }
}
</script>

<style lang="sass" scoped>
.btn-dropdown__arrow-icon .q-icon
  color blue
  display inline-block
  overflow hidden

</style>
