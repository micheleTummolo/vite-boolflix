<script>
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    },

    props: {
        tv: Object,
    }
}
</script>
<template lang="">
    <div class="my_card p-3">
        <h5>Titolo:  {{tv.name}}</h5>
        <h5>Titolo Originale:  {{tv.original_name}}</h5>
        <h5>Lingua Originale: 
            <span v-if="tv.original_language == 'en'" class="fi fi-gb fis"></span>
            <span v-else :class="`fi fi-` + tv.original_language + ` fis`"></span></h5>
        <h5>Voto: {{tv.vote_average}} /10</h5>
    </div>
</template>
<style lang="scss">
.my_card {
    border: 1px solid white,
}
</style>