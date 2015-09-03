const initialState = {

};

export default function entites(state = initialState, action) {
  if (action.response && action.response.entites) {
    return Object.assign({}, state, action.response.entites);
  }

  return state;
}
