import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import { ROOT } from './constants/Config';

import App from './containers/App';
import HomePage from './containers/HomePage';
import SongbookPage from './containers/SongbookPage';
import PlaylistPage from './containers/PlaylistPage';
import HistoryPage from './containers/HistoryPage';

// Hash History query key
const history = createHistory({
  queryKey: '_key'
});

export default (
  <Router history={history}>
    <Route path={`${ROOT}/`} component={App}>
      <IndexRoute component={HomePage}></IndexRoute>
      <Route path={`songbook/artists`} component={SongbookPage} />
      <Route path={`songbook/songs`} component={SongbookPage} />
      <Route path={`playlist`} component={PlaylistPage} />
      <Route path={`history`} component={HistoryPage} />
    </Route>
  </Router>
);
