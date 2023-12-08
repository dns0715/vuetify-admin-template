<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        permanent
        theme="dark"
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
  </v-card>
</template>

<script>
export default {
  setup(){
    const items = [
      {title: 'DashBoard', icon: 'mdi-view-dashboard', to: '/'},
      {title: 'GridSystem', icon: 'mdi-view-dashboard', to: '/grid-system'},
    ];
    return {
      items,
    }
  }
}
</script>
<style>
</style>
