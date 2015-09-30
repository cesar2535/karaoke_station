import 'babel-core/polyfill';
import './stylus/styles.styl';

import React from 'react';
import { QTS_ROOT } from './constants/Config';
// import createHistory from 'history/lib/createBrowserHistory';
import createHistory from 'history/lib/createHashHistory';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import configureStore from './store/configureStore';

import App from './containers/App';
import HomePage from './containers/HomePage';
import SongBookPage from './containers/SongBookPage';
import PlaylistPage from './containers/PlaylistPage';
import HistoryPage from './containers/HistoryPage';
import FavoritesPage from './containers/FavoritesPage';

const history = createHistory({
  queryKey: '_key'
});

const store = configureStore();

React.render(
  <Provider store={store}>
    {() =>
      <Router history={history}>
        <Route path={QTS_ROOT} component={App}>
          <IndexRoute component={HomePage} />
          <Route path='songbook/:type' component={SongBookPage}>
            <Route path=':name' component={SongBookPage} />
          </Route>
          <Route path='favorite' component={FavoritesPage}>
            <Route path=':name' component={FavoritesPage} />
          </Route>
          <Route path='playlist/current' component={PlaylistPage} />
          <Route path='playlist/finished' component={PlaylistPage} />
          <Route path='history' component={HistoryPage} />
          <Redirect from={`${QTS_ROOT}playlist`} to={`${QTS_ROOT}playlist/current`} />
          <Redirect from={`${QTS_ROOT}songbook`} to={`${QTS_ROOT}songbook/male`} />
        </Route>
      </Router>
    }
  </Provider>,
  document.getElementById('root')
);
