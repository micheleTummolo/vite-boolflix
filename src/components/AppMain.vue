<script>
import AppFilm from './AppFilm.vue';
export default {
    components: {
        AppFilm,
    },

}
</script>
<template lang="">
    <div class="container-fluid main_container">
        <AppFilm></AppFilm>
    </div>
</template>
<style lang="scss">
@use '../styles/partials/variables' as *;

.main_container {
    background-color: $bg-primary;
    height: 100vh;
    overflow: scroll;
    padding-top: 4rem;
}
</style>