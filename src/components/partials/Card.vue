<script>
import { store } from "../../data/store";
export default {
    name: 'Card',
    props: {
        movieTitle          : String,
        movieOriginalTitle  : String,
        language            : String,
        averageScore        : Number,
        moviePoster         : String
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="col">
        <div class="rc-card d-flex flex-column mb-3">
            <div class="card_image d-flex justify-content-center">
                <!-- <img src="https://image.tmdb.org/t/p/w200/ApPuHAhH4wYGb4YCLChJYQvHUEF.jpg" alt="movie_poster"> -->

                <img :src="`https://image.tmdb.org/t/p/w200${moviePoster}`" alt="movie_poster">
            </div>
            <div class="card_title_info d-flex flex-column align-items-center">
                <h5>{{ movieTitle }}</h5>
                <h6>{{ movieOriginalTitle }}</h6>
            </div>
            <div class="card_other_info d-flex flex-column align-items-center">
                <p>{{ language }}</p>
                <p>{{ averageScore }}</p>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../src/scss/partials/variables" as *;

    .rc-card {
        color: red;
        border: 1px solid red;
        border-radius: 10px;
        min-height: 400px;
        max-width: 250px;
    }
</style>