import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { configureStore } from './reducer/store';
import MovieBrowser from './components/MovieBrowser';
import MovieDetails from './components/MovieDetails';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

function App() {
  const initialState = {};
  const store = configureStore(initialState);

  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={MovieBrowser} />
          <Route exact path="/movie/:id" component={MovieDetails} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;