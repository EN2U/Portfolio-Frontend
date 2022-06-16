<template>
  <div
    v-if="carouselSlides.lenght != 0"
    class="q-pa-md row justify-center items-center"
  >
    <q-carousel
      v-model="slide"
      animated
      style="width: 70%; height: 70%"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      control-color="secondary"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        v-for="(value, index) in carouselSlides"
        :key="index"
        class="row items-center justify-center"
        :name="index"
      >
        <div class="col-8 col-md-6 row justify-center">
          <q-img
            style="max-height: 350px; max-width: 350px; min-width: 150px; min-height: 150px"
            fit="scale-down"
            class="col-8 col-md-8"
            :src="value.img"
          />
        </div>
        <div class="col-8 col-md-6 row justify-center q-pa-xl">
          <span
            class="text-h6"
            v-text="value.text"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const carouselSlides = ref([
      {
        img: require('assets/Home/go.png'),
        text: '8 months of experience working with the language for the development of trading-oriented microservices. These range from the implementation of a backtesting module for the analysis and performance of strategies, microservices management through a subscriber publisher (NATS), portfolio management and optimisation of results through machine learning (cross validation and algorithms mentioned by Marcos de Prado). I have also implemented different encryption algorithms such as SNOW, AES or E0 bluethooth and the telegram api (tgtbot) as an alert provider.'
      },
      {
        img: require('assets/Home/python.png'),
        text: 'Development of a multitude of tools mainly focused on the development of APIs and the use of data analysis. These include the use of the language for higher level testing of trading strategies and the use of web scraping to obtain data (using playwright or puppeteer).'
      },
      {
        img: require('assets/Home/django.png'),
        text: 'Development of a portfolio management and financial data visualisation tool, adding specific user management modules with an emphasis on system security and speed. Also for production deployments, I have worked with gunicorn as HTTP server.'
      },
      {
        img: require('assets/Home/javascript.png'),
        text: 'Language used for frontend-oriented development, making use of callbacks, promises, scope, etc., with a strong emphasis on functional programming language. In addition, I have used it to solve games or programming challenges such as the Advent of Code.'
      },
      {
        img: require('assets/Home/node.svg'),
        text: 'Making use of express for the implementation of a rest api following a MEVN scheme. Implementing a model view controller (mvc) for an e-commerce platform along with data and information visualisation.'
      },
      {
        img: require('assets/Home/vue.png'),
        text: 'Web framework with which I have been working the longest (about 1-2 years). I have worked on social network simulation, e-commerce platforms, user management tools and financial monitoring.'
      },
      {
        img: require('assets/Home/quasar.png'),
        text: 'Quasar is a tool for the development of web platforms for vue. Working with it since 1 year ago for most of the projects I have done as a web developer doing data analysis presentation projects, using as backend Django and Micronaut.'
      },
      {
        img: require('assets/Home/mongodb.svg'),
        text: 'Mainly used for small and educational projects (I have worked on it exclusively for several months during my studies). Using it for MEVN applications for user management and also for data unification. '
      },
      {
        img: require('assets/Home/sql.jpg'),
        text: 'Using it mainly with mariadb, mysql and sql server. Realizing a model of control and management of attendance to cinemas under the covid protocol and for financial systems with user management.'
      },
      {
        img: require('assets/Home/docker.png'),
        text: 'Infrastructure deployment in development environments, using docker networks, from trading tools to web development deployments interconnecting systems with nginx.'
      }
    ])
    return {
      carouselSlides,
      slide: ref(0),
      autoplay: ref(true)
    }
  }
}
</script>
