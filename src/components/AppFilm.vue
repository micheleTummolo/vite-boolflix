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
        console.log("Voti Film")
        for (let i = 0; i < store.films.results.length; i++) {
            let vote = Math.round(store.films.results[i].vote_average / 2)
            store.films.results[i].vote_average = vote
            console.log("film " + i + ": " + store.films.results[i].vote_average)
        }
    }

}
</script>
<template lang="">
    <div class="row">
        <div class="col-12">
            <h2>Film</h2>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 m-3 film_container">
        <div v-for="(item, index) in store.films.results" class="col p-0 m-1">
            <CardFilm :film="item" :i="index"></CardFilm>
        </div>
    </div>
</template>
<style lang="scss">

</style>