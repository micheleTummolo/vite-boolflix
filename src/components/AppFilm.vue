<script>
import CardFilm from './CardFilm.vue';

import { store } from '../store';
export default {
    components: {
        CardFilm,
    },

    data() {
        return {
            store
        }
    },

    props: {
        film: Array,
        i: Number
    },

    beforeUpdate() {
        for (let i = 0; i < store.films.results.length; i++) {
            let vote = Math.round(store.films.results[i].vote_average / 2)
            store.films.results[i].vote_average = vote
        }
    }

}
</script>
<template lang="">
    <div class="row ms-3">
        <div class="col-12 p-0">
            <h1>Film</h1>
        </div>
    </div>
    <div class="overflow-auto mx-3 film_container">
        <div v-for="(item, index) in store.films.results" class="col p-0 me-2 mb-2">
            <CardFilm :film="item" :i="index"></CardFilm>
        </div>
    </div>
</template>
<style lang="scss">
.film_container {
    white-space: nowrap;

    .col {
        display: inline-block;
    }
}
</style>