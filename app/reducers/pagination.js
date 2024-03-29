import { combineReducers } from 'redux';
import paginate from './paginate';
import * as ActionTypes from '../constants/ActionTypes';

const pagination = combineReducers({
  songsByKeyword: paginate({
    mapActionToKey: action => action.keyword,
    types: [ActionTypes.SONGS_BY_KEYWORD_REQUEST, ActionTypes.SONGS_BY_KEYWORD_SUCCESS, ActionTypes.SONGS_BY_KEYWORD_FAILURE]
  }),
  songsByArtist: paginate({
    mapActionToKey: action => action.artistId,
    types: [ActionTypes.SONGS_BY_ARTIST_REQUEST, ActionTypes.SONGS_BY_ARTIST_SUCCESS, ActionTypes.SONGS_BY_ARTIST_FAILURE]
  }),
  songsByLang: paginate({
    mapActionToKey: action => action.lang,
    types: [ActionTypes.SONGS_BY_LANG_REQUEST, ActionTypes.SONGS_BY_LANG_SUCCESS, ActionTypes.SONGS_BY_LANG_FAILURE]
  }),
  songsFromFavorite: paginate({
    mapActionToKey: action => action.favorId,
    types: [ActionTypes.SONGS_FROM_FAVORITE_REQUEST, ActionTypes.SONGS_FROM_FAVORITE_SUCCESS, ActionTypes.SONGS_FROM_FAVORITE_FAILURE]
  }),
  songsFromPlaylist: paginate({
    mapActionToKey: action => action.name,
    types: [ActionTypes.LOAD_PLAYLIST_REQUEST, ActionTypes.LOAD_PLAYLIST_SUCCESS, ActionTypes.LOAD_PLAYLIST_FAILURE]
  }),
  artistsByKeyword: paginate({
    mapActionToKey: action => action.keyword,
    types: [ActionTypes.ARTISTS_BY_KEYWORD_REQUEST, ActionTypes.ARTISTS_BY_KEYWORD_SUCCESS, ActionTypes.ARTISTS_BY_KEYWORD_FAILURE]
  }),
  artistsByType: paginate({
    mapActionToKey: action => action.artistType,
    types: [ActionTypes.ARTISTS_BY_ARTISTTYPE_REQUEST, ActionTypes.ARTISTS_BY_ARTISTTYPE_SUCCESS, ActionTypes.ARTISTS_BY_ARTISTTYPE_FAILURE]
  }),
  listsElse: paginate({
    mapActionToKey: action => action.name,
    types: [ActionTypes.LISTS_ELSE_REQUEST, ActionTypes.LISTS_ELSE_SUCCESS, ActionTypes.LISTS_ELSE_FAILURE]
  })
});

export default pagination;
