<template>
  <q-page class="bg-primary">
    <Title class="row window-height  q-pb-xl"></Title>
    <ProjectHistory class="row q-py-xl "></ProjectHistory>
<!--     <TechnologyCarrousel class="row window-height "></TechnologyCarrousel>
 --><Technology class="extra_top_space q-pb-sm row window-height " style="min-height:1000px"></Technology>
    <Interest class="row window-height " style="min-height:400px"></Interest>

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