import { combineReducers } from 'redux-immutablejs';
import topRated from './topRated';
import currentMovie from './currentMovie';

const movies = combineReducers({
    topRated,
    currentMovie,
});

export default movies;