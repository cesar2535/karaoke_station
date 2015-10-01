import 'babel-core/polyfill';
import './styles/styles.styl';

import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import App from './containers/App';
import HomePage from './containers/HomePage';

// Hash History query key
const history = createHistory({
  queryKey: '_key'
});

const store = configureStore();

React.render(
  <Provider store={store}>
    {() =>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={HomePage}></IndexRoute>
        </Route>
      </Router>
    }
  </Provider>,
  document.getElementById('root')
);
