import { CALL_API, Schemas } from '../middleware/api';
import {
  SONGS_BY_ARTIST_REQUEST, SONGS_BY_ARTIST_SUCCESS, SONGS_BY_ARTIST_FAILURE,
  SONGS_BY_LANG_REQUEST, SONGS_BY_LANG_SUCCESS, SONGS_BY_LANG_FAILURE,
  SONGS_BY_KEYWORD_REQUEST, SONGS_BY_KEYWORD_SUCCESS, SONGS_BY_KEYWORD_FAILURE,
  LISTS_ELSE_REQUEST, LISTS_ELSE_SUCCESS, LISTS_ELSE_FAILURE,
  ARTISTS_BY_ARTISTTYPE_REQUEST, ARTISTS_BY_ARTISTTYPE_SUCCESS, ARTISTS_BY_ARTISTTYPE_FAILURE,
  ARTISTS_BY_KEYWORD_REQUEST, ARTISTS_BY_KEYWORD_SUCCESS, ARTISTS_BY_KEYWORD_FAILURE
} from '../constants/ActionTypes';

function fetchSongsByArtist({ page = 1, count = 20, artistId, artistName }) {
  return {
    artistName,
    artistId,
    page,
    [CALL_API]: {
      types: [SONGS_BY_ARTIST_REQUEST, SONGS_BY_ARTIST_SUCCESS, SONGS_BY_ARTIST_FAILURE],
      endpoint: `/songlist?query_who=songs&page=${page}&count=${count}&artist_id=${artistId}`,
      schema: Schemas.SONG_ARRAY,
      method: 'GET'
    }
  };
}

export function loadSongsByArtist(args) {
  return dispatch => {
    return dispatch(fetchSongsByArtist({ ...args }));
  };
};

function fetchSongsByLang({ page = 1, count = 20, lang, nsongs }) {
  const nSongs = nsongs ? `&nsongs=${nsongs}` : ''
  return {
    lang,
    page,
    [CALL_API]: {
      types: [SONGS_BY_LANG_REQUEST, SONGS_BY_LANG_SUCCESS, SONGS_BY_LANG_FAILURE],
      endpoint: `/songlist?query_who=songs&page=${page}&count=${count}&lang=${lang}${nSongs}`,
      schema: Schemas.SONG_ARRAY,
      method: 'GET'
    }
  };
}

export function loadSongsByLang(args) {
  return dispatch => {
    return dispatch(fetchSongsByLang({ ...args }));
  };
};

function fetchSongsByKeyword({ page = 1, count = 20, keyword, nsongs }) {
  return {
    keyword,
    page,
    [CALL_API]: {
      types: [SONGS_BY_KEYWORD_REQUEST, SONGS_BY_KEYWORD_SUCCESS, SONGS_BY_KEYWORD_FAILURE],
      endpoint: `/songlist?query_who=songs&page=${page}&count=${count}&keywords=${keyword}&nsongs=${nsongs}`,
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

function fetchArtistsByArtistType({ page = 1, count = 60, artistType }) {
  return {
    artistType,
    page,
    [CALL_API]: {
      types: [ARTISTS_BY_ARTISTTYPE_REQUEST, ARTISTS_BY_ARTISTTYPE_SUCCESS, ARTISTS_BY_ARTISTTYPE_FAILURE],
      endpoint: `/songlist/artists/${artistType}?page=${page}&count=${count}`,
      schema: Schemas.ARTIST_ARRAY,
      method: 'GET'
    }
  };
}

export function loadArtistsByArtistType(args) {
  return dispatch => {
    return dispatch(fetchArtistsByArtistType({ ...args }));
  };
};

function fetchArtistsByKeyword({ page = 1, count = 20, keyword }) {
  return {
    keyword,
    page,
    [CALL_API]: {
      types: [ARTISTS_BY_KEYWORD_REQUEST, ARTISTS_BY_KEYWORD_SUCCESS, ARTISTS_BY_KEYWORD_FAILURE],
      endpoint: `/songlist?query_who=artists&page=${page}&count=${count}&keywords=${keyword}`,
      schema: Schemas.ARTIST_ARRAY,
      method: 'GET'
    }
  };
}

export function loadArtistsByKeyword(args) {
  return dispatch => {
    return dispatch(fetchArtistsByArtistType({ ...args }));
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
