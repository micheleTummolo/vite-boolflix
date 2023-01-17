<script>
import axios from 'axios';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import { store } from './store'
export default {
  components: {
    AppHeader,
    AppMain,
  },

  data() {
    return {
      store
    }
  },

  methods: {
    filmsrequest() {
      console.log('Click!')
      store.filmUrl = 'https://api.themoviedb.org/3/search/movie?api_key=2603405e11aa1415589f75dcb722d1e6&language=it-IT&query=' + store.search

      axios.get(store.filmUrl).then((response) => {
        store.films = response.data
      })
    }
  }
}
</script>
<template>
  <AppHeader @search="filmsrequest"></AppHeader>
  <AppMain></AppMain>
  <div>

  </div>
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
</style>