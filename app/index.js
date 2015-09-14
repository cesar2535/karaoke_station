import 'babel-core/polyfill';
import './stylus/styles.styl';

import React from 'react';
import createHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import configureStore from './store/configureStore';

import App from './containers/App';
import HomePage from './containers/HomePage';
import SongBookPage from './containers/SongBookPage';
import PlaylistPage from './containers/PlaylistPage';

const history = new createHistory({
  // queryKey: '_key'
});

const store = configureStore();

React.render(
  <Provider store={store}>
    {() =>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={HomePage} />
          <Route path='/songbook/:type' component={SongBookPage} />
          <Route path='/songbook/language/:name' component={SongBookPage} />
          <Route path='/playlist/queue' component={PlaylistPage} />
          <Route path='/playlist/completed' component={PlaylistPage} />
        </Route>
      </Router>
    }
  </Provider>,
  document.getElementById('root')
);
