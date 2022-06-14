<template>
  <div class="q-pa-md row justify-center ">
    <div class="column col-12 col-md-8">
      <div class="row items-center ">
        <div class="dot_container q-mr-md"></div>
        <span  class="text-h2 col-1  text-white text-bold" v-text="'Technologies'"></span>
      </div>
      <div class="row q-py-sm">
        <div v-for="(x, index) in tech" :key="index" >
          <q-btn @click="newSelection(index)" :color="x.selected ? 'white' : '' " size="xl" :icon="`img:${x.img}`" round ></q-btn>
        </div>
      </div>
      <div class="text-h6 col-1 q-pt-md text-white text-bold">
        <span v-text="techText"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  name: 'Technology',
  setup () {
    
    const tech = ref([
      {
        img: require("assets/Home/go.png"),
        text: "8 months of experience working with the language for the development of trading-oriented microservices. These range from the implementation of a backtesting module for the analysis and performance of strategies, microservices management through a subscriber publisher (NATS), portfolio management and optimisation of results through machine learning (cross validation and algorithms mentioned by Marcos de Prado). I have also implemented different encryption algorithms such as SNOW, AES or E0 bluethooth and the telegram api (tgtbot) as an alert provider.",
        selected: true
      },
      {
        img: require("assets/Home/python.png"),
        text: "Development of a multitude of tools mainly focused on the development of APIs and the use of data analysis. These include the use of the language for higher level testing of trading strategies and the use of web scraping to obtain data (using playwright or puppeteer).",
        selected: false
      },
      {
        img: require("assets/Home/django.jpg"),
        text: "Development of a portfolio management and financial data visualisation tool, adding specific user management modules with an emphasis on system security and speed. Also for production deployments, I have worked with gunicorn as HTTP server.",
        selected: false
      },
      {
        img: require("assets/Home/javascript.png"),
        text: "Language used for frontend-oriented development, making use of callbacks, promises, scope, etc., with a strong emphasis on functional programming language. In addition, I have used it to solve games or programming challenges such as the Advent of Code.",
        selected: false
      },
      {
        img: require("assets/Home/node.png"),
        text: "Making use of express for the implementation of a rest api following a MEVN scheme. Implementing a model view controller (mvc) for an e-commerce platform along with data and information visualisation.",
        selected: false
      },
      {
        img: require("assets/Home/vue.png"),
        text: "Web framework with which I have been working the longest (about 1-2 years). I have worked on social network simulation, e-commerce platforms, user management tools and financial monitoring.",
        selected: false
      },
      {
        img: require("assets/Home/quasar.png"),
        text: "Quasar is a tool for the development of web platforms for vue. Working with it since 1 year ago for most of the projects I have done as a web developer doing data analysis presentation projects, using as backend Django and Micronaut.",
        selected: false
      },
      {
        img: require("assets/Home/mongodb.svg"),
        text: "Mainly used for small and educational projects (I have worked on it exclusively for several months during my studies). Using it for MEVN applications for user management and also for data unification. ",
        selected: false
      },
      {
        img: require("assets/Home/sql.png"),
        text: "Using it mainly with mariadb, mysql and sql server. Realizing a model of control and management of attendance to cinemas under the covid protocol and for financial systems with user management.",
        selected: false
      },
      {
        img: require("assets/Home/docker.webp"),
        text: "Infrastructure deployment in development environments, using docker networks, from trading tools to web development deployments interconnecting systems with nginx.",
        selected: false
      },
    ])
    
    const techText = computed(() => {
      return tech.value.find(val => val.selected).text
    })

    function newSelection(indexSelected) {
      tech.value = tech.value.map((value, index) => { 
        indexSelected === index ? value.selected = true : value.selected = false
        return value
      })
    }

    return {
      tech,
      techText,
      newSelection
    }
  }
}
</script>
