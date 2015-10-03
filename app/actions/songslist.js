import { CALL_API, Schemas } from '../middleware/api';
import {
  LOAD_SONGSLIST_REQUEST, LOAD_SONGSLIST_SUCCESS, LOAD_SONGSLIST_FAILURE
} from '../constants/ActionTypes';

function fetchSongsList() {
  return {
    [CALL_API]: {
      types: [LOAD_SONGSLIST_REQUEST, LOAD_SONGSLIST_SUCCESS, LOAD_SONGSLIST_FAILURE],
      endpoint: ``,
      schema: Schemas.SONG_ARRAY,
      method: 'GET'
    }
  };
}

export function loadSongsList() {
  return dispatch => {
    return dispatch(fetchSongsList());
  };
};
