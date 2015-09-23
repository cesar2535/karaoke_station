import { ARTISTS_LIST_SUCCESS, LANGUAGE_LIST_SUCCESS } from '../constants/ActionTypes';

export default function updateSidetabToEntities(state = {
  artists_list: [],
  languages: []
}, action) {
  switch (action.type) {
    case ARTISTS_LIST_SUCCESS:
      return {
        artists_list: action.response.result,
        languages: state.languages
      };
    case LANGUAGE_LIST_SUCCESS:
      return {
				artists_list: state.artists_list,
        languages: action.response.result
      };
    default:
      return state;
  }
}
