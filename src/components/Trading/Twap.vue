<template>
  <div class="row justify-center">
    <Suspense>
      <template #default>
        <MarketConfig />
      </template>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
    <Suspense>
      <template #default>
        <MarketGraph />
      </template>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </div>
</template>

<script>
import MarketConfig from 'src/components/Trading/Twap/MarketConfig.vue'
import MarketGraph from 'src/components/Trading/Twap/MarketGraph.vue'

export default {
  name: 'Twap',
  components: { MarketConfig, MarketGraph },
  setup () {
    return {}
  }
}
</script>
