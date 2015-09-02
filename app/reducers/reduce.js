const initialState = {};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case 'test':
      return 'test';
    default:
      return state;
  }
}
