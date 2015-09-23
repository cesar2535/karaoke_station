// import * as ActionTypes from './actions';
import { combineReducers } from 'redux';
import * as ActionTypes from '../constants/ActionTypes';
import entities from './entities';
import songslist from './songslist';
import player from './player';
import paginate from './paginate';
import slide from './slide';
import sidetab from './sidetab';

const pagination = combineReducers({
  playlist: paginate({
    mapActionToKey: action => action.name,
    types: [ ActionTypes.PLAYLIST_REQUEST, ActionTypes.PLAYLIST_SUCCESS, ActionTypes.PLAYLIST_FAILURE ]
  }),
  favorites: paginate({
    mapActionToKey: action => action.listName,
    types: [ ActionTypes.FAVORITES_REQUEST, ActionTypes.FAVORITES_SUCCESS, ActionTypes.FAVORITES_FAILURE ]
  }),
  songlist: paginate({
    mapActionToKey: action => action.actionKey,
    types: [ ActionTypes.SONGS_LIST_REQUEST, ActionTypes.SONGS_LIST_SUCCESS, ActionTypes.SONGS_LIST_FAILURE ]
  }),
  artistlist: paginate({
    mapActionToKey: action => action.gender,
    types: [ ActionTypes.ARTISTS_LIST_BY_GENDER_REQUEST, ActionTypes.ARTISTS_LIST_BY_GENDER_SUCCESS, ActionTypes.ARTISTS_LIST_BY_GENDER_FAILURE ]
  })
});

const rootReducer = combineReducers({
  entities,
  player,
  pagination,
  songslist,
  slide,
  sidetab
});

export default rootReducer;
