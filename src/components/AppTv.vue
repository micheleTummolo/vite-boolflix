<script>
import CardTv from './CardTv.vue';

import { store } from '../store';
export default {
    components: {
        CardTv,
    },

    data() {
        return {
            store
        }
    },

    props: {
        tv: Array,
    },

    beforeUpdate() {
        for (let i = 0; i < store.tv.results.length; i++) {
            let vote = Math.round(store.tv.results[i].vote_average / 2)
            store.tv.results[i].vote_average = vote
        }
    }

}
</script>
<template lang="">
    <div class="row ms-3 mt-4">
        <div class="col-12 p-0">
            <h1>Serier TV</h1>
        </div>
    </div>
    <div class="overflow-auto mx-3 film_container">
        <div v-for="(item, index) in store.tv.results" class="col p-0 me-2">
            <CardTv :tv="item"></CardTv>
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