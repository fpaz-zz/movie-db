import { combineReducers } from 'redux-immutablejs';
import { loadingBarReducer } from 'react-redux-loading-bar';
import { routeReducer } from 'react-router-redux';

import movies from './movies';

const rootReducer = combineReducers({
  movies,
  loadingBar: loadingBarReducer,
  routing: routeReducer
});

export default rootReducer;
