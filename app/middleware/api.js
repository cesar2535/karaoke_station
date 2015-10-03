import 'isomorphic-fetch';
import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys, decamelizeKeys } from 'humps';

import { API_ROOT } from '../constants/Config';

export const CALL_API = Symbol('Call API');

const songSchema = new Schema('songs', {
  idAttribute: 'id'
});

const songSchemaS = new Schema('songs', {
  idAttribute: 'songid'
});

export const Schemas = {
  SONG: songSchema,
  SONG_ARRAY: arrayOf(songSchema),
  SONG_S: songSchemaS,
  SONG_ARRAY_S: arrayOf(songSchemaS)
};

function callApi({ endpoint, schema, method, body, normalizable }) {

}

export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { schema, types, method, body, normalizable } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getStata());
  }

  if (typeof endpoint != 'string') {
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

  return callApi({ endpoint, schema, method, body, normalizable }).then(
    response => next(actionWith({
      response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || `Something bad happend.`
    }))
  );
};
