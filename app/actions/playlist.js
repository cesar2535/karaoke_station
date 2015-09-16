import { CALL_API, Schemas } from '../middleware/api';
import { PLAYLIST_REQUEST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE } from '../constants/ActionTypes';

function fetchPlaylist() {
  return {
    [CALL_API]: {
      types: [ PLAYLIST_REQUEST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE ],
      endpoint: '/playlist',
      schema: Schemas.PLAYLIST,
      method: 'get'
    }
  };
}

export default function loadPlaylist() {
  return (dispatch, getState) => {

    return dispatch(fetchPlaylist());
  }
}
