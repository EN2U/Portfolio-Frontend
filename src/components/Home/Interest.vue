<template>
  <div class="q-pa-md row justify-center ">
    <div class="column col-8">
      <div class="row items-center">
        <div class="dot_container q-mr-md" />
        <span  class="text-h2 col-4  text-white text-bold" v-text="'Focused on'" />
      </div>
      <div class="row justify-around text-white ">
        <div class="col-6 row q-py-lg justify-around items-center">
          <span class="text-h6 col-4 ">Machine learning focused on algorithmic trading</span>
          <q-rating
            :model-value="5"
            icon-half="star_half"
            size="2em"
            color="orange"
            readonly
          />
        </div>
        <div class="col-6 row q-py-lg justify-around items-center">
          <span class="text-h6 col-4 ">Data analyst</span>
          <q-rating
            :model-value="5"
            icon-half="star_half"
            size="2em"
            color="orange"
            readonly
          />
        </div>

        <div class="col-6 row q-py-lg justify-around items-center">
          <span class="text-h6 col-4 ">Full stack development</span>
          <q-rating
            :model-value="4.5"
            icon-half="star_half"
            size="2em"
            color="orange"
            readonly
          />
        </div>
        <div class="col-6 row q-py-lg justify-around items-center">
          <span class="text-h6 col-4 ">Finances</span>
          <q-rating
            :model-value="4"
            icon-half="star_half"
            size="2em"
            color="orange"
            readonly
          />
        </div>
        <div class="col-6 row q-py-lg justify-around items-center">
          <span class="text-h6 col-4 ">Blockchain</span>
          <q-rating
            :model-value="3"
            icon-half="star_half"
            size="2em"
            color="orange"
            readonly
          />
        </div>
        <div class="col-6 row q-py-lg justify-around items-center">
          <span class="text-h6 col-4 ">Microservices management</span>
          <q-rating
            :model-value="3.5"
            icon-half="star_half"
            size="2em"
            color="orange"
            readonly
          />
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

