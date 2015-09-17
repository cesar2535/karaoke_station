import { CALL_API, Schemas } from '../middleware/api';
import { PLAYLIST_REQUEST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE,
  SONGS_LIST_REQUEST, SONGS_LIST_SUCCESS, SONGS_LIST_FAILURE,
  PREPARE_TODO,FAVORITE_REQUEST, FAVORITE_SUCCESS, FAVORITE_FAILURE, ADD_FAVORITE } from '../constants/ActionTypes';

function fetchSongsList(keyword, nsong, queryWho, artistNation) {
  return {
    [CALL_API]: {
      types: [ SONGS_LIST_REQUEST, SONGS_LIST_SUCCESS, SONGS_LIST_FAILURE ],
      endpoint: '',
      schema: '',
      method: ''
    }
  };
}

export default function loadSongsList(keyword, nsong, queryWho, artistNation) {
  return (dispatch, getState) => {

    return dispatch(fetchSongsList(keyword, nsong, queryWho, artistNation));
  };
}

function addToPlayList(songid, method) {
  return {
    [CALL_API]: {
      types: [ PLAYLIST_REQUEST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE ],
      endpoint: '/playlist',
      schema: '',
      method: method,
      body: { songid }
    }
  };
}

export function addPlay(songid) {
  return ( dispatch ) => {
    return dispatch(addToPlayList(songid, 'POST'));
  };
}

export function insertPlay(songid) {
  return ( dispatch, getState ) => {
    return dispatch(addToPlayList(songid, 'PUT'));
  };
}

function addToFavorite(songid, favoriteid) {
  return {
    [CALL_API]: {
      types: [ FAVORITE_REQUEST, FAVORITE_SUCCESS, FAVORITE_FAILURE ],
      endpoint: `/favorite/${favoriteid}`,
      schema: '',
      method: 'PUT',
      body: { songid }
    }
  };
}

export function addFavorite(songid, favoriteid) {
  return ( dispatch, getState ) => {
    return dispatch(addToFavorite(songid, favoriteid));
  };
}

export function addPrepareTodos(songid) {
  return {
    type: PREPARE_TODO,
    id: songid
  };
}
