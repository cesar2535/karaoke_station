// import * as ActionTypes from './actions';
import { combineReducers } from 'redux';
import entities from './entities';
import location from './location';

const rootReducer = combineReducers({
  entities,
  location
});

export default rootReducer;
