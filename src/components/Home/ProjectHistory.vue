<template>
  <div class="q-px-lg q-pb-md row justify-center text-white">
    <q-timeline class="col-8" :layout="layout" color="secondary">
      <q-timeline-entry heading>
        <span class="text-bold" v-text="'Projects Timeline'"></span>
      </q-timeline-entry>

      <q-timeline-entry
        title="Market analyst and Portfolio management Tools"
        subtitle="On Going"
        side="left"
        icon="mdi-sync"
      >
        <div class="text-body1">
          I am currently working on portfolio management tools for trading control and money management and as a technical market analyst applying machine learning concepts.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Company change from Kaudal to Quisnatta and atlantic-cobalt"
        subtitle="September 7, 2021"
        side="right"
        color="orange"
        icon="done_all"
      >
        <div class="text-body1">
          With the end of my final degree project, I moved to Quisnatta, where I am still working as a full stack developer and as a more finance-oriented data analyst.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="End of internship and start working as an employee at Kaudal."
        subtitle="June 7, 2021"
        side="left"
        icon="mdi-certificate"
      >
        <div class="text-body1">
          I finished my internship and started to work within the company as a Full Stack Developer

          I continued working on the administration project but this time with a higher position of responsibility, where I mainly dedicated myself to optimize and improve the tool, teaching colleagues the best practices and the deeper functioning of the vue framework.  
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="End of participation in the Trading project"
        subtitle="May 07, 2021"
        side="right"
        icon="mdi-alert"
      >
        <div class="text-body1">
          I ended my participation in the cryptocurrency trading project due to lack of time because I had too much work due to external internships and my final degree project. <br><br>

          This didn't keep me away from this sector. I started researching independently scientific papers about influential people in this sector (such as Marcos Lopez de Prado) and training myself in the free time I had. 
        </div>
      </q-timeline-entry>


      <q-timeline-entry
        title="Externships at Kaudal as Full Stack Developer"
        subtitle="March 22, 2021"
        side="left"
        icon="mdi-school"
      >
        <div class="text-body1">
         I joined the company Kaudal as an intern, doing small tasks mainly oriented to solve bugs and errors in an internal administration application.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Cryptocurrency Trading"
        subtitle="October 20, 2020"
        side="right"
        icon="mdi-finance"
      >
        <div class="text-body1">
          Before the end of the last academic year, together with some fellow students, we were looking to develop a project far from what we saw in the degree. That is why I became interested in the world of blockchain and cryptocurrencies. This indirectly led me to learn about how crypto finance works and to start a trading project within this sector. 
        </div>
      </q-timeline-entry>



      


    </q-timeline>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { computed } from 'vue'

export default {
  name: 'ProjectHistory',
  setup () {
    const $q = useQuasar()

    return {
      layout: computed(() => {
        return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
      })
    }
  }
}

</script>
