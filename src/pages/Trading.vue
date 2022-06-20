<template>
  <q-page
    padding
    class="bg-primary column"
  >
    <Introduction class="row window-height" />
    <Suspense>
      <template #default>
        <Twap class="row window-height" />
      </template>
      <template #fallback>
        <span>Loading...</span>
      </template>
    </Suspense>
  </q-page>
</template>

<script>
import Introduction from 'src/components/Trading/Introduction.vue'
import Twap from 'src/components/Trading/Twap.vue'

export default {
  name: 'Trading',
  components: { Introduction, Twap },
  setup () {
    return {

    }
  }
}
</script>
