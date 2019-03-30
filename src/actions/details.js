import {
    GET_MOVIE_DETAILS_API_REQUEST,
    GET_MOVIE_DETAILS_API_SUCCESS,
    GET_MOVIE_DETAILS_API_FAILURE,
} from '../constants/actionTypes';

import services from '../helpers/services';

const requestMovieDetails = () => ({
    type: GET_MOVIE_DETAILS_API_REQUEST,
});

const requestMovieDetailsSuccess = (data) => ({
    type: GET_MOVIE_DETAILS_API_SUCCESS,
    data,
});

const requestMovieDetailsFailure = (error) => ({
    type: GET_MOVIE_DETAILS_API_FAILURE,
    error,
});

const getMovieDetails = (params) => async dispatch => {
    dispatch(requestMovieDetails());
    return services.getMovieDetails(params)
        .then(response => {
            response.json()
                .then(json => dispatch(requestMovieDetailsSuccess(json)))
                .catch(error => dispatch(requestMovieDetailsFailure(error)));
        });
}

export {
    getMovieDetails,
}