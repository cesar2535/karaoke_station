// import * as ActionTypes from './actions';
import { combineReducers } from 'redux';
import entities from './entities';
import songslist from './songslist';
import player from './player';

const rootReducer = combineReducers({
  entities,
  songslist,
  player
});

export default rootReducer;
