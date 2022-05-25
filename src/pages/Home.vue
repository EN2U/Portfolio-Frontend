<template>
  <q-page class="flex flex-center">
    <div class="column">
      <Title></Title>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Title from "components/Home/Title.vue";

export default defineComponent({
  name: "Home",
  components: { Title },
});
</script>
