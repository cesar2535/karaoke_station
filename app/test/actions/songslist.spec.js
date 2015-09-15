import expect from 'expect';
import * as actions from '../../actions/songslist';
import * as types from '../../constants/ActionTypes';

describe('songslist actions', () => {

  it('addPrepareTodos should create PREPARE_TODO action', () => {
    expect(actions.addPrepareTodos(100))
    .toEqual({
			type: types.PREPARE_TODO,
      id: 100
    });
  });
});

