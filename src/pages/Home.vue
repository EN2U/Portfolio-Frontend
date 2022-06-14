<template>
  <q-page>
    <Title class="row window-height bg-primary q-pb-xl"></Title>
    <ProjectHistory class="row q-py-xl bg-primary"></ProjectHistory>
<!--     <TechnologyCarrousel class="row window-height bg-primary"></TechnologyCarrousel>
 --><Technology class="extra_top_space row window-height bg-primary"></Technology>
    <Interest class="row window-height bg-primary"></Interest>

  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Title from "components/Home/Title.vue";
import ProjectHistory from "components/Home/ProjectHistory.vue"
/* import TechnologyCarrousel from "src/components/Home/TechnologyCarrousel.vue"
 */import Technology from "src/components/Home/Technology.vue"
import Interest from "src/components/Home/Interest.vue"

export default defineComponent({
  name: "Home",
  components: { Title, ProjectHistory, Technology, Interest},
});
</script>

<style lang="sass">
.extra_top_space
  padding-top: 200px !important
</style>