import { CALL_API, Schemas } from '../middleware/api';
import {
  SONGS_FROM_FAVORITE_REQUEST, SONGS_FROM_FAVORITE_SUCCESS, SONGS_FROM_FAVORITE_FAILURE,
  LISTS_ELSE_REQUEST, LISTS_ELSE_SUCCESS, LISTS_ELSE_FAILURE,
  POST_REQUEST, POST_SUCCESS, POST_FAILURE,
  PUT_REQUEST, PUT_SUCCESS, PUT_FAILURE,
  DELETE_REQUEST, DELETE_SUCCESS, DELETE_FAILURE,
  EDIT_FAVORITE_NAME_REQUEST, EDIT_FAVORITE_NAME_SUCCESS, EDIT_FAVORITE_NAME_FAILURE
} from '../constants/ActionTypes';

function fetchSongsFromFavorite(favorId, page = 1, count = 20) {
  return {
    favorId,
    [CALL_API]: {
      types: [SONGS_FROM_FAVORITE_REQUEST, SONGS_FROM_FAVORITE_SUCCESS, SONGS_FROM_FAVORITE_FAILURE],
      endpoint: `/favorite/${favorId}?page=${page}&count=${count}`,
      schema: Schemas.SONG_ARRAY,
      method: 'GET'
    }
  };
}

export function loadSongsFromFavorite(favorId, page, count) {
  return dispatch => {
    return dispatch(fetchSongsFromFavorite(favorId, page, count));
  };
};

function fetchListFromFavorite() {
  return {
    name: 'favorite',
    [CALL_API]: {
      types: [LISTS_ELSE_REQUEST, LISTS_ELSE_SUCCESS, LISTS_ELSE_FAILURE],
      endpoint: `/favorite`,
      schema: Schemas.LIST_ARRAY,
      method: 'GET'
    }
  };
}

export function loadListFromFavorite() {
  return dispatch => {
    return dispatch(fetchListFromFavorite());
  };
};

export function putSongToFavorite(favorId, songId) {
  return {
    [CALL_API]: {
      types: [PUT_REQUEST, PUT_SUCCESS, PUT_FAILURE],
      endpoint: `/favorite/${favorId}?songid=${songId}`,
      method: 'PUT'
    }
  };
};

export function postNameToFavorite(favorId, name) {
  return {
    [CALL_API]: {
      types: [POST_REQUEST, POST_SUCCESS, POST_FAILURE],
      endpoint: `/favorite/${favorId}`,
      body: { name },
      method: 'POST'
    }
  };
};

export function deleteSongFromFavorite(favorId, songId) {
  return {
    [CALL_API]: {
      types: [DELETE_REQUEST, DELETE_SUCCESS, DELETE_FAILURE],
      endpoint: `/favorite/${favorId}?songid=${songId}`,
      method: 'DELETE'
    }
  };
};

function updateFavoriteName(favoriteId, name) {
  return {
    [CALL_API]: {
      types: [ EDIT_FAVORITE_NAME_REQUEST, EDIT_FAVORITE_NAME_SUCCESS, EDIT_FAVORITE_NAME_FAILURE ],
      endpoint: `/favorite/${favoriteId}`,
      schema: '',
      method: 'POST',
      body: { name }
    }
  };
}

export function putFavoriteName(favoriteId, name) {
  return (dispatch) => {
    return dispatch(updateFavoriteName(favoriteId, name));
  };
}
