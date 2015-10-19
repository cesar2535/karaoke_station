import { CALL_API, Schemas } from '../middleware/api';
import { LOAD_PLAYLIST_REQUEST, LOAD_PLAYLIST_SUCCESS, LOAD_PLAYLIST_FAILURE } from '../constants/ActionTypes';

function fetchPlaylist(name, page = 1, count = 20, schema) {
  return {
    name,
    page,
    [CALL_API]: {
      types: [LOAD_PLAYLIST_REQUEST, LOAD_PLAYLIST_SUCCESS, LOAD_PLAYLIST_FAILURE],
      endpoint: `/playlist?state=${name}&page=${page}&count=${count}`,
      schema: schema,
      method: 'GET'
    }
  };
}

export function loadPlaylist(name, page, count) {
  return (dispatch, getState) => {

    if (name === 'current') {
      return dispatch(fetchPlaylist(name, page, count, Schemas.SONG_ARRAY_BY_ORDER));
    }

    return dispatch(fetchPlaylist(name, page, count, Schemas.SONG_ARRAY_BY_DATE));
  };
};

function fetchHistory(page = 1, count = 20, order= 'asc') {
  return {
    name: 'history',
    page,
    [CALL_API]: {
      types: [LOAD_PLAYLIST_REQUEST, LOAD_PLAYLIST_SUCCESS, LOAD_PLAYLIST_FAILURE],
      endpoint: `/playlist/history?page=${page}&count=${count}&order=${order}`,
      schema: Schemas.SONG_ARRAY_BY_DATE,
      method: 'GET'
    }
  };
}

export function loadHistory(page, count, order) {
  return dispatch => {
    return dispatch(fetchHistory(page, count, order));
  };
};

export function postSongToQueue(songid) {
  return {
    [CALL_API]: {
      types: ['POST_SONG_REQUEST', 'POST_SONG_SUCCESS', 'POST_SONG_FAILURE'],
      endpoint: `/playlist`,
      body: { songid },
      method: 'POST'
    }
  };
};

export function putSongToQueue(songid) {
  return {
    [CALL_API]: {
      types: [PUT_SONG_REQUEST, PUT_SONG_SUCCESS, PUT_SONG_FAILURE],
      endpoint: `/playlist`,
      body: { songid },
      method: 'PUT'
    }
  };
};

export function deleteSongFromQueue(songid, index) {
  return {
    [CALL_API]: {
      types: [DELETE_SONG_REQUEST, DELETE_SONG_SUCCESS, DELETE_SONG_FAILURE],
      endpoint: `/playlist?songid=${songid}&index=${index}`,
      method: 'DELETE'
    }
  };
};
