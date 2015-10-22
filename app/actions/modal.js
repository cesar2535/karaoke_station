import { TOGGLE_EDIT_MODAL } from '../constants/ActionTypes';

export function toggleEditModal(favoriteId, name) {
  return { type: TOGGLE_EDIT_MODAL, favoriteId, name };
}
