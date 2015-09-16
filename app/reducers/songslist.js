import { PREPARE_TODO } from '../constants/ActionTypes';

const initialState = {
  songId: '0'
};

export default function addPrepareTodos(state = initialState, action) {
  switch (action.type) {
    case PREPARE_TODO:
      return {
        songId: action.id
      };
    default:
      return state;
  }
}

