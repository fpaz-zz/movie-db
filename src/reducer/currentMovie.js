import Immutable from 'immutable';
import { GET_MOVIE_DETAILS_API_SUCCESS } from '../constants/actionTypes';

const initialState = Immutable.fromJS({});

const currentMovie = (state = initialState, action) => {
  switch (action.type) {
  case GET_MOVIE_DETAILS_API_SUCCESS:
    return state.merge(action.data);
  default:
    return state;
  }
};

export default currentMovie;
