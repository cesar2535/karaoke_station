import 'isomorphic-fetch';
import { Schema, arrayOf, normalize } from 'normalizr';
import { camelizeKeys, decamelizeKeys } from 'humps';

import { API_ROOT } from '../constants/Config';

export const CALL_API = Symbol('Call API');

export const Schemas = {

};

function callApi({ endpoint, schema, method, body }) {

}

export default store => next => action => {
  const callAPI = action[CALL_API];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }
}
