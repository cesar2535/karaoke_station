// import * as ActionTypes from './actions';
import { combineReducers } from 'redux';
import * as ActionTypes from '../constants/ActionTypes';
import entities from './entities';
import songslist from './songslist';
import player from './player';
import paginate from './paginate';
import sidetab from './sidetab';

const pagination = combineReducers({
  playlist: paginate({
    mapActionToKey: action => action.name,
    types: [ ActionTypes.PLAYLIST_REQUEST, ActionTypes.PLAYLIST_SUCCESS, ActionTypes.PLAYLIST_FAILURE ]
  })
});

const rootReducer = combineReducers({
  entities,
  player,
  pagination,
  songslist,
  sidetab
});

export default rootReducer;
