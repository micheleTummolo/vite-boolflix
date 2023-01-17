<script>
import Card from './Card.vue';

import { store } from '../store';
export default {
    components: {
        Card,
    },

    data() {
        return {
            store
        }
    },

    props: {
        film: Array,
    }

}
</script>
<template lang="">
    <div class="d-flex flex-wrap">
        <Card v-for="(item, index) in store.films.results" :film="item"></Card>
    </div>
</template>
<style lang="">
    
</style>