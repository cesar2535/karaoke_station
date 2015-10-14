import { CALL_API, Schemas } from '../middleware/api';
import {
  SONGS_BY_ARTIST_REQUEST, SONGS_BY_ARTIST_SUCCESS, SONGS_BY_ARTIST_FAILURE,
  SONGS_BY_LANG_REQUEST, SONGS_BY_LANG_SUCCESS, SONGS_BY_LANG_FAILURE,
  SONGS_BY_KEYWORD_REQUEST, SONGS_BY_KEYWORD_SUCCESS, SONGS_BY_KEYWORD_FAILURE,
  LISTS_ELSE_REQUEST, LISTS_ELSE_SUCCESS, LISTS_ELSE_FAILURE
} from '../constants/ActionTypes';

function fetchSongsByArtist({ page = 1, count = 20, artists, nsongs }) {
  return {
    name: artists,
    [CALL_API]: {
      types: [SONGS_BY_ARTIST_REQUEST, SONGS_BY_ARTIST_SUCCESS, SONGS_BY_ARTIST_FAILURE],
      endpoint: `/songlist?query_who=songs&page=${page}&count=${count}&artists=${artists}&nsongs=${nsongs}`,
      schema: Schemas.SONG_ARRAY,
      method: 'GET'
    }
  };
}

export function loadSongsByArtist({ page, count, artists, nsongs }) {
  return dispatch => {
    return dispatch(fetchSongsByArtist({ page, count, artists, nsongs }));
  };
};

function fetchSongsByLang({ page = 1, count = 20, lang, nsongs }) {
  return {
    lang,
    [CALL_API]: {
      types: [SONGS_BY_LANG_REQUEST, SONGS_BY_LANG_SUCCESS, SONGS_BY_LANG_FAILURE],
      endpoint: `/songlist?query_who=songs&page=${page}&count=${count}&lang=${lang}&nsongs=${nsongs}`,
      schema: Schemas.SONG_ARRAY,
      method: 'GET'
    }
  };
}

export function loadSongsByLang({ page, count, lang, nsongs }) {
  return dispatch => {
    return dispatch(fetchSongsByLang({page, count, lang, nsongs }));
  };
};

function fetchSongsByKeyword({ page = 1, count = 20, keywords, queryWho, nsongs }) {
  return {
    keywords,
    [CALL_API]: {
      types: [SONGS_BY_KEYWORD_REQUEST, SONGS_BY_KEYWORD_SUCCESS, SONGS_BY_KEYWORD_FAILURE],
      endpoint: `/songlist?query_who=${queryWho}&page=${page}&count=${count}&keywords=${keywords}&nsongs=${nsongs}`,
      schema: Schemas.SONG_ARRAY,
      method: 'GET'
    }
  }
}

export function loadSongsByKeyword(args) {
  return dispatch => {
    return dispatch(fetchSongsByKeyword({ ...args }));
  };
};

function fetchArtistTypes() {
  return {
    name: 'artistTypes',
    [CALL_API]: {
      types: [LISTS_ELSE_REQUEST, LISTS_ELSE_SUCCESS, LISTS_ELSE_FAILURE],
      endpoint: `/songlist/artists`,
      schema: Schemas.LIST_ARRAY,
      method: 'GET'
    }
  };
}

export function loadArtistTypes() {
  return dispatch => {
    return dispatch(fetchArtistTypes());
  };
};

function fetchLangs() {
  return {
    name: 'langs',
    [CALL_API]: {
      types: [LISTS_ELSE_REQUEST, LISTS_ELSE_SUCCESS, LISTS_ELSE_FAILURE],
      endpoint: `/songlist/languages`,
      schema: Schemas.LIST_ARRAY,
      method: 'GET'
    }
  };
}

export function loadLangs() {
  return dispatch => {
    return dispatch(fetchLangs());
  };
};
