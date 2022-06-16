<template>
  <div class="q-px-lg q-pb-md row justify-center text-white">
    <q-timeline
      class="col-8"
      :layout="layout"
      color="secondary"
    >
      <q-timeline-entry heading>
        <span
          class="text-bold"
          v-text="'Projects Timeline'"
        />
      </q-timeline-entry>

      <q-timeline-entry
        v-for="(data,index) in timelineData"
        :key="index"
        :title="data.title"
        :subtitle="data.subtitle"
        :side="data.side"
        :icon="data.icon"
        :color="data.color"
      >
        <span
          class="text-body1"
          v-text="data.text"
        />
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
import { useQuasar } from 'quasar'
import { computed, ref } from 'vue'

export default {
  name: 'ProjectHistory',
  setup () {
    const $q = useQuasar()
    const timelineData = ref([
      {
        title: 'Market analyst and Portfolio management Tools',
        subtitle: 'On Going',
        side: 'left',
        icon: 'mdi-sync',
        color: '',
        text: 'I am currently working on portfolio management tools for trading control and money management and as a technical market analyst applying machine learning concepts.'
      },
      {
        title: 'Company change from Kaudal to Quisnatta and Atlantic-Cobalt',
        subtitle: 'September 7, 2021',
        side: 'right',
        icon: 'done_all',
        color: 'orange',
        text: 'With the end of my final degree project, I moved to Quisnatta, where I am still working as a full stack developer and as a more finance-oriented data analyst.'
      },
      {
        title: 'End of internship and start working as an employee at Kaudal.',
        subtitle: 'June 7, 2021',
        side: 'left',
        icon: 'mdi-certificate',
        color: '',
        text: 'I finished my internship and started to work within the company as a Full Stack Developer. I continued working on the administration project but this time with a higher position of responsibility, where I mainly dedicated myself to optimize and improve the tool, teaching colleagues the best practices and the deeper functioning of the vue framework.  '
      },
      {
        title: 'End of participation in the Trading project',
        subtitle: 'May 07, 2021',
        side: 'right',
        icon: 'mdi-alert',
        color: '',
        text: "I ended my participation in the cryptocurrency trading project due to lack of time because I had too much work due to external internships and my final degree project. This didn't keep me away from this sector. I started researching independently scientific papers about influential people in this sector (such as Marcos Lopez de Prado) and training myself in the free time I had. "
      },
      {
        title: 'Externships at Kaudal as Full Stack Developer',
        subtitle: 'March 22, 2021',
        side: 'left',
        icon: 'mdi-school',
        color: '',
        text: 'I joined the company Kaudal as an intern, doing small tasks mainly oriented to solve bugs and errors in an internal administration application.'
      },
      {
        title: 'Cryptocurrency Trading',
        subtitle: 'October 20, 2020',
        side: 'right',
        icon: 'mdi-finance',
        color: '',
        text: 'Before the end of the last academic year, together with some fellow students, we were looking to develop a project far from what we saw in the degree. That is why I became interested in the world of blockchain and cryptocurrencies. This indirectly led me to learn about how crypto finance works and to start a trading project within this sector. '
      }
    ])

    return {
      timelineData,
      layout: computed(() => {
        return $q.screen.lt.sm ? 'dense' : ($q.screen.lt.md ? 'comfortable' : 'loose')
      })
    }
  }
}

</script>
