<script>
import { store }                from '../data/store';
import Card                     from './partials/Card.vue';
import { Swiper, SwiperSlide }  from 'swiper/vue';
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import '../assets/css/style.css';

// import required modules
import { Pagination, Navigation, Mousewheel } from 'swiper';

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
            modules: [Pagination, Navigation, Mousewheel],
        };
    },
}
</script>

<template>
<main>

    
    <!-- ////////////////////// -->
    
    <!-- SWIPER SEARCHED MOVIES -->
    <h2 v-if="store.movieArray.length > 0" class="mt-5 ms-5">Movies Founded:</h2>
    <swiper
    v-if="store.movieArray.length > 0"
    :slidesPerView="5"
    :spaceBetween="30"
    :mousewheel="true"
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
    
    <!-- ////////////////////// -->
    
    <!-- SWIPER SEARCHED SERIES -->
    <h2 v-if="store.seriesArray.length > 0" class="mt-5 ms-5">Series Founded:</h2>
    <swiper
    v-if="store.seriesArray.length > 0"
    :slidesPerView="5"
    :spaceBetween="30"
    :mousewheel="true"
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
<!-- ////////////////////// -->
<!-- ////////////////////// -->

<!-- SWIPER POPULAR MOVIES -->
    <h2 class="mt-5 ms-5">Popular Movies</h2>
    <swiper
    :slidesPerView="5"
    :spaceBetween="30"
    :mousewheel="true"
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

</main>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

    main {
        background-color: $dark-principal;
    }

    .mySwiper {
        width: 80%;
    }

</style>