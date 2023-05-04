<script>
import { store } from '../data/store'
export default {
    name: 'Main',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <main>

    </main>
</template>

<style lang="scss" scoped>
@use "../src/scss/partials/variables" as *;

    main {
        background-color: $primary;
        height: 900px;
    }
</style>