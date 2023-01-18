import { reactive } from 'vue';

export const store = reactive({
    click: false,
    search: '',
    imgUrl: 'https://image.tmdb.org/t/p/w342',
    filmUrl: 'https://api.themoviedb.org/3/trending/movie/day?api_key=2603405e11aa1415589f75dcb722d1e6&language=it-IT',
    tvUrl: 'https://api.themoviedb.org/3/trending/tv/day?api_key=2603405e11aa1415589f75dcb722d1e6&language=it-IT',
    films: [],
    tv: [],
});