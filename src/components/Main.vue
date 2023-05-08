<script>
import { store }        from '../data/store';
import Card             from './partials/Card.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

export default {
    name: 'Main',
    components: {
        Card,
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            store,
        }
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
}
</script>

<template>
<main>
    <!-- SWIPER POPULAR MOVIES -->
    <h2 class="mt-5">Popular Movies</h2>
    <swiper
    :slidesPerView="5"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
        clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper
    "
    >
    <swiper-slide v-for="movie in store.moviePopularArray" :key="movie.id">
        <Card
            :Poster="movie.poster_path"
            :Title="movie.title"
            :OriginalTitle="movie.original_title" 
            :Overview="movie.overview"
            :language="movie.original_language"
            :averageScore="Math.round(movie.vote_average / 2)"/>
    </swiper-slide>
    </swiper>
    <!-- SWIPER SEARCHED MOVIES -->
    <h2 v-if="store.movieArray.length > 0" class="mt-5">Movies Founded:</h2>
    <swiper
    v-if="store.movieArray.length > 0"
    :slidesPerView="5"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
        clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper
    "
    >
    <swiper-slide v-for="movie in store.movieArray" :key="movie.id">
        <Card
            :Poster="movie.poster_path"
            :Title="movie.title"
            :OriginalTitle="movie.original_title" 
            :Overview="movie.overview"
            :language="movie.original_language"
            :averageScore="Math.round(movie.vote_average / 2)"/>
    </swiper-slide>
    </swiper>
    <!-- SWIPER SEARCHED SERIES -->
    <h2 v-if="store.seriesArray.length > 0" class="mt-5">Series Founded:</h2>
    <swiper
    v-if="store.seriesArray.length > 0"
    :slidesPerView="5"
    :spaceBetween="30"
    :loop="true"
    :pagination="{
        clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper
    "
    >
    <swiper-slide v-for="serie in store.seriesArray" :key="serie.id">
        <Card
            :Poster="serie.poster_path"
            :Title="serie.name"
            :OriginalTitle="serie.original_name"
            :Overview="serie.overview"
            :language="serie.original_language"
            :averageScore="Math.round(serie.vote_average / 2)"/>
    </swiper-slide>
    </swiper>
</main>
    
    <!-- <main class="p-5">
        
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

    </main> -->
</template>

<style lang="scss" scoped>
@use "../src/scss/partials/variables" as *;

    main {
        background-color: $primary;
    }

    .mySwiper {
        height: 300px;
        // border: 1px solid gold;
    }
</style>