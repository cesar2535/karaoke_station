import 'babel-core/polyfill';
import './styles/styles.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Router from './router';
// let IMGS = require.context('./assets/images', true, /\.(png|jpg|svg)$/igm);
// IMGS.keys().forEach( key => console.log(IMGS(key)) );

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    {Router}
  </Provider>,
  document.getElementById('root')
);

if (process.env.NODE_ENV !== 'production') {
  // Use require because imports can't be conditional.
  // In production, you should ensure process.env.NODE_ENV
  // is envified so that Uglify can eliminate this
  // module and its dependencies as dead code.
  require('./createDevToolsWindow')(store);
}
