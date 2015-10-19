import { CALL_API, Schemas } from '../middleware/api';
import {
  SONGS_FROM_FAVORITE_REQUEST, SONGS_FROM_FAVORITE_SUCCESS, SONGS_FROM_FAVORITE_FAILURE,
  LISTS_ELSE_REQUEST, LISTS_ELSE_SUCCESS, LISTS_ELSE_FAILURE
} from '../constants/ActionTypes';

function fetchSongsFromFavorite(favorId, page = 1, count = 20) {
  return {
    favorId,
    [CALL_API]: {
      types: [SONGS_FROM_FAVORITE_REQUEST, SONGS_FROM_FAVORITE_SUCCESS, SONGS_FROM_FAVORITE_FAILURE],
      endpoint: `/favorite/${favorId}?page=${page}&count=${count}`,
      schema: Schemas.SONG_ARRAY,
      method: 'GET'
    }
  };
}

export function loadSongsFromFavorite(favorId, page, count) {
  return dispatch => {
    return dispatch(fetchSongsFromFavorite(favorId, page, count));
  };
};

function fetchListFromFavorite() {
  return {
    name: 'favorite',
    [CALL_API]: {
      types: [LISTS_ELSE_REQUEST, LISTS_ELSE_SUCCESS, LISTS_ELSE_FAILURE],
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
