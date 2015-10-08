import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import { ROOT } from './constants/Config';

import App from './containers/App';
import HomePage from './containers/HomePage';
import PlaylistPage from './containers/PlaylistPage';

// Hash History query key
const history = createHistory({
  queryKey: '_key'
});

export default (
  <Router history={history}>
    <Route path={`${ROOT}/`} component={App}>
      <IndexRoute component={HomePage}></IndexRoute>
      <Route path={`playlist`} component={PlaylistPage} />
    </Route>
  </Router>
);
