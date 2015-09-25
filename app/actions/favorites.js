import { CALL_API, Schemas } from '../middleware/api';
import { FAVORITES_REQUEST, FAVORITES_SUCCESS, FAVORITES_FAILURE,
        FAVORITES_LIST_REQUEST, FAVORITES_LIST_SUCCESS, FAVORITES_LIST_FAILURE } from '../constants/ActionTypes';

function fetchFavorites(listName, id) {
  return {
    listName,
    [CALL_API]: {
      types: [ FAVORITES_REQUEST, FAVORITES_SUCCESS, FAVORITES_FAILURE ],
      endpoint: `/favorite/${id}`,
      schema: Schemas.SONG_S_ARRAY,
      method: 'GET'
    }
  };
}

export function loadFavorites(name, id) {
  return (dispatch) => {
    return dispatch(fetchFavorites(name, id));
  };
}

function fetchFavoriteLists() {
  return {
    [CALL_API]: {
      types: [ FAVORITES_LIST_REQUEST, FAVORITES_LIST_SUCCESS, FAVORITES_LIST_FAILURE ],
      endpoint: `/favorite`,
      schema: Schemas.FAVORITES,
      method: 'GET'
    }
  };
}

export function loadFavoriteLists() {
  return (dispatch) => {
    return dispatch(fetchFavoriteLists());
  };
}
