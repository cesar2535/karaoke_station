// import * as ActionTypes from './actions';
import { combineReducers } from 'redux';
import * as ActionTypes from '../constants/ActionTypes';
import entities from './entities';
import songslist from './songslist';
import player from './player';
import paginate from './paginate';

const pagination = combineReducers({
  playlist: paginate({
    mapActionToKey: action => action.name,
    types: [ ActionTypes.PLAYLIST_REQUEST, ActionTypes.PLAYLIST_SUCCESS, ActionTypes.PLAYLIST_FAILURE ]
  }),
  favorites: paginate({
    mapActionToKey: action => action.listName,
    types: [ ActionTypes.FAVORITES_REQUEST, ActionTypes.FAVORITES_SUCCESS, ActionTypes.FAVORITES_FAILURE ]
  })
});

const rootReducer = combineReducers({
  entities,
  player,
  pagination,
  songslist
});

export default rootReducer;
