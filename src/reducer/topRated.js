import Immutable from 'immutable';
import { GET_TOP_MOVIES_API_SUCCESS } from '../constants/actionTypes';

const initialState = Immutable.fromJS({});

const movies = (state = initialState, action) => {
  switch (action.type) {
  case GET_TOP_MOVIES_API_SUCCESS:
    return state.merge(action.data);
  default:
    return state;
  }
};

export default movies;
