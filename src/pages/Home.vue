<template>
  <q-page>
    <Title class="row window-height bg-primary"></Title>
    <Description class="row window-height bg-primary"></Description>
    <ProjectHistory class="row bg-primary"></ProjectHistory>
    <Technology class="row window-height bg-primary"></Technology>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Title from "components/Home/Title.vue";
import Description from "components/Home/Description.vue"
import ProjectHistory from "components/Home/ProjectHistory.vue"
import Technology from "components/Home/Technology.vue"

export default defineComponent({
  name: "Home",
  components: { Title, Description, ProjectHistory, Technology},
});
</script>
