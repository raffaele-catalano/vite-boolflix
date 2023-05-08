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
        delay: 4000,
        disableOnInteraction: true,
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

            <div class="fake-container"></div>

            <div class="backdrop-container">
                <img :src="`https://image.tmdb.org/t/p/original${movie.backdrop_path}`" :alt="movie.title">
            </div>

            <div class="movie-info-container">

                <div class="movie-title-container">
                    <h3>{{ movie.title }}</h3>
                    <h4>{{ movie.original_title }}</h4>
                </div>

                <div class="movie-language-container mb-2">
                    <img :src="`flags/language-${movie.original_language}.svg`" alt="original_language">
                </div>
                
                <div class="movie-average-vote-container">
                    <span class="me-1">Rating:</span>

                    <i v-for="star in Math.round(movie.vote_average / 2)" :key="star" class="fa-solid fa-star" style="color: #ffdf00;"></i>

                    <i v-for="star in (5 - Math.round(movie.vote_average / 2))" :key="star" class="fa-solid fa-star"></i>
                </div>

                <div class="movie-overwiev-container">
                    <p>{{ movie.overview }}</p>
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
    height: 550px;
}
.jumbotron {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    // z-index: 1000;
    .fake-container {
        height: 100%;
        width: 50%;
        position: absolute;
        left: 0;
        background: rgb(0,0,0);
        background: linear-gradient(90deg, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
    }
    .backdrop-container{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        z-index: 40;
        img {
            width: 80%;
            object-fit: cover;
            background-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0));
            //debug
            }
        }
        .movie-info-container{
            display: flex;
            // align-items: center;
            justify-content: center;
            flex-direction: column;
            width: 30%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 50px;
            // margin-top: 3px;
            // debug
            // border: 1px solid gold;

            .movie-language-container {
                img {
                    width: 30px;
                }
            }
            .movie-overwiev-container{
                height: 100%;
                overflow-y: auto;
                p {
                    text-justify: inter-word;
                }
            }
        }
    // }
}

</style>