import { LOCATION_CHANGE } from '../constants/ActionTypes';

const initialState = 'HOME';

export default function location(state = initialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return action.destination;
    default:
      return state;
  }
}
