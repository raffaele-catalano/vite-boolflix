<script>
import { store } from '../data/store';
export default {
    name: 'Jumbotron',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
<div class="jumbotron">
    <div class="jumbo-container">

    </div>
</div>
</template>

<style lang="scss" scoped>
@use "../scss/partials/variables" as *;

.jumbotron {
    width: 100%;
    .jumbo-container {
        width: 100%;
        height: 500px;
        //debug
        border: 1px solid gold;
    }
}

</style>