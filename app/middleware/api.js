import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import 'isomorphic-fetch';

const API_ROOT = 'http://172.17.34.10:5603/ktvstation/v1';
export const CALL_API = Symbol('Call API');

function callApi({ endpoint, schema, method, body }) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  let request;

  switch (method) {
    case 'GET':
      request = fetch(fullUrl);
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
      break;
    case 'DELETE':
      request = fetch(fullUrl, {
        method: 'DELETE'
      });
      break;
    case 'PUT':
      request = fetch(fullUrl, {
        method: 'PUT'
      });
      break;
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

    if (method === 'GET') {
      const resultJSON = Object.keys(camelizedJSON).map( key => camelizedJSON[key] );
      return Object.assign({}, normalize(resultJSON[0], schema));
    }
    return Object.assign({}, camelizedJSON);
  });
}

const songSchema = new Schema('songs', {
  idAttribute: 'songid'
});

const artistsSchema = new Schema('artists_list');

export const Schemas = {
  SONG: songSchema,
  QUEUE: arrayOf(songSchema),
  COMPLETED: arrayOf(songSchema),
  HISTORY: arrayOf(songSchema),
  ARTISTS: arrayOf(artistsSchema)
};

export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { schema, types, method = 'GET', body } = callAPI;
  const METHOD = method.toUpperCase();

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if (METHOD === 'GET' && !schema) {
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

  return callApi({ endpoint, schema, method: METHOD, body }).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || `Something bad happened.`
    }))
  );
};
