import { CALL_API, Schemas } from '../middleware/api';
import { PLAYLIST_REQUEST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE } from '../constants/ActionTypes';

function fetchHistory(page = 0, count = 20, order = 'asc') {
  return {
    name: 'history',
    [CALL_API]: {
      types: [ PLAYLIST_REQUEST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE ],
      endpoint: `/playlist/history?page=${page}&count=${count}&order=${order}`,
      schema: Schemas.SONG_S_ARRAY,
      method: 'get'
    }
  }
}

export function loadHistory(page, count, order) {
  return (dispatch, getState) => {
    return dispatch(fetchHistory(page, count, order));
  }
}
