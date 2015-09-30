import { CALL_API, Schemas } from '../middleware/api';
import { SONGS_LIST_REQUEST, SONGS_LIST_SUCCESS, SONGS_LIST_FAILURE,
  PREPARE_TODO,
  FAVORITE_REQUEST, FAVORITE_SUCCESS, FAVORITE_FAILURE,
  // ADD_FAVORITE,
  ARTISTS_LIST_REQUEST, ARTISTS_LIST_SUCCESS, ARTISTS_LIST_FAILURE,
  ADD_PLAY_LIST_REQUEST, ADD_PLAY_LIST_SUCCESS, ADD_PLAY_LIST_FAILURE,
  ARTISTS_LIST_BY_GENDER_REQUEST, ARTISTS_LIST_BY_GENDER_SUCCESS, ARTISTS_LIST_BY_GENDER_FAILURE,
  LANGUAGE_LIST_REQUEST, LANGUAGE_LIST_SUCCESS, LANGUAGE_LIST_FAILURE } from '../constants/ActionTypes';

import * as APIS from '../constants/Apis.config';

function fetchSongsList(keyword, nsong, queryWho, artistNation, page = 1, count = 20, language) {
  const artistArg = artistNation !== undefined ? '&artists=' + artistNation : '';
  const queryWhoArg = queryWho !== undefined ? '&query_who=' + queryWho : '';
  const languageArg = language !== undefined ? '$lang=' + language : '';
  const actionKey = language !== undefined ? language : artistNation;
  return {
    actionKey,
    [CALL_API]: {
      types: [ SONGS_LIST_REQUEST, SONGS_LIST_SUCCESS, SONGS_LIST_FAILURE ],
      endpoint: `${APIS.SONGS}?page=${page}&count=${count}${languageArg}${artistArg}${queryWhoArg}`,
      schema: Schemas.SONGINBOOK,
      method: 'GET'
    }
  };
}

/*
function fetchSongsList(keyword, nsong, queryWho, artistNation, page, count, language) {
  const artistArg = artistNation !== undefined ? '&artists=' + artistNation : '';
  const queryWhoArg = queryWho !== undefined ? '&query_who=' + queryWho : '';
  const pageArg = page !== undefined ? '&page=' + page : '';
  const countArg = count !== undefined ? '&count=' + count : '';
  const languageArg = language !== undefined ? '&lang=' + language : '';
  const actionKey = language !== undefined ? language : artistNation;
  return {
    actionKey,
    [CALL_API]: {
      types: [ SONGS_LIST_REQUEST, SONGS_LIST_SUCCESS, SONGS_LIST_FAILURE ],
      endpoint: `${APIS.SONGS}?${pageArg}${countArg}${languageArg}${artistArg}${queryWhoArg}`,
      schema: Schemas.SONGINBOOK,
      method: 'GET'
    }
  };
}
*/

export function loadSongsList(keyword, nsong, queryWho, artistNation, page, count, language) {
  return (dispatch) => {
    return dispatch(fetchSongsList(keyword, nsong, queryWho, artistNation, page, count, language));
  };
}

function addToPlayList(songid, method) {
  return {
    [CALL_API]: {
      types: [ ADD_PLAY_LIST_REQUEST, ADD_PLAY_LIST_SUCCESS, ADD_PLAY_LIST_FAILURE ],
      endpoint: `${APIS.PLAYS}`,
      schema: '',
      method: method,
      body: { songid }
    }
  };
}

export function addPlay(songid) {
  return ( dispatch ) => {
    return dispatch(addToPlayList(songid, 'POST'));
  };
}

export function insertPlay(songid) {
  return ( dispatch ) => {
    return dispatch(addToPlayList(songid, 'PUT'));
  };
}

function addToFavorite(songid, favoriteid) {
  return {
    [CALL_API]: {
      types: [ FAVORITE_REQUEST, FAVORITE_SUCCESS, FAVORITE_FAILURE ],
      endpoint: `${APIS.FAVORITES}/${favoriteid}`,
      schema: '',
      method: 'PUT',
      body: { songid }
    }
  };
}

export function addFavorite(songid, favoriteid) {
  return ( dispatch ) => {
    return dispatch(addToFavorite(songid, favoriteid));
  };
}

export function addPrepareTodos(songid) {
  return {
    type: PREPARE_TODO,
    id: songid
  };
}

function fetchArtistsList() {
  return {
    [CALL_API]: {
      types: [ ARTISTS_LIST_REQUEST, ARTISTS_LIST_SUCCESS, ARTISTS_LIST_FAILURE ],
      endpoint: `${APIS.ARTISTS_CATEGORY}`,
      schema: Schemas.ARTISTS,
      method: 'GET'
    }
  };
}

export function loadArtistsList() {
  return ( dispatch ) => {
    return dispatch(fetchArtistsList());
  };
}

function fetchLanguageList() {
  return {
    [CALL_API]: {
      types: [ LANGUAGE_LIST_REQUEST, LANGUAGE_LIST_SUCCESS, LANGUAGE_LIST_FAILURE ],
      endpoint: `${APIS.LANGUAGES}`,
      schema: Schemas.ARTISTS,
      method: 'GET'
    }
  };
}

export function loadLanguageList() {
  return ( dispatch ) => {
    return dispatch(fetchLanguageList());
  };
}

function fetchArtistsListByGender(gender, page = 0, count = 20) {
  return {
    gender,
    [CALL_API]: {
      types: [ ARTISTS_LIST_BY_GENDER_REQUEST, ARTISTS_LIST_BY_GENDER_SUCCESS, ARTISTS_LIST_BY_GENDER_FAILURE ],
      endpoint: `${APIS.ARTISTS_CATEGORY}/${gender}?page=${page}&count=${count}`,
      schema: Schemas.ARTISTSINBOOK,
      method: 'GET'
    }
  };
}

export function loadArtistsListByGender(gender, page, count) {
  return (dispatch) => {
    return dispatch(fetchArtistsListByGender(gender, page, count));
  };
}
