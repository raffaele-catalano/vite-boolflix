<script>
import { store }        from '../data/store'
import Card             from './partials/Card.vue'

export default {
    name: 'Main',
    components: {
        Card
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <main class="p-5">
        
        
        <h2 v-if="store.movieArray.length > 0">Movies</h2>
        <div v-if="store.movieArray.length > 0" class="row row-cols-5 mb-3">
            <Card v-for="movie in store.movieArray" :key="movie.id"
            :Poster="movie.poster_path"
            :Title="movie.title"
            :OriginalTitle="movie.original_title" 
            :Overview="movie.overview"
            :language="movie.original_language"
            :averageScore="Math.round(movie.vote_average / 2)"/>
        </div>
        
        <h2 v-if="store.seriesArray.length > 0">TV Series</h2>
        <div v-if="store.seriesArray.length > 0" class="row row-cols-5 mb-3">
            <Card v-for="serie in store.seriesArray" :key="serie.id"
            :Poster="serie.poster_path"
            :Title="serie.name"
            :OriginalTitle="serie.original_name"
            :Overview="serie.overview"
            :language="serie.original_language"
            :averageScore="Math.round(serie.vote_average / 2)"/>
        </div>
        
        <h2>Popular Movies</h2>
        <div class="row row-cols-5 mb-3">
            <Card v-for="movie in store.moviePopularArray" :key="movie.id"
            :Poster="movie.poster_path"
            :Title="movie.title"
            :OriginalTitle="movie.original_title" 
            :Overview="movie.overview"
            :language="movie.original_language"
            :averageScore="Math.round(movie.vote_average / 2)"/>
        </div>

    </main>
</template>

<style lang="scss" scoped>
@use "../src/scss/partials/variables" as *;

    main {
        background-color: $primary;
    }
</style>