<template>
  <div class="row justify-center items-center full-height">
    <div class="col-12 col-md-8 row justify-center">
      <span
        class="col-10 col-md-8 text-h1 text-bold text-white"
        v-text="'Trading Project'"
      />
      <span
        class="text-h6 col-10 col-md-8 text-white"
      >
        This small trading project consists of the implementation of TWAP (Time-Weighted Average Price), an algorithmic trade execution strategy that aims to achieve an average execution price close to the time-weighted average price of the period specified by the user.

        To do so, we will use the data provided by the DYDX Api to obtain the data from the crypto markets and perform a simulation of the results.

      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  setup () {
    return {}
  }
}
</script>
