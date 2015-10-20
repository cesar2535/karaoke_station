import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createHistory from 'history/lib/createHashHistory';

import { ROOT } from './constants/Config';

import App from './containers/App';
import HomePage from './containers/HomePage';
import SongbookPage from './containers/SongbookPage';
import FavoritePage from './containers/FavoritePage';
import PlaylistPage from './containers/PlaylistPage';
import HistoryPage from './containers/HistoryPage';
import SongbookContent from './containers/SongbookContent';

// Hash History query key
const history = createHistory({
  queryKey: '_key'
});

export default (
  <Router history={history}>
    <Route path={`${ROOT}/`} component={App}>
      <IndexRoute component={HomePage}></IndexRoute>
      <Route path={`songbook`} component={SongbookPage}>
        <Route path={`:songbookType`} component={SongbookContent} />
      </Route>
      <Route path={`favorite`} component={FavoritePage} />
      <Route path={`playlist`} component={PlaylistPage} onEnter={ (nextState, replaceState) => nextState.location.query.list ? null : replaceState(null, `${ROOT}/playlist?list=current`) } />
      <Route path={`history`} component={HistoryPage} />
    </Route>
  </Router>
);
