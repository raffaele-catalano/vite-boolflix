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

        <div class="container-fluid h-100">
            <div class="container-right h-100">
                <div class="form d-flex justify-content-end align-items-center h-100">
                    <input v-model="store.searchInput" class="form-control" type="text" placeholder="Cerca un Film" style="width: 15%;" @keyup.enter="$emit('searchMovie'), $emit('searchSerie')" >
                    <button class="btn mx-2" @click="$emit('searchMovie'), $emit('searchSerie')">Search</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
// @use "./scss/main.scss" as *;
@use "../src/scss/partials/variables" as *;

    header {
        height: 80px;
        background-color: $primary;
        padding: 5px;
        border-bottom: 1px solid rgb(35, 35, 35);

        img {
            height: 50px;
        }
    }

    button {
        background-color: $secondary;
    }
</style>