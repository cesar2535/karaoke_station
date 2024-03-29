import merge from 'lodash/object/merge';
import union from 'lodash/array/union';

export default function paginate({ types, mapActionToKey }) {
  if (!Array.isArray(types) && types.length !== 3) {
    throw new Error('Expected types to be an array of three elements.');
  }

  if (!types.every(t => typeof t === 'string')) {
    throw new Error('Expected types to be strings.');
  }

  if (typeof mapActionToKey !== 'function') {
    throw new Error('Expected mapActionToKey to be a function.');
  }

  const [ requestType, successType, failureType ] = types;

  function updatePagination(state = {
    isFetching: false,
    ids: []
  }, action) {
    switch (action.type) {
      case requestType:
        return merge({}, state, { isFetching: true });
      case successType:
        if (action.page > 1) {
          return merge({}, state, {
            isFetching: false,
            ids: union(state.ids, action.response.result),
            page: action.page,
            total: action.response.total
          });
        }
        return {
          isFetching: false,
          ids: action.response.result,
          page: action.page,
          total: action.response.total
        };
      case failureType:
        return merge({}, state, { isFetching: false });
      default:
        return state;
    }
  }

  return function updatePaginationByKey(state = {}, action) {
    switch (action.type) {
      case requestType:
      case successType:
      case failureType:
        const key = mapActionToKey(action);
        if (typeof key !== 'string') {
          throw new Error('Expected key to be a string.');
        }
        return Object.assign({}, state, {
          [key]: updatePagination(state[key], action)
        });
      default:
        return state;
    }
  };
}
