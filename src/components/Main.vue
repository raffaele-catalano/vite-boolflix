<script>
import { store }    from '../data/store'
import Card         from './partials/Card.vue'
export default {
    name: 'Main',
    components: {
        Card,
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
    <main class="d-flex px-4">
        <div class="row row-cols-5">
            <Card v-for="movie in store.movieArray" :key="movie.id"
            :moviePoster="movie.poster_path"
            :movieTitle="movie.title"
            :movieOriginalTitle="movie.original_title" 
            :language="movie.original_language"
            :averageScore="movie.vote_average"/>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use "../src/scss/partials/variables" as *;

    main {
        background-color: $primary;
    }
</style>