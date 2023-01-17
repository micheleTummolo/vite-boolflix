import { reactive } from 'vue';

export const store = reactive({
    search: '',
    filmUrl: 'https://api.themoviedb.org/3/search/movie?api_key=2603405e11aa1415589f75dcb722d1e6&language=it-IT',
    films: [],
});