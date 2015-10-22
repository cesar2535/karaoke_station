import { TOGGLE_EDIT_MODAL } from '../constants/ActionTypes';

export function toggleEditModal(favorId, name) {
  return { type: TOGGLE_EDIT_MODAL, favorId, name };
}
