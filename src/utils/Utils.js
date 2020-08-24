import {
    getImageUrl,
    getMustWatchMoviesUrl,
    getPopularUrl,
    getTopRatedMoviesUrl,
    getHolliwoodPopularMoviesUrl,
    getMovieCastUrl
} from '../api/url'

export const setUrlToHorizontalCard = (title) => {
    switch (title) {
      case "Popular":
        return getPopularUrl();
        break;
      case "Top Rated":
        return getTopRatedMoviesUrl();
        break;
      case "Holliwood":
        return getHolliwoodPopularMoviesUrl();
        break;
      case "Must Watch":
        return getMustWatchMoviesUrl();
        break;
      case "Cast":
        return getMovieCastUrl(7);
        break;
    }
  }

 
