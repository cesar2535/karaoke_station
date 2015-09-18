import expect from 'expect';
import * as actions from '../../actions/PlayerActionCreators';
import * as types from '../../constants/ActionTypes';
import { CALL_API, Schemas } from '../../middleware/api';

const fakeStore = fakeData => ({
  getState() {
    return fakeData;
  }
});

describe('PlayerActionCreators actions', () => {
  it('togglePlayPauseButtom should create TOGGLE_PLAY_PAUSE_BUTTOM action', () => {
    expect(actions.togglePlayPauseButtom('pause'))
    .toEqual({
	type: types.TOGGLE_PLAY_PAUSE_BUTTOM,
      status: 'pause'
    });

    expect(actions.togglePlayPauseButtom('play'))
    .toEqual({
	type: types.TOGGLE_PLAY_PAUSE_BUTTOM,
      status: 'play'
    });
  });

  it('play(\'play\') should create [ types.PLAY_REQUEST, types.PLAY_SUCCESS, types.PLAY_FAILURE ] action with endpoint /player/play', () => {
    expect(
	actions.play('play')(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.PLAY_REQUEST, types.PLAY_SUCCESS, types.PLAY_FAILURE ],
      endpoint: '/player/play',
      schema: '',
      method: 'POST'
    });
  });

  it('play(\'pause\') should create [ types.PLAY_REQUEST, types.PLAY_SUCCESS, types.PLAY_FAILURE ] action with endpoint /player/pause', () => {
    expect(
	actions.play('pause')(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.PLAY_REQUEST, types.PLAY_SUCCESS, types.PLAY_FAILURE ],
      endpoint: '/player/pause',
      schema: '',
      method: 'POST'
    });
  });

  it('play(\'resume\') should create [ types.PLAY_REQUEST, types.PLAY_SUCCESS, types.PLAY_FAILURE ] action with endpoint /player/resume', () => {
    expect(
	actions.play('resume')(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.PLAY_REQUEST, types.PLAY_SUCCESS, types.PLAY_FAILURE ],
      endpoint: '/player/resume',
      schema: '',
      method: 'POST'
    });
  });

  it('pause should create [ types.PAUSE_REQUEST, types.PAUSE_SUCCESS, types.PAUSE_FAILURE ] action', () => {
    expect(
	actions.pause()(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.PAUSE_REQUEST, types.PAUSE_SUCCESS, types.PAUSE_FAILURE ],
      endpoint: '/player/pause',
      schema: '',
      method: 'POST'
    });
  });

  it('stop should create [ types.STOP_REQUEST, types.STOP_SUCCESS, types.STOP_FAILURE ] action', () => {
    expect(
	actions.stop()(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.STOP_REQUEST, types.STOP_SUCCESS, types.STOP_FAILURE ],
      endpoint: '/player/stop',
      schema: '',
      method: 'POST'
    });
  });

  it('repeat should create [ types.REPLAY_REQUEST, types.REPLAY_SUCCESS, types.REPLAY_FAILURE ] action', () => {
    expect(
    	actions.repeat()(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.REPLAY_REQUEST, types.REPLAY_SUCCESS, types.REPLAY_FAILURE ],
      endpoint: '/player/replay',
      schema: '',
      method: 'POST'
    });
  });

  it('next should create [ types.NEXT_REQUEST, types.NEXT_SUCCESS, types.NEXT_FAILURE ] action', () => {
    expect(
	actions.next()(action => action, fakeStore({}))[CALL_API]
    ).toEqual({
      types: [ types.NEXT_REQUEST, types.NEXT_SUCCESS, types.NEXT_FAILURE ],
      endpoint: '/player/next',
      schema: '',
      method: 'POST'
    });
  });
});
