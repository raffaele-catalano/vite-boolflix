import { reactive } from 'vue';

export const store = reactive ({
    apiUrlMovie             : "https://api.themoviedb.org/3/search/movie?api_key=0439a95dd6c58b82119af09bc7a9c991&language=it-IT",
    apiUrlMoviePopular      : "https://api.themoviedb.org/3/movie/popular?api_key=0439a95dd6c58b82119af09bc7a9c991&language=it-IT",
    apiUrlMovieUpcoming     : "https://api.themoviedb.org/3/movie/upcoming?api_key=0439a95dd6c58b82119af09bc7a9c991&language=it-IT",
    apiUrlSeries            : "https://api.themoviedb.org/3/search/tv?api_key=0439a95dd6c58b82119af09bc7a9c991&language=it-IT",
    searchInput             : '',
    movieArray              : [],
    moviePopularArray       : [],
    movieUpcomingArray      : [],
    seriesArray             : [],
    displayCard             : false
})