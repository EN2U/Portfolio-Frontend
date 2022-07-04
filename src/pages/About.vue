<template>
  <q-page
    padding
    class="bg-primary row justify-center items-center"
  >
    <div class="row full-width full-height justify-center items-center">
      <div class="row card-size bg-primary justify-between items-center">
        <div class="col-lg-5 col-12 q-ma-sm  row items-center justify-center">
          <q-skeleton
            class="col-lg-8 col-7"
            style="min-width: 300px; min-height: 400px; "
          >
            fotito mia :)
          </q-skeleton>
        </div>
        <div class="col-lg-6 col-12 q-ma-sm row justify-center items-center">
          <span
            :class="layout"
            class="text-body2 text-white"
          >
            My name is Eduardo Nuez Wehbe, a full stack developer currently living in the Canary Islands.<br><br>

            I am a very active person in my day to day life, I like to do any kind of sport, go hiking on weekends to the mountains and go to explore beaches that nobody knows. I am also a member of the Canarian swimming federation where I participate in regional competitions and tournaments.<br><br>

            I have always considered myself a curious person who loves to move, to challenge myself, with a great ambition to be the best in everything I do. Sport has helped me a lot here, thanks to teach me to be constant and persevere with what I do until I achieve my goal.<br><br>

            Regarding the work environment, I always like to refer to myself as a sponge, I try to learn from my colleagues everything I can to improve my methodologies and new techniques that can be more efficient when it comes to getting the job done. For me, the most important thing is always to perform my job with the highest quality and efficiency possible, to help the company I work for grow.<br><br>

            When I have free time I usually dedicate a few hours a week to study and especially to learn about algorithmic trading and data analysis related to it. I have a project with a partner in this area that we are developing together.

          </span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { computed } from 'vue'
export default {
  name: 'About',
  setup () {
    const $q = useQuasar()

    return {
      layout: computed(() => {
        return $q.screen.lt.lg ? 'text-center' : ''
      })
    }
  }
}
</script>

<style lang="sass">
.card-size
  width: 90%
  height: 90%

</style>
