import { CALL_API, Schemas } from '../middleware/api';
import { PLAYLIST_REQUEST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE } from '../constants/ActionTypes';

function fetchPlaylist(keyword, nsong, queryWho, artistNation) {
  return {
    [CALL_API]: {
      types: [ PLAYLIST_REQUEST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE ],
      endpoint: '',
      schema: '',
      method: ''
    }
  };
}

export default function loadPlaylist(keyword, nsong, queryWho, artistNation) {
  return (dispatch, getState) => {

    return dispatch(fetchSongsList(keyword, nsong, queryWho, artistNation));
  }
}
