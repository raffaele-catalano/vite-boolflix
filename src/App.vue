<script>
import axios      from 'axios';
import { store }  from './data/store';
import Header     from './components/Header.vue';
import Main       from './components/Main.vue';
// import Footer     from './components/Footer.vue';
// import Loader     from './components/partials/Loader.vue';

export default {
    name: 'App',
    components: {
      Header,
      Main,
      // Footer,
      // Loader
    },
    data(){
      return {
        store
      }
    },
    methods: {
      getApiMovies(){
        // store.isLoading = true;
        axios.get(store.apiUrlMovie, {
          params: {
            query: store.searchInput
          }
        }).then(result => {
          store.movieArray  = result.data.results;
          store.displayCard = true;
            console.log('movie cercato -->', store.movieArray);
        })
      },
      getApiSeries(){
        // store.isLoading = true;
        axios.get(store.apiUrlSeries, {
          params: {
            query: store.searchInput
          }
        }).then(result => {
          store.seriesArray  = result.data.results;
          store.displayCard = true;
            console.log('series cercata -->', store.seriesArray);
        })
      },
      getApiMoviesPopular (){
        axios.get(store.apiUrlMoviePopular).then(result => {
          store.moviePopularArray = [];
          store.moviePopularArray = result.data.results;
            console.log('Movie Popular -->', store.moviePopularArray);
        })
        }
    },
    mounted (){
      this.getApiMovies();
      this.getApiMoviesPopular();
      this.getApiSeries();
    }
}
</script>

<template>
  <Header @searchMovie="getApiMovies" @searchSerie="getApiSeries" />

  <!-- <Loader v-if="store.isLoading" /> -->
  <!-- <div class="container-after-loading" v-else> -->
    <Main />
    <!-- <Footer /> -->
  <!-- </div> -->
</template>

<style lang="scss">
@use "./scss/main.scss" as *;

  .container-after-loading{
    background-color: $primary;
  }
</style>