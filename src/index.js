import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageTransition from "react-router-page-transition";

import { configureStore } from './reducer/store';
import App from './App';
import MovieBrowser from './components/MovieBrowser';
import MovieDetails from './components/MovieDetails';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

const initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
    <Provider store={store}>
        <App>
            <Router>
                <PageTransition>
                    <Switch>
                        <Route exact path="/" component={MovieBrowser} />
                        <Route exact path="/movie/:id" component={MovieDetails} />
                    </Switch>
                </PageTransition>
            </Router>
        </App>
    </Provider>,
    document.getElementById('root'));