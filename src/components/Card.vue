<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },

    props: {
        film: Object,
    }
}
</script>
<template lang="">
    <div class="my_card p-3 m-3">
        <h5>Titolo: {{film.title}}</h5>
        <h5>Titolo Originale: {{film.original_title}}</h5>
        <h5>Lingua Originale: {{film.original_language}}</h5>
        <h5>Voto: {{film.vote_average}} /10</h5>
    </div>
</template>
<style lang="scss">
.my_card {
    border: 1px solid white,
}
</style>