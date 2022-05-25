<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <q-btn flat elevated v-text="'EN2U Portfolio'" to="/"></q-btn>
        </q-toolbar-title>
        <q-tabs align="left">
          <q-route-tab to="/trading" label="Trading" />
          <q-route-tab to="/data-analyst" label="Data Analyst" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    return {};
  },
});
</script>
