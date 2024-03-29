import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import apiMiddleware from '../middleware/api';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true
});

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  apiMiddleware,
  loggerMiddleware
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}
