// ./src/index.js
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

//I hate doing this, but you know..
window.$ = window.jQuery = require('../node_modules/jquery/dist/jquery.js');
window.$ = window.jQuery = require('../node_modules/bootstrap/dist/js/bootstrap.js');

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as movieActions from './actions/movieActions';
import './components/app.scss';

import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(movieActions.fetchMovies());

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
