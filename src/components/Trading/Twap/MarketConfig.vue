<template>
  <div class="column full-width ">
    <div class="col-2 row justify-center">
      <div class="col-10 col-md-2">
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
import { useModelWrapper } from 'src/js/ModdleWrapper'

export default {
  name: 'MarketConf',
  props: {
    modelValue: {
      required: true,
      type: String,
      default: ''
    },
    marketOptions: {
      required: true,
      type: Array,
      default: null
    }
  },
  setup (props, { emit }) {
    return {
      selectedMarket: useModelWrapper(props, emit, 'modelValue')
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
