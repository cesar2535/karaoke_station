import expect from 'expect';
import * as actions from '../../actions/history';
import * as types from '../../constants/ActionTypes';
import { CALL_API, Schemas } from '../../middleware/api';

const fakeStore = fakeData => ({
  getState() {
    return fakeData;
  }
});

describe('history actions', () => {
  it('loadHistory() should create [ PLAYLIST_REQUEST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE ] action', () => {
    expect(
			actions.loadHistory()(action => action, fakeStore({}))[CALL_API]
		).toEqual({
      types: [ types.PLAYLIST_REQUEST, types.PLAYLIST_SUCCESS, types.PLAYLIST_FAILURE ],
      endpoint: `/playlist/history?page=0&count=20&order=asc`,
      schema: Schemas.SONG_S_ARRAY,
      method: 'GET'
		});

    expect(
      actions.loadHistory(0, 20, 'asc')(action => action, fakeStore({}))
		).toEqual({
			name: 'history'
    });
  });

  it('loadHistory(0, 20, \'asc\') should create [ PLAYLIST_REQUEST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE ] action', () => {
    expect(
			actions.loadHistory(0, 20, 'asc')(action => action, fakeStore({}))[CALL_API]
		).toEqual({
      types: [ types.PLAYLIST_REQUEST, types.PLAYLIST_SUCCESS, types.PLAYLIST_FAILURE ],
      endpoint: `/playlist/history?page=0&count=20&order=asc`,
      schema: Schemas.SONG_S_ARRAY,
      method: 'GET'
		});

    expect(
      actions.loadHistory(0, 20, 'asc')(action => action, fakeStore({}))
		).toEqual({
			name: 'history'
    });
  });
});
