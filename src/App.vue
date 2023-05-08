<script>
import axios      from 'axios';
import { store }  from './data/store';
import Header     from './components/Header.vue';
import Jumbotron  from './components/Jumbotron.vue';
import Main       from './components/Main.vue';
// import Loader     from './components/partials/Loader.vue';

export default {
    name: 'App',
    components: {
      Header,
      Jumbotron,
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
        },
      getApiMoviesUpcoming (){
        axios.get(store.apiUrlMovieUpcoming).then(result => {
          store.movieUpcomingArray = [];
          store.movieUpcomingArray = result.data.results;
            console.log('Movie Upcoming -->', store.movieUpcomingArray);
        })
        }
    },
    mounted (){
      this.getApiMovies();
      this.getApiMoviesPopular();
      this.getApiMoviesUpcoming();
      this.getApiSeries();
    }
}
</script>

<template>
  <Header @searchMovie="getApiMovies" @searchSerie="getApiSeries" />
  <Jumbotron />
  <!-- <Loader v-if="store.isLoading" /> -->
  <!-- <div class="container-after-loading" v-else> -->
  <Main />
    <!-- <Footer /> -->
  <!-- </div> -->
</template>

<style lang="scss">
@use "./scss/main.scss" as *;
@use "./scss/partials/variables" as *;

body {
    min-height: 100vh;
    scroll-behavior: smooth !important;
    color: white;
    background-color: $dark-principal;
}

  .container-after-loading{
    background-color: $dark-principal;
  }
</style>