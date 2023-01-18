<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },

    props: {
        film: Object,
    },
}
</script>
<template lang="">
    <div class="my_card" @mouseover="test" @mouseleave="test2">
        <img :src="store.imgUrl + film.poster_path" alt="Image">
        <div class="card_info p-2">
            <h4>Titolo:  {{film.title}}</h4>
            <h4>Titolo Originale:  {{film.original_title}}</h4>
            <h4>Lingua Originale: 
                <span v-if="film.original_language == 'en'" class="fi fi-gb fis"></span>
                <span v-else :class="`fi fi-` + film.original_language + ` fis`"></span></h4>
            <h4>Voto: {{film.vote_average}} /5</h4>
            <p>{{film.overview}}</p>
        </div>
    </div>
</template>
<style lang="scss">
.my_card {
    border: 1px solid white;
    position: relative;

    &:hover .card_info {
        display: flex;
    }

    img {
        height: 513px;
    }

    .card_info {
        display: none;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #000000a6;
        height: 100%;
        width: 100%;
        flex-direction: column;
        justify-content: end;
    }
}
</style>