import { CALL_API, Schemas } from '../middleware/api';
import { FAVORITES_REQUEST, FAVORITES_SUCCESS, FAVORITES_FAILURE } from '../constants/ActionTypes';

function fetchFavorites(listName, id) {
  return {
    listName,
    [CALL_API]: {
      types: [ FAVORITES_REQUEST, FAVORITES_SUCCESS, FAVORITES_FAILURE ],
      endpoint: `/favorite/${id}`,
      schema: Schemas.SONG_ARRAY,
      method: 'get'
    }
  }
}

export function loadFavorites(name) {
  return (dispatch, getState) => {
    return dispatch(fetchFavorites(name));
  }
}

function fetchFavoriteLists() {
  return {
    [CALL_API]: {
      types: [],
      endpoint: `/favorite`,
      schema: '',
      method: 'get'
    }
  }
}

export function loadFavoriteLists() {
  return (dispatch, getState) => {
    return dispatch(fetchFavoriteLists());
  }
}
