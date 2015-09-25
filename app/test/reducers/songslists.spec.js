import expect from 'expect';
import addPrepareTodos from '../../reducers/songslist';
import * as types from '../../constants/ActionTypes';

describe('addPrepareTodos reducer', () => {
  it('should handle initial state', () => {
    expect(
      addPrepareTodos(undefined, {})
    ).toEqual({songId: 0});
  });

  it('should handle PREPARE_TODO', () => {
    expect(
      addPrepareTodos({
        songId: 0
      }, {
        type: types.PREPARE_TODO,
        id: 100
      })
    ).toEqual({
      songId: 100
    });

    expect(
      addPrepareTodos({
        songId: 100
      }, {
        type: types.PREPARE_TODO,
        id: 100
      })
    ).toEqual({
      songId: 0
    });
  });
});
