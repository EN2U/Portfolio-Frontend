<template>
  <div class="q-pa-md row justify-center ">
    <div class="column col-12 col-md-8">
      <div class="row items-center">
        <div class="dot_container q-mr-md" />
        <span  class="text-h2 col-8 col-md-6  text-white text-bold" v-text="'Focused on'" />
      </div>
      <div class="row justify-around text-white ">
        <div class="col-12 col-md-6 row q-py-lg justify-around items-center">
          <span class="text-h6 col-4 ">Machine learning focused on algorithmic trading</span>
          <div class="col-6 row justify-center">
            <q-rating
              :model-value="5"
              icon-half="star_half"
              size="2em"
              color="orange"
              readonly
            />
          </div>
        </div>
        <div class="col-12 col-md-6 row q-py-lg justify-around items-center">
          <span class="text-h6 col-4 ">Data analyst</span>
          <div class="col-6 row justify-center">
            <q-rating
              :model-value="5"
              icon-half="star_half"
              size="2em"
              color="orange"
              readonly
            />
          </div>
        </div>

        <div class="col-12 col-md-6 row q-py-lg justify-around items-center">
          <span class="text-h6 col-4 ">Full stack development</span>
          <div class="col-6 row justify-center">
            <q-knob
              show-value
              font-size="12px"
              :model-value="80"
              size="50px"
              :thickness="0.22"
              color="accent"
              track-color="grey-3"
              class="q-ma-md"
            >
              {{ 95 }}%
            </q-knob>
          </div>
        </div>
        <div class="col-12 col-md-6 row q-py-lg justify-around items-center">
          <span class="text-h6 col-4 ">Finances</span>
          <div class="col-6 row justify-center">
            <q-knob
              show-value
              font-size="12px"
              :model-value="67"
              size="50px"
              :thickness="0.22"
              color="accent"
              track-color="grey-3"
              class=""
            >
              {{ 67 }}%
            </q-knob>
          </div>
        </div>
        <div class="col-12 col-md-6 row q-py-lg justify-around items-center">
          <span class="text-h6 col-4 ">Blockchain</span>
          <div class="col-6">
            <q-linear-progress class="bg-white" size="20px" rounded :value="0.8" color="accent">
              <div class="absolute-full flex flex-center">
                <q-badge class="text-bold" color="white" text-color="accent" :label="`80%`" />
              </div>
            </q-linear-progress>
          </div>
        </div>
        <div class="col-12 col-md-6 row q-py-lg justify-around items-center">
          <span class="text-h6 col-4 ">Microservices management</span>
          <div class="col-6">
            <q-linear-progress class="bg-white" size="20px" rounded :value="0.8" color="accent">
              <div class="absolute-full flex flex-center">
                <q-badge class="text-bold " color="white" text-color="accent" :label="`80%`" />
              </div>
            </q-linear-progress>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Interest',
  setup () {

    return {

    }
  }
}
</script>

