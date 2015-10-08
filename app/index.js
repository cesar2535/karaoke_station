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
