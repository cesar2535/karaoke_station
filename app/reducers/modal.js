import { TOGGLE_EDIT_MODAL, TOGGLE_ADD_TO_FAVORITE_MODAL } from '../constants/ActionTypes';

const initialState = {
	showModal: false,
	favorId: -1,
	name: 'show modal',
	songId: -1
};

export default function showModal( state = initialState, action ) {
  switch ( action.type ) {
    case TOGGLE_EDIT_MODAL:
			return {
				showModal: !state.showModal,
				favorId: action.favorId,
				name: action.name
			};
		case TOGGLE_ADD_TO_FAVORITE_MODAL:
  	default:
			return state;
  }
}
