import { TOGGLE_PLAY_PAUSE_BUTTOM } from '../constants/ActionTypes';

const initialState = {
  status: 'STOP'
};

export default function togglePlayPauseButtom(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_PLAY_PAUSE_BUTTOM:
      return {
        status: action.status
      };
    default:
      return state;
  }
}

