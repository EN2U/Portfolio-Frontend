<template>
  <q-layout view="hhh lpR fff">
    <q-header
      elevated
      class="bg-secondary"
    >
      <q-toolbar>
        <q-toolbar-title>
          <q-btn
            stretch
            flat
            elevated
            label="Eduardo"
            to="/"
          />
        </q-toolbar-title>
        <q-tabs align="left">
          <q-route-tab
            to="/trading"
            label="Trading"
          />
          <q-route-tab
            to="/data-analyst"
            label="Data Analyst"
          />
        </q-tabs>
      </q-toolbar>
    </q-header>
    <q-footer class="bg-secondary text-white">
      <q-toolbar class="row items-center justify-center">
        <div class="row items-center justify-center">
          <div class="q-px-md">
            <span
              class="q-pr-sm text-bold"
              v-text="'nuezwehbe@gmail.com'"
            />
            <q-btn
              href="mailto:nuezwehbe@gmail.com"
              icon="email"
              size="sm"
            />
          </div>
          <div class="q-px-md">
            <span
              class="q-pr-sm text-bold"
              v-text="'en2u'"
            />
            <q-btn
              href="https://github.com/EN2U"
              icon="mdi-github"
              size="sm"
            />
          </div>
          <div class="q-px-md">
            <span
              class="q-pr-sm text-bold"
              v-text="'eduardo-nuez-wehbe'"
            />
            <q-btn
              target="_blank"
              href="https://www.linkedin.com/in/eduardo-nuez-wehbe-721198224"
              icon="mdi-linkedin"
              size="sm"
            />
          </div>
        </div>
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {},

  setup () {
    return {}
  }
})
</script>
