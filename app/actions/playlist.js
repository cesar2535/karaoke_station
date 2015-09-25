import { CALL_API, Schemas } from '../middleware/api';
import { PLAYLIST_REQUEST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE } from '../constants/ActionTypes';

function fetchPlaylist(name) {
  return {
    name,
    [CALL_API]: {
      types: [ PLAYLIST_REQUEST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE ],
      endpoint: `/playlist?state=${name}`,
      schema: Schemas.SONG_ARRAY,
      method: 'GET'
    }
  };
}

export function loadPlaylist(name) {
  return (dispatch) => {
    return dispatch(fetchPlaylist(name));
  };
}
