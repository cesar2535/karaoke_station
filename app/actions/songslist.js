import { CALL_API, Schemas } from '../middleware/api';
import { SONGS_LIST_REQUEST, SONGS_LIST_SUCCESS, SONGS_LIST_FAILURE } from '../constants/ActionTypes';

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

export function loadSongsList(keyword, nsong, queryWho, artistNation) {
  return (dispatch, getState) => {

    return dispatch(fetchSongsList(keyword, nsong, queryWho, artistNation));
  }
}
