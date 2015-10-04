import { combineReducers } from 'redux';
import merge from 'lodash/object/merge';
import * as ActionTypes from '../constants/ActionTypes';

function entities(state = {}, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities);
  }

  return state;
}

function errorMessage(state = null, action) {
  const { type, error } = action;
  if (type === ActionTypes.RESET_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return action.error;
  }

  return state;
}

const rootReducer = combineReducers({
  entities,
  errorMessage
});

export default rootReducer;
