import expect from 'expect';
import * as actions from '../../actions/favorites';
import * as types from '../../constants/ActionTypes';
import { CALL_API, Schemas } from '../../middleware/api';

const fakeStore = fakeData => ({
  getState() {
    return fakeData;
  }
});

describe('favorites actions', () => {
  it('loadFavoriteLists should create [ FAVORITES_LIST_REQUEST, FAVORITES_LIST_SUCCESS, FAVORITES_LIST_FAILURE ] action', () => {
    expect(actions.loadFavoriteLists()(action => action, fakeStore({}))[CALL_API])
    .toEqual({
			types: [ types.FAVORITES_LIST_REQUEST, types.FAVORITES_LIST_SUCCESS, types.FAVORITES_LIST_FAILURE ],
			endpoint: `/favorite`,
			schema: Schemas.FAVORITES,
			method: 'GET'
    });
  });

  it('loadFavorites(\'蔡依林\', 1) should create [ FAVORITES_LIST_REQUEST, FAVORITES_LIST_SUCCESS, FAVORITES_LIST_FAILURE ] action', () => {
    expect(actions.loadFavorites('蔡依林', 1)(action => action, fakeStore({}))[CALL_API])
    .toEqual({
			types: [ types.FAVORITES_REQUEST, types.FAVORITES_SUCCESS, types.FAVORITES_FAILURE ],
      endpoint: `/favorite/1`,
      schema: Schemas.SONG_S_ARRAY,
      method: 'GET'
    });
    expect(actions.loadFavorites('蔡依林', 1)(action => action, fakeStore({})))
    .toEqual({
			listName: '蔡依林'
    });
  });
});
