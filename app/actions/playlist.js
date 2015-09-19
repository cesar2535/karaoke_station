import { CALL_API, Schemas } from '../middleware/api';
import { PLAYLIST_REQUEST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE } from '../constants/ActionTypes';

// function fetchQueue() {
//   return {
//     name: 'queue',
//     [CALL_API]: {
//       types: [ QUEUE_REQUEST, QUEUE_SUCCESS, QUEUE_FAILURE ],
//       endpoint: '/playlist/current',
//       schema: Schemas.QUEUE,
//       method: 'get'
//     }
//   };
// }
//
// export function loadQueue() {
//   return (dispatch, getState) => {
//
//     return dispatch(fetchQueue());
//   }
// }
//
// function fetchCompleted() {
//   return {
//     name: 'completed',
//     [CALL_API]: {
//       types: [],
//       endpoint: '/playlist/finished',
//       schema: Schemas.COMPLETED,
//       method: 'get'
//     }
//   }
// }
//
// export function loadCompleted() {
//   return (dispatch, getState) => {
//     return dispatch(fetchCompleted());
//   }
// }

function fetchPlaylist(name) {
  return {
    name,
    [CALL_API]: {
      types: [ PLAYLIST_REQUEST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE ],
      endpoint: `/playlist/${name}`,
      schema: Schemas.QUEUE,
      method: 'get'
    }
  }
}

export function loadPlaylist(name) {
  return (dispatch, getState) => {
    return dispatch(fetchPlaylist(name));
  }
}
