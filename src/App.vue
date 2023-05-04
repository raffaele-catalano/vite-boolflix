<script>
import axios      from 'axios';
import { store }  from './data/store';
import Header     from './components/Header.vue';
import Main       from './components/Main.vue';
// import Footer     from './components/Footer.vue';
// import Loader     from './components/partial/Loader.vue';

export default {
    name: 'App',
    components: {
      Header,
      Main,
      // Footer,
      // Loader
    },
    data(){
      return{
        store
      }
    },
    methods: {
      getApi(){
        store.isLoading = true;
        axios.get(store.apiUrl, {
          params: {
          }
        }).then(result => {
        })
      },
    },
    mounted (){
      this.getApi();
    }
}
</script>

<template>
  <Header />
  <!-- <Loader v-if="store.isLoading" /> -->
  <!-- <div class="container-after-loading" v-else> -->
    <Main />
    <!-- <Footer /> -->
  <!-- </div> -->
</template>

<style lang="scss">
@use "./scss/main.scss" as *;
// @use "../src/scss/partials/variables" as *;

  .container-after-loading{
    background-color: $primary;
  }
</style>