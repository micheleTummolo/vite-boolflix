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
    }

}
</script>
<template lang="">
    <div class="row">
        <div class="col-12">
            <h2>Serier TV</h2>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 m-3 film_container">
        <div v-for="(item, index) in store.tv.results" class="col p-0 m-1">
            <CardTv :tv="item"></CardTv>
        </div>
    </div>
</template>
<style lang="scss">

</style>