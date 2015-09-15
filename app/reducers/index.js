// import * as ActionTypes from './actions';
import { combineReducers } from 'redux';
import entities from './entities';
import songslist from './songslist';

const rootReducer = combineReducers({
  entities,
  songslist
});

export default rootReducer;
