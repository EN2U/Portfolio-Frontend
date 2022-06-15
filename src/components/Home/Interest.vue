<template>
  <div class="q-pa-md row justify-center ">
    <div class="column col-12 col-md-8">
      <div class="row items-center">
        <div class="dot_container q-mr-md" />
        <span  class="text-h2 col-8 col-md-6  text-white text-bold" v-text="'Focused on'" />
      </div>
      <div class="row justify-around text-white">
        <div class="col-12 col-md-6 row q-py-lg justify-around items-center" v-for="(data, index) in interestData" :key="index">
          <span class="text-h6 col-4 " v-text="data.text"></span>
          <div class="col-6 row justify-center">
            <q-rating
              :model-value="data.starsValue"
              icon-half="star_half"
              size="2em"
              color="orange"
              readonly
            />
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { ref } from "vue"
export default {
  name: 'Interest',
  setup () {
    const interestData = ref([
      {
        text: "Machine learning focused on algorithmic trading",
        starsValue: 4,
      },
      {
        text: "Data analyst",
        starsValue: 4.5,
      },
      {
        text: "Full stack development",
        starsValue: 3.5,
      },
      {
        text: "Finances",
        starsValue: 3,
      },
      {
        text: "Blockchain",
        starsValue: 2.5,
      },
      {
        text: "Microservices management",
        starsValue: 3,
      },
      ]) 
    return {
      interestData
    }
  }
}
</script>

