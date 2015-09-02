import 'babel-core/polyfill';
import './stylus/styles.styl';

import React from 'react';
// import BrowserHistory from 'react-router/lib/BrowserHistory';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import configureStore from './store/configureStore';

import App from './containers/App';

// const history = new BrowserHistory();
const store = configureStore();

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);
