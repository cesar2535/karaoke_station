import 'babel-core/polyfill';
import './stylus/styles.styl';

import React from 'react';
import createHistory from 'history/lib/createHashHistory';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import configureStore from './store/configureStore';

import App from './containers/App';
import HomePage from './containers/HomePage';

const history = new createHistory({
  queryKey: '_key'
});

const store = configureStore();

React.render(
  <Provider store={store}>
    {() =>
      <Router history={history}>
        <Route component={App}>
          <Route path='/' component={HomePage} />
        </Route>
      </Router>
    }
  </Provider>,
  document.getElementById('root')
);
