const ROOT_URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p";
const API_KEY = "13124abe5fef53c0bf98ad0fbcc37b52";

const generalQuerry = {
    api_key: API_KEY,
    language: "en-US",
}
const popularQuerry = {
    sort_by: "popularity.desc",
    include_adult: false,
    page: 1,
    with_original_language: "hi"
}

const formatGeneralQuerry = (obj) => {
    return Object.entries(obj)
        .map(([index, value]) => `${index}=${value}`)
        .join("&");
};

export const getImageUrl = (imageSize="w500", posterPath) => `${IMAGE_URL}/${imageSize}${posterPath}`
export const getPopularUrl = () => `${ROOT_URL}/discover/movie?${formatGeneralQuerry({ ...generalQuerry })}&${formatGeneralQuerry({ ...popularQuerry })}`;
export const getTopRatedMoviesUrl = () => `${ROOT_URL}/movie/top_rated?${formatGeneralQuerry({...generalQuerry})}&page=1&region=IN`
export const getMustWatchMoviesUrl = () => `${ROOT_URL}/discover/movie?${formatGeneralQuerry({ ...generalQuerry })}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2020&with_original_language=hi`
export const getHolliwoodPopularMoviesUrl = () => `${ROOT_URL}/discover/movie?${formatGeneralQuerry({...generalQuerry})}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2020&with_original_language=en`
export const getRecomendationUrl = (id) => `${ROOT_URL}/movie/${id}/recommendations?${formatGeneralQuerry({...generalQuerry})}&page=1`

// getMovieCastUrl is the information about a single person
export const getMovieCastUrl = (personId) => `${ROOT_URL}/person/${personId}/movie_credits?${formatGeneralQuerry({...generalQuerry})}`

// Objcet containing all cast in a particular movie
export const getMovieCastsListUrl = (id) => `${ROOT_URL}/movie/${id}/credits?${formatGeneralQuerry({...generalQuerry})}`

// Url of data for Single person all information
export const getSinglePersonUrl = (id) => `${ROOT_URL}/credit/${id}?${formatGeneralQuerry({...generalQuerry})}`

// Objcet containing all cast in a particular movie
export const getSingleMovieImagesListUrl = (id) => `${ROOT_URL}/movie/${id}/images?${Object.keys(generalQuerry)[0]}=${API_KEY}`

// Most of the url properties depends on single Movie url
export const getSingleMovieUrl = (id) => `${ROOT_URL}/movie/${id}?${formatGeneralQuerry({ ...generalQuerry })}`

// Search Url
export const getSearchUrl = (keyWord) =>  `${ROOT_URL}/search/movie?${formatGeneralQuerry( {...generalQuerry, ...{query: keyWord, page: 1, include_adult: false} }) }` 

export const getTrendingUrl = (page) =>  `${ROOT_URL}/movie/now_playing?${formatGeneralQuerry( {...generalQuerry, ...{region: "IN", page: page} }) }` 

// Get VideoUrl
export const getYoutubeVideoIdUrl = (id) =>  `${ROOT_URL}/movie/${id}/videos?${formatGeneralQuerry( {...generalQuerry }) }` 

