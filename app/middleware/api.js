import 'isomorphic-fetch';
import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys, decamelizeKeys } from 'humps';

import { API_ROOT } from '../constants/Config';

export const CALL_API = Symbol('Call API');

const listSchema = new Schema('lists', {
  idAttribute: 'id'
});

const songSchema = new Schema('songs', {
  idAttribute: 'id'
});

const songByOrderSchema = new Schema('songsByOrder', {
  idAttribute: 'index'
});

const songByDateSchema = new Schema('songsByDate', {
  idAttribute: 'date'
});

const songSchemaS = new Schema('songs', {
  idAttribute: 'songid'
});

const artistSchema = new Schema('artists', {
  idAttribute: 'id'
});

export const Schemas = {
  LIST: listSchema,
  LIST_ARRAY: arrayOf(listSchema),
  SONG: songSchema,
  SONG_ARRAY: arrayOf(songSchema),
  SONG_S: songSchemaS,
  SONG_ARRAY_S: arrayOf(songSchemaS),
  SONG_BY_ORDER: songByOrderSchema,
  SONG_ARRAY_BY_ORDER: arrayOf(songByOrderSchema),
  SONG_BY_DATE: songByDateSchema,
  SONG_ARRAY_BY_DATE: arrayOf(songByDateSchema),
  ARTIST: artistSchema,
  ARTIST_ARRAY: arrayOf(artistSchema)
};

function getPageInfo(json) {
  const info = Object.keys(json).reduce((result, item, index, array) => {
    if (typeof json[item] === 'number') {
      result['total'] = json[item];
    }
    return result;
  }, {});
  return info;
}

function callApi({ endpoint, schema, method, body = {} }) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  switch (method) {
    case 'GET':
      return fetch(fullUrl).then(
        response => response.json().then( json => ({ json, response }) )
      ).then( ({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json);
        }

        const camelizedJSON = camelizeKeys(json);
        const dataIndex = Object.keys(camelizedJSON).find((item) => Array.isArray(camelizedJSON[item]));
        const normalizableData = camelizedJSON[dataIndex];
        const pageInfo = getPageInfo(camelizedJSON, dataIndex) || undefined;

        return Object.assign({}, normalize(normalizableData, schema), pageInfo);
      });
    case 'POST':
    case 'PUT':
      const form = new FormData();
      Object.keys(body).forEach( item => {
        form.append(item, body[item]);
      });
      return fetch(fullUrl, {
        method,
        body: form
      }).then(
        response => response.json().then( json => ({ json, response }) )
      ).then( ({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        const camelizedJSON = camelizeKeys(json);
        return Object.assign({}, camelizedJSON);
      })
    case 'DELETE':
      return fetch(fullUrl, {
        method: 'DELETE'
      }).then(
        response => response.json().then( json => ({ json, response }) )
      ).then( ({ json, response }) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        const camelizedJSON = camelizeKeys(json);
        return Object.assign({}, camelizedJSON);
      });
    default:
      throw new Error('Unrecognized request method. Please make a correct one.');
  }
}

export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint, method } = callAPI;
  const { schema, types, body } = callAPI;
  method = method.toUpperCase();

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getStata());
  }

  if (typeof endpoint != 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if (method === 'GET' && !schema) {
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
      error: error.message || `Something bad happend.`
    }))
  );
};
