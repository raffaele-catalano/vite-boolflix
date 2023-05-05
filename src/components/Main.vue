<script>
import { store }        from '../data/store'
import Card_Movie       from './partials/Card_Movie.vue'
import Card_TvSeries    from './partials/Card_TvSeries.vue'
export default {
    name: 'Main',
    components: {
        Card_Movie,
        Card_TvSeries
    },
    data() {
        return {
            store
        }
    },
    methods: {
    }
}
</script>

<template>
    <main class="px-4">
        
        <h2>Movies</h2>
        <div class="row row-cols-6 mb-3">
            <Card_Movie v-for="movie in store.movieArray" :key="movie.id"
            :Poster="movie.poster_path"
            :Title="movie.title"
            :OriginalTitle="movie.original_title" 
            :language="movie.original_language"
            :averageScore="movie.vote_average"/>
        </div>

        <h2>TV Series</h2>
        <div class="row row-cols-6 mb-3">
            <Card_TvSeries v-for="serie in store.seriesArray" :key="serie.id"
            :Poster="serie.poster_path"
            :Title="serie.name"
            :OriginalTitle="serie.original_name" 
            :language="serie.original_language"
            :averageScore="serie.vote_average"/>
        </div>

    </main>
</template>

<style lang="scss" scoped>
@use "../src/scss/partials/variables" as *;

    main {
        background-color: $primary;
    }
</style>