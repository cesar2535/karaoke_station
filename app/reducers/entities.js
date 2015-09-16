const initialState = {

};

export default function entities(state = initialState, action) {
  if (action.response && action.response.entities) {
    return Object.assign({}, state, action.response.entities);
  }

  return state;
}
