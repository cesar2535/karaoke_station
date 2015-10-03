import { CALL_API, Schemas } from '../middleware/api';
import { LOAD_PLAYLIST_REQUEST, LOAD_PLAYLIST_SUCCESS, LOAD_PLAYLIST_FAILURE } from '../constants/ActionTypes';

function fetchPlaylist(name) {
  return {
    name,
    [CALL_API]: {
      types: [LOAD_PLAYLIST_REQUEST, LOAD_PLAYLIST_SUCCESS, LOAD_PLAYLIST_FAILURE],
      endpoint: `/playlist?state=${name}`,
      schema: Schemas.SONG_ARRAY,
      method: 'GET'
    }
  };
}

export function loadPlaylist(name) {
  return dispatch => {
    return dispatch(fetchPlaylist(name));
  };
};
