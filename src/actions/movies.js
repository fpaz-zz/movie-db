import {
  GET_TOP_MOVIES_API_REQUEST,
  GET_TOP_MOVIES_API_SUCCESS,
  GET_TOP_MOVIES_API_FAILURE
} from '../constants/actionTypes';

import services from '../helpers/services';

const requestTopMovies = () => ({
  type: GET_TOP_MOVIES_API_REQUEST
});

const requestTopMoviesSuccess = data => ({
  type: GET_TOP_MOVIES_API_SUCCESS,
  data
});

const requestTopMoviesFailure = error => ({
  type: GET_TOP_MOVIES_API_FAILURE,
  error
});

const getTopMovies = params => async dispatch => {
  dispatch(requestTopMovies());
  return services.getTopMovies(params).then(response => {
    response
      .json()
      .then(json => dispatch(requestTopMoviesSuccess(json)))
      .catch(error => dispatch(requestTopMoviesFailure(error)));
  });
};

export { getTopMovies };
