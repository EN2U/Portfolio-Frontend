<template>
  <q-page>
    <Title class="row window-height bg-primary q-pb-xl"></Title>
    <ProjectHistory class="row q-pt-xl bg-primary"></ProjectHistory>
    <Technology class="row window-height bg-primary"></Technology>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Title from "components/Home/Title.vue";
import ProjectHistory from "components/Home/ProjectHistory.vue"
import Technology from "components/Home/Technology.vue"

export default defineComponent({
  name: "Home",
  components: { Title, ProjectHistory, Technology},
});
</script>
