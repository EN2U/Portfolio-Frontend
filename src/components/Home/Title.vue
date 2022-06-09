<template>
  <div class="row justify-around full-height items-center ">
    <div class="col-12 col-md-6 row justify-center items-center">
      <div>
        <span class="text-h1 text-weight-bolder text-white q-ma-xl">EN2U</span>
        <div class="column justify-end full-width">
          <span
            class="text-weight-bolder text-italic text-white caption text-right"
            v-text="'Software developer'"
          ></span>
          <span
            class="text-weight-bolder text-italic text-white caption text-right"
            v-text="'Graduated on University of La Laguna'"
          ></span>
          <span
            class="text-weight-bolder text-italic text-white caption text-right"
            v-text="'Programming is my passion'"
          ></span>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 text-white row justify-center items-center" style="width: 50%; height: 50%">
      <q-skeleton style="min-width: 500px; min-height: 500px; width: 70%; height: 70%">
        fotito mia :)
      </q-skeleton>
    </div>
  </div>
</template>

<script>
export default {
  name: "Title",
  setup() {
    return {};
  },
};
</script>
