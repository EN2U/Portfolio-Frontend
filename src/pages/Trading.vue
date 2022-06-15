<template>
  <q-page padding class="bg-primary">
    <span v-text="'Under construction'"></span>
  </q-page>
</template>

<script>
import MarketCandles from "src/js/Trading.js"
export default {
  name: "Trading",
  setup () {
    const marketInfo = new MarketCandles()
    console.log(marketInfo)
    return {
      
    }
  }
};
</script>
