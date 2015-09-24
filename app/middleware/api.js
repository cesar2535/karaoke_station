import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys } from 'humps';
import 'isomorphic-fetch';
import { API_ROOT } from '../constants/Config';

export const CALL_API = Symbol('Call API');

const songSchema = new Schema('songs', {
  idAttribute: 'songid'
});

const songSchemaS = new Schema('songs', {
  idAttribute: 'id'
});

const artistsInBookSchema = new Schema('artists', {
  idAttribute: 'name'
});

const favoritesListSchema = new Schema('favorites', {
  idAttribute: 'id'
});

const artistsSchema = new Schema('artists_list');

const languagesSchema = new Schema('languages');

export const Schemas = {
  SONG: songSchema,
  SONG_ARRAY: arrayOf(songSchema),
  SONG_S: songSchemaS,
  SONG_S_ARRAY: arrayOf(songSchemaS),
  ARTISTS: arrayOf(artistsSchema),
  SONGINBOOK: arrayOf(songSchemaS),
  ARTISTSINBOOK: arrayOf(artistsInBookSchema),
  LANGUAGES: arrayOf(languagesSchema),
  FAVORITES: arrayOf(favoritesListSchema)
};

function callApi({ endpoint, schema, method, body }) {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;
  let request;
  switch (method) {
    case 'GET':
      request = fetch(fullUrl);
      break;
    case 'POST':
      let form;
      if (body) {
        form = new FormData();
        Object.keys(body).forEach( item => {
          form.append(item, body[item])
        });
        console.log(form);
      }
      request = fetch(fullUrl, {
        method: 'POST',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-Type': 'application/json'
        // },
        body: form || undefined
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
