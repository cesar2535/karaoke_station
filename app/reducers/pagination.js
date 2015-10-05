import { combineReducers } from 'redux';
import paginate from './paginate';
import * as ActionTypes from '../constants/ActionTypes';

const pagination = combineReducers({
  songsByKeyword: paginate({
    mapActionToKey: action => action.keywords,
    types: [ActionTypes.SONGS_BY_KEYWORD_REQUEST, ActionTypes.SONGS_BY_KEYWORD_SUCCESS, ActionTypes.SONGS_BY_KEYWORD_FAILURE]
  }),
  songsByArtist: paginate({
    mapActionToKey: action => action.name,
    types: [ActionTypes.SONGS_BY_ARTIST_REQUEST, ActionTypes.SONGS_BY_ARTIST_SUCCESS, ActionTypes.SONGS_BY_ARTIST_FAILURE]
  }),
  songsByLang: paginate({
    mapActionToKey: action => action.lang,
    types: [ActionTypes.SONGS_BY_LANG_REQUEST, ActionTypes.SONGS_BY_LANG_SUCCESS, ActionTypes.SONGS_BY_LANG_FAILURE]
  }),
  songsFromFavorites: paginate({
    mapActionToKey: action => action.favorId,
    types: [ActionTypes.SONGS_FROM_FAVORITE_REQUEST, ActionTypes.SONGS_FROM_FAVORITE_SUCCESS, ActionTypes.SONGS_FROM_FAVORITE_FAILURE]
  }),
  songsFromPlaylist: paginate({
    mapActionToKey: action => action.name,
    types: []
  }),
  songsList: paginate({
    mapActionToKey: action => action.name,
    types: []
  })
});

export default pagination;
