import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import { createBrowserHistory } from 'history';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { stateTransformer } from '../helpers/utils';
import rootReducer from './';

const loggerMiddleware = createLogger({
  stateTransformer,
  collapsed: true
});
const history = createBrowserHistory();
const historyRouterMiddleware = routerMiddleware(history);

const configureStore = initialState =>
  createStore(
    rootReducer,
    Immutable.fromJS(initialState),
    compose(
      applyMiddleware(
        thunk,
        loggerMiddleware,
        historyRouterMiddleware,
        loadingBarMiddleware({
          promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE']
        })
      )
    )
  );

export { configureStore };
