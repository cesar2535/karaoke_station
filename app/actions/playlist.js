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
  return dispatch => {
    if (name === 'current') {
      return dispatch(fetchPlaylist(name, page, count, Schemas.SONG_ARRAY_BY_ORDER));
    }

    return dispatch(fetchPlaylist(name, page, count, Schemas.SONG_ARRAY_BY_DATE));
  };
};
