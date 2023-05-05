<script>
import { store } from "../../data/store";
export default {
    name: 'Card_TvSeries',
    props: {
        Poster         : String,
        Title          : String,
        OriginalTitle  : String,
        language       : String,
        averageScore   : Number,
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
                <img v-if="Poster === null" src="not_found.png" alt="image_not_found">
                <img v-else :src="`https://image.tmdb.org/t/p/w200${Poster}`" alt="movie_poster">
            </div>
            <div class="card_title_info d-flex flex-column align-items-center">
                <h5>{{ Title }}</h5>
                <h6>{{ OriginalTitle }}</h6>
            </div>
            <div class="card_other_info d-flex flex-column align-items-center my-1">
                <img :src="`flags/language-${language}.svg`" alt="original_language">
                <!-- <p>{{ averageScore }}</p> -->
            </div>
            <div class="average_vote_container d-flex justify-content-center my-2">
                <i v-for="star in averageScore" :key="star" class="fa-solid fa-star" style="color: #ffdf00;"></i>
                <i v-for="star in (5 - averageScore)" :key="star" class="fa-regular fa-star" style="color: #ffdf00;"></i>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../src/scss/partials/variables" as *;

    .rc-card {
        color: $secondary;
        border: 1px solid $secondary;
        border-radius: 10px;
        min-height: 400px;
        max-width: 250px;
        .card_other_info {
            img {
                width: 30px;
            }
        }
    }
</style>