<script>
import AppFilm from './AppFilm.vue';
import AppTv from './AppTv.vue';
export default {
    components: {
        AppFilm,
        AppTv,
    },

}
</script>
<template lang="">
    <div class="container-fluid main_container">
        <AppFilm></AppFilm>
        <AppTv></AppTv>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/variables' as *;

.main_container {
    background-color: $bg-primary;
    height: 100vh;
    width: 100vw;
    overflow: scroll;
    padding-top: 4rem;
}
</style>