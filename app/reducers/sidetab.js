import { ARTISTS_LIST_SUCCESS } from '../constants/ActionTypes';

const initialState = {
  artists_list: []
};

export default function updateArtistsToEntities(state = initialState, action) {
  switch (action.type) {
    case ARTISTS_LIST_SUCCESS:
      return {
        artists_list: action.response.result
      };
    default:
      return state;
  }
}

