<template>
  <q-page
    padding
    class="bg-primary column"
  >
    <Introduction class="row window-height" />
    <Twap class="row window-height" />
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
