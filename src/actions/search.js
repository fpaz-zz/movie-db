import {
  SEARCH_MOVIE_API_REQUEST,
  SEARCH_MOVIE_API_SUCCESS,
  SEARCH_MOVIE_API_FAILURE
} from '../constants/actionTypes';

import services from '../helpers/services';

const searchMovieApi = () => ({
  type: SEARCH_MOVIE_API_REQUEST
});

const searchMovieApiSuccess = data => ({
  type: SEARCH_MOVIE_API_SUCCESS,
  data
});

const searchMovieApiFailure = error => ({
  type: SEARCH_MOVIE_API_FAILURE,
  error
});

const searchMovie = params => async dispatch => {
  dispatch(searchMovieApi());
  return services.searchMovies(params).then(response =>
    response
      .json()
      .then(json => dispatch(searchMovieApiSuccess(json)))
      .catch(error => dispatch(searchMovieApiFailure(error)))
  );
};

export { searchMovie };
