import { SLIDE_CHANGE } from '../constants/ActionTypes';

export function transitionSilde(dest) {
  return {
    type: SLIDE_CHANGE,
    page: dest
  };
}
