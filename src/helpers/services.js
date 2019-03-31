import { MOVIE_DB_BASE_URL, MOVIE_DB_API_KEY } from '../constants/apis';

export const createMovieDbUrl = (relativeUrl, queryParams) => {
  let baseUrl = `${MOVIE_DB_BASE_URL}${relativeUrl}?api_key=${MOVIE_DB_API_KEY}&language=en-US`;
  if (queryParams) {
    Object.keys(queryParams).forEach(
      paramName => (baseUrl += `&${paramName}=${queryParams[paramName]}`)
    );
  }
  return baseUrl;
};

const services = {
  getTopMovies: async ({ page }) => {
    // const fullUrl = createMovieDbUrl('/movie/top_rated', { page });
    const fullUrl = createMovieDbUrl('/discover/movie', {
      page,
      sort_by: 'popularity.desc'
    });
    return fetch(fullUrl);
  },

  searchMovies: async ({ page, query }) => {
    const fullUrl = createMovieDbUrl('/search/movie', {
      page,
      query
    });
    return fetch(fullUrl);
  },

  getMovieDetails: async ({ movieId }) => {
    const fullUrl = createMovieDbUrl(`/movie/${movieId}`);
    return fetch(fullUrl);
  }
};

export default services;
