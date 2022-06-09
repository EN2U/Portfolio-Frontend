<template>
  <q-page>
    <Title class="row window-height bg-primary"></Title>
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
