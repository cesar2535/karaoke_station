import { SLIDE_CHANGE } from '../constants/ActionTypes';

export default function slide(state = 0, action) {
  switch (action.type) {
    case SLIDE_CHANGE:
      return action.page;
    default:
      return state;
  }
}
