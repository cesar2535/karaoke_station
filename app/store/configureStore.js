import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { devTools } from 'redux-devtools';
import apiMiddleware from '../middleware/api';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger({
  level: 'info',
  duration: true,
  collapsed: true
});

let finalCreateStore;

if (process.env.NODE_ENV === 'production') {
  finalCreateStore = applyMiddleware( thunkMiddleware, apiMiddleware )(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware( thunkMiddleware, apiMiddleware, loggerMiddleware ),
    devTools()
  )(createStore);
}

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}
