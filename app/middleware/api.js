import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import 'isomorphic-fetch';

export const CALL_API = Symbol('Call API');

function callApi({ endpoint, schema, method = 'GET', body }) {
  const METHOD = method.toUpperCase();
  let request;

  switch (METHOD) {
    case 'GET':
      request = fetch(fullUrl)
      break;
    case 'POST':
      request = fetch(fullUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
    case 'DELETE':
      request = fetch(fullUrl, {
        method: 'DELETE'
      });
    case 'PUT':
      request = fetch(fullUrl, {
        method: 'PUT'
      });
    default:
      throw new Error('Unrecognized request method. Please make a correct one.');
  }

  return request.then(
    response => response.json().then( json => ({ json, response }) )
  ).then( ({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    const camelizedJSON = camelizeKeys(json);

    return Object.assign({}, normalize(camelizedJSON, schema));
  });
}

export default store => next => action => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { schema, types, method, body } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if (!schema) {
    throw new Error('Specify one of the exported Schemas.');
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  if (!types.every( type => typeof type === 'string' )) {
    throw new Error('Expected action types to be strings.');
  }

  function actionWith(data) {
    const finalAction = Object.assign({}, action, data);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [ requestType, successType, failureType ] = types;
  next( actionWith({ type: requestType }) );

  return callApi({ endpoint, schema, method, body }).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || `Something bad happened.`
    }))
  );
}
