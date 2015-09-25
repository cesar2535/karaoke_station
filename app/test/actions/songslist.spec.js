import expect from 'expect';
import * as actions from '../../actions/songslist';
import * as types from '../../constants/ActionTypes';
import { CALL_API, Schemas } from '../../middleware/api';

const fakeStore = fakeData => ({
  getState() {
    return fakeData;
  }
});

describe('songslist actions', () => {
  it('addPrepareTodos should create PREPARE_TODO action', () => {
    expect(actions.addPrepareTodos(100))
    .toEqual({
			type: types.PREPARE_TODO,
      id: 100
    });
  });

  it('addPlay should create [ ADD_PLAY_LIST_REQUEST, ADD_PLAY_LIST_SUCCESS, ADD_PLAY_LIST_FAILURE ] action', () => {
    expect(
			actions.addPlay(100)(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.ADD_PLAY_LIST_REQUEST, types.ADD_PLAY_LIST_SUCCESS, types.ADD_PLAY_LIST_FAILURE ],
      endpoint: '/playlist',
      schema: '',
      method: 'POST',
      body: { songid: 100 }
    });
  });

  it('insertPlay should create [ ADD_PLAY_LIST_REQUEST, ADD_PLAY_LIST_SUCCESS, ADD_PLAY_LIST_FAILURE ] action', () => {
    expect(
			actions.insertPlay(100)(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.ADD_PLAY_LIST_REQUEST, types.ADD_PLAY_LIST_SUCCESS, types.ADD_PLAY_LIST_FAILURE ],
      endpoint: '/playlist',
      schema: '',
      method: 'PUT',
      body: { songid: 100 }
    });
  });

  it('addFavorite should create [ FAVORITE_REQUEST, FAVORITE_SUCCESS, FAVORITE_FAILURE ] action', () => {
    expect(
			actions.addFavorite(100, 1000)(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.FAVORITE_REQUEST, types.FAVORITE_SUCCESS, types.FAVORITE_FAILURE ],
      endpoint: '/favorite/1000',
      schema: '',
      method: 'PUT',
      body: { songid: 100 }
    });
  });

  it('loadArtistsListByGender(\'male\') should create [ ARTISTS_LIST_BY_GENDER_REQUEST, ARTISTS_LIST_BY_GENDER_SUCCESS, ARTISTS_LIST_BY_GENDER_FAILURE ] action', () => {
    expect(
      actions.loadArtistsListByGender('male')(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.ARTISTS_LIST_BY_GENDER_REQUEST, types.ARTISTS_LIST_BY_GENDER_SUCCESS, types.ARTISTS_LIST_BY_GENDER_FAILURE ],
      endpoint: '/songlist/artists/male?page=0&count=20',
      schema: Schemas.ARTISTSINBOOK,
      method: 'GET'
    });
  });

  it('loadArtistsListByGender(\'male\', 1, 30) should create [ ARTISTS_LIST_BY_GENDER_REQUEST, ARTISTS_LIST_BY_GENDER_SUCCESS, ARTISTS_LIST_BY_GENDER_FAILURE ] action', () => {
    expect(
      actions.loadArtistsListByGender('male', 1, 30)(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.ARTISTS_LIST_BY_GENDER_REQUEST, types.ARTISTS_LIST_BY_GENDER_SUCCESS, types.ARTISTS_LIST_BY_GENDER_FAILURE ],
      endpoint: '/songlist/artists/male?page=1&count=30',
      schema: Schemas.ARTISTSINBOOK,
      method: 'GET'
    });
  });

  it('loadLanguageList() should create [ LANGUAGE_LIST_REQUEST, LANGUAGE_LIST_SUCCESS, LANGUAGE_LIST_FAILURE ] action', () => {
    expect(
      actions.loadLanguageList()(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.LANGUAGE_LIST_REQUEST, types.LANGUAGE_LIST_SUCCESS, types.LANGUAGE_LIST_FAILURE ],
      endpoint: '/songlist/languages',
      schema: Schemas.ARTISTS,
      method: 'GET'
    });
  });

  it('loadArtistsList() should create [ ARTISTS_LIST_REQUEST, ARTISTS_LIST_SUCCESS, ARTISTS_LIST_FAILURE ] action', () => {
    expect(
      actions.loadArtistsList()(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.ARTISTS_LIST_REQUEST, types.ARTISTS_LIST_SUCCESS, types.ARTISTS_LIST_FAILURE ],
      endpoint: '/songlist/artists',
      schema: Schemas.ARTISTS,
      method: 'GET'
    });
  });

  it('loadSongsList() should create [ SONGS_LIST_REQUEST, SONGS_LIST_SUCCESS, SONGS_LIST_FAILURE ] action', () => {
    expect(
      actions.loadSongsList()(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.SONGS_LIST_REQUEST, types.SONGS_LIST_SUCCESS, types.SONGS_LIST_FAILURE ],
      endpoint: '/songlist?',
      schema: Schemas.SONGINBOOK,
      method: 'GET'
    });
  });

  it('loadSongsList(undefined, undefined, \'songs\', \'蔡依林\', 1, 80, \'Mandarin\') should create [ SONGS_LIST_REQUEST, SONGS_LIST_SUCCESS, SONGS_LIST_FAILURE ] action', () => {
    expect(
      actions.loadSongsList(undefined, undefined, 'songs', '蔡依林', 1, 80, 'Mandarin')(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.SONGS_LIST_REQUEST, types.SONGS_LIST_SUCCESS, types.SONGS_LIST_FAILURE ],
      endpoint: '/songlist?&page=1&count=80$lang=Mandarin&artists=蔡依林&query_who=songs',
      schema: Schemas.SONGINBOOK,
      method: 'GET'
    });
  });
});

