import { LOCATION_CHANGE } from '../constants/ActionTypes';

export function transitionTo(dest) {
  return {
    type: LOCATION_CHANGE,
    destination: dest
  };
}
