<script>
import { store }    from '../data/store'

export default {
    name: 'Header',
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <header class="d-flex align-items-center">
        <img class="mx-3" src="logo-boolflix.png" alt="logo">

        <div class="rc-container h-100">

            <div class="container-left">
                <div class="nav-bar">
                    <ul class="nav-list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV Series</a></li>
                        <li><a href="popular">Popular Movies</a></li>
                        <li><a href="#">Upcoming</a></li>
                    </ul>
                </div>
            </div>

            <div class="container-right h-100">
                <div class="rc-container d-flex justify-content-end align-items-center h-100">
                    <input v-model="store.searchInput" class="form-control me-3" type="text" placeholder="Search" style="width: 30%;" @keyup.enter="$emit('searchMovie'), $emit('searchSerie')" >
                    <button class="btn mx-2" @click="$emit('searchMovie'), $emit('searchSerie')">Search</button>
                </div>
            </div>

        </div>
    </header>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

    header {
        width: 100vw;
        height: 80px;
        background-color: $dark-principal;
        padding: 5px;
        // border-bottom: 1px solid rgb(35, 35, 35);
        img {
            height: 50px;
        }

        .rc-container {
            display: flex;
            width: 100%;

            .container-left{
                display: flex;
                align-items: center;
                width: 50%;
                height: 100%;

                .nav-bar{
                    .nav-list{
                        list-style: none;
                        display: flex;
                        align-items: center;
                        margin: 1px 0;

                        li {
                            padding: 0 10px;
                            transition: all .3s;

                            &:hover {
                                transform: scale(1.1);
                            }
                            
                            a {
                                text-decoration: none;
                                color: white;
                                font-size: 17px;

                                &:hover{
                                    text-decoration: underline;
                                    color: $red-logo;
                                }
                            }
                        }
                    }
                }
            }
    
            .container-right {
                display: flex;
                justify-content: flex-end;
                width: 50%;
                height: 100%;
                .rc-container {

                    input {
                        border: 2px solid $red-logo;
                        background-color: $dark-principal;
                        font-size: 1.1rem;
                        transition: all .4s;
                        &:hover{
                            transform: scale(1.1);
                        }
                    }
                    button {
                        background-color: $red-logo;
                        font-weight: bold;
                        transition: all .4s;
                        padding: 8px 10px;

                        &:hover{
                            background-color: $dark-principal;
                            color: $red-logo;
                            border: 1px solid $red-logo;
                            transform: scale(1.1);
                        }
                    }
                }
            }
        }
    }
</style>