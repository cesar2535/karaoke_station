import expect from 'expect';
import * as actions from '../../actions/playlist';
import * as types from '../../constants/ActionTypes';
import { CALL_API, Schemas } from '../../middleware/api';

const fakeStore = fakeData => ({
  getState() {
    return fakeData;
  }
});

describe('playlist actions', () => {
  it('loadPlaylist should create [ PLAYLIST_REQUEST, PLAYLIST_SUCCESS, PLAYLIST_FAILURE ] action', () => {
    expect(
			actions.loadPlaylist('Roth')(action => action, fakeStore({}))[CALL_API]
		).toEqual({
      types: [ types.PLAYLIST_REQUEST, types.PLAYLIST_SUCCESS, types.PLAYLIST_FAILURE ],
      endpoint: `/playlist?state=Roth`,
      schema: Schemas.SONG_ARRAY,
      method: 'GET'
		});

    expect(
      actions.loadPlaylist('Roth')(action => action, fakeStore({}))
		).toEqual({
			name: 'Roth'
    });
  });
});
