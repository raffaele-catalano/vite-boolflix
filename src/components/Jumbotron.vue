<script>
import { store } from '../data/store';

import { Swiper, SwiperSlide }  from 'swiper/vue';
import 'swiper/css';

import { Pagination, Navigation, Autoplay } from 'swiper';

export default {
    name: 'Jumbotron',
    components: {
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
            modules: [Pagination, Navigation, Autoplay]
        };
    }
}
</script>

<template>
    <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
    }"
    :loop="true"
    :pagination="{
        clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper
    "
    >
    <swiper-slide v-for="movie in store.movieUpcomingArray" :key="movie.id">
        <div class="jumbotron">
            <div class="backdrop-container">
                <img :src="`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`" :alt="movie.title">
            </div>

            <div class="movie-info-container">

                <div class="movie-title-container">
                    <h3>{{ movie.title }}</h3>
                    <h4>{{ movie.original_title }}</h4>
                </div>

                <div class="movie-language-container mb-2">
                    <img :src="`flags/language-${movie.original_language}.svg`" alt="original_language">
                </div>

                <div class="movie-overwiev-container">
                    <p>{{ movie.overview }}</p>
                </div>

                <div class="movie-average-vote-container">
                    <i v-for="star in Math.round(movie.vote_average / 2)" :key="star" class="fa-solid fa-star" style="color: #ffdf00;"></i>

                    <i v-for="star in (5 - Math.round(movie.vote_average / 2))" :key="star" class="fa-regular fa-star" style="color: #ffdf00;"></i>
                </div>

            </div>

        </div>
    </swiper-slide>
</swiper>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.mySwiper {
    position: relative;
    height: 500px;
    // z-index: 0;
    // .backdrop-container  {
    //     img{
    //         width: 100%;
    //         height: 500px;
    //         object-fit: cover;
    //     }
    // }
}
.jumbotron {
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1000;
        .backdrop-container{
            width: 100%;
            height: 100%;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .movie-info-container{
            width: 30%;
            height: 40%;
            position: absolute;
            top: 25%;
            left: 45px;

            .movie-language-container {
                img {
                    width: 30px;
                }
            }
            .movie-overwiev-container{
                max-height: 150px;
                overflow-y: auto;
                p {
                    text-justify: inter-word;
                }
            }
        }
    // }
}

</style>