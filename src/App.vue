<template>
  <v-app>
    <v-toolbar
      dark
      prominent
      image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon @click="drawer=!drawer"/>
      <v-toolbar-title>Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    <v-layout>
      <v-navigation-drawer
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        permanent
        theme="dark"
        v-model="drawer"
      >
        <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
        <v-list nav >
          <v-list-item
            link
            v-for="item in items" 
            :key="item.title"
            :to="item.to"
            :title="item.title"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px">
        <router-view/>
      </v-main>
    </v-layout>
</v-app>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    const items = [
      {title: 'DashBoard', icon: 'mdi-view-dashboard', to: '/'},
      {title: 'GridSystem', icon: 'mdi-view-dashboard', to: '/grid-system'},
    ];
    const drawer = ref(false);
    return {
      items,
      drawer,
    }
  }
}
</script>
<style>
</style>
