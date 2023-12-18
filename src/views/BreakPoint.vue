<template>
  HelloWorlds
  <v-card>
    <v-card-title>
      $vuetify.display.name:   {{ $vuetify.display.name }}
      <br/>
      height() : 
    </v-card-title>  
    <v-container>
    </v-container>
  </v-card>
</template>
<script>
export default {
  setup() {
    const height = () => {
      switch(this.$vuetify.display.name){
        case 'xs' : return 100;
        case 'sm' : return 200;
        case 'md' : return 300;
        case 'lg' : return 400;
        default: return 500; 
      }
    };
    return {
      height,
    };
  }
}
</script>
<style>

</style>