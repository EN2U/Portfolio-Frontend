<template>
  <q-page>
    <Title class="row window-height bg-primary"></Title>
    <Description class="row window-height bg-primary"></Description>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Title from "components/Home/Title.vue";
import Description from "components/Home/Description.vue"

export default defineComponent({
  name: "Home",
  components: { Title, Description },
});
</script>
