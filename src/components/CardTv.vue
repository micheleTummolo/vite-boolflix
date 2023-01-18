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
    <div class="my_card">
        <img :src="store.imgUrl + tv.poster_path" alt="Image">
        <div class="card_info p-2">
            <h4>Titolo:  {{tv.name}}</h4>
            <h4>Titolo Originale:  {{tv.original_name}}</h4>
            <h4>Lingua Originale: 
                <span v-if="tv.original_language == 'en'" class="fi fi-gb fis"></span>
                <span v-else :class="`fi fi-` + tv.original_language + ` fis`"></span></h4>
            <h4>Voto: {{tv.vote_average}} /5</h4>
            <p>{{tv.overview}}</p>

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
        overflow: hidden;

        h5 {
            font-size: 1rem;
        }
    }
}
</style>