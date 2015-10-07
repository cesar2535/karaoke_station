import 'babel-core/polyfill';
import './styles/styles.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
// let IMGS = require.context('./assets/images', true, /\.(png|jpg|svg)$/igm);
// IMGS.keys().forEach( key => console.log(IMGS(key)) );

import { ROOT } from './constants/Config';

import App from './containers/App';
import HomePage from './containers/HomePage';
import PlaylistPage from './containers/PlaylistPage';

// Hash History query key
const history = createHistory({
  queryKey: '_key'
});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={`${ROOT}/`} component={App}>
        <IndexRoute component={HomePage}></IndexRoute>
        <Route path={`playlist`} component={PlaylistPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
