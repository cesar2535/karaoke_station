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

  it('addPlay should create ADD_PLAY action', () => {
    expect(
			actions.addPlay(100)(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.PLAYLIST_REQUEST, types.PLAYLIST_SUCCESS, types.PLAYLIST_FAILURE ],
      endpoint: 'playlist',
      schema: '',
      method: 'POST',
      body: { songid: 100 }
    });
  });

  it('insertPlay should create INSERT_PLAY action', () => {
    expect(
			actions.insertPlay(100)(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.PLAYLIST_REQUEST, types.PLAYLIST_SUCCESS, types.PLAYLIST_FAILURE ],
      endpoint: 'playlist',
      schema: '',
      method: 'PUT',
      body: { songid: 100 }
    });
  });

  it('addFavorite should create ADD_FAVORITE action', () => {
    expect(
			actions.addFavorite(100, 1000)(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.FAVORITE_REQUEST, types.FAVORITE_SUCCESS, types.FAVORITE_FAILURE ],
      endpoint: 'favorite/1000',
      schema: '',
      method: 'PUT',
      body: { songid: 100 }
    });
  });
});

