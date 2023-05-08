<script>
import { store } from "../../data/store";
import Modal from './Modal.vue'
export default {
    name: 'Card_Movie',
    components: {
        Modal,
    },
    props: {
        Poster         : String,
        Title          : String,
        OriginalTitle  : String,
        Overview       : String,
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
<div class="col mb-4">
        <div class="rc-card d-flex flex-column justify-content-between position-relative overflow-hidden py-2">

            <div class="card_image overflow-hidden">
                <img v-if="Poster === null" src="not_found.png" alt="image_not_found">
                <img v-else :src="`https://image.tmdb.org/t/p/original${Poster}`" alt="movie_poster">
            </div>

            <div class="textual_info_container position-absolute h-100 w-100 p-1">

                <div class="card_title my-1">
                    <h4>{{ Title }}</h4>
                    <h5>{{ OriginalTitle }}</h5>
                </div>

                <div class="card_overview">
                    <p>{{ Overview }}</p>
                </div>

                <div class="card_language d-flex align-items-center my-1">
                    <img :src="`flags/language-${language}.svg`" alt="original_language">
                </div>

                <div class="card_average_vote d-flex justify-content-center my-2">
                    <i v-for="star in averageScore" :key="star" class="fa-solid fa-star" style="color: #ffdf00;"></i>
                    <i v-for="star in (5 - averageScore)" :key="star" class="fa-regular fa-star" style="color: #ffdf00;"></i>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.col{
    .rc-card{
        color: white;
        border-radius: 10px;
        .card_image{
        width: 100%;
        aspect-ratio: 2/3;
        object-fit: cover;
            img{
            width: 100%;
            height: 100%;
            transition: all .5s;
            border-radius: 10px;
            }
        }
        .textual_info_container{
            right: 100%;
            transition: all .6s;
        }
            .card_language{
                img{
                    width: 30px;
                }
            }
            .card_overview {
                max-height: 300px;
                overflow-y: auto;
                p {
                    text-justify: inter-word;
                }
            }
        &:hover{
            .card_image{
                img{
                opacity: 20%;
                }
            }
            .textual_info_container{
                right: 0;
            }
        }
    }
}
</style>