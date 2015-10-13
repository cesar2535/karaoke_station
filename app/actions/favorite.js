import { CALL_API, Schemas } from '../middleware/api';
import {
  SONGS_FROM_FAVORITE_REQUEST, SONGS_FROM_FAVORITE_SUCCESS, SONGS_FROM_FAVORITE_FAILURE,
  LISTS_FROM_FAVORITE_REQUEST, LISTS_FROM_FAVORITE_SUCCESS, LISTS_FROM_FAVORITE_FAILURE
} from '../constants/ActionTypes';

function fetchSongsFromFavorite(favorId) {
  return {
    favorId,
    [CALL_API]: {
      types: [SONGS_FROM_FAVORITE_REQUEST, SONGS_FROM_FAVORITE_SUCCESS, SONGS_FROM_FAVORITE_FAILURE],
      endpoint: `/favorite/${favorId}`,
      schema: Schemas.SONG_ARRAY,
      method: 'GET'
    }
  };
}

export function loadSongsFromFavorite(favorId) {
  return dispatch => {
    return dispatch(fetchSongsFromFavorite(favorId));
  };
};

function fetchListFromFavorite() {
  return {
    [CALL_API]: {
      types: [LISTS_FROM_FAVORITE_REQUEST, LISTS_FROM_FAVORITE_SUCCESS, LISTS_FROM_FAVORITE_FAILURE],
      endpoint: `/favorite`,
      schema: Schemas.LIST_ARRAY,
      method: 'GET'
    }
  };
}

export function loadListFromFavorite() {
  return dispatch => {
    return dispatch(fetchListFromFavorite());
  };
};
