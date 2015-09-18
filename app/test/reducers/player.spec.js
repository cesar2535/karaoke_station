import expect from 'expect';
import togglePlayPauseButtom from '../../reducers/player';
import * as types from '../../constants/ActionTypes';

describe('togglePlayPauseButtom reducer', () => {

  it('should handle initial state', () => {
    expect(
      togglePlayPauseButtom(undefined, {})
    ).toEqual({
      status: 'stop'
    });
  });

  it('should handle TOGGLE_PLAY_PAUSE_BUTTOM', () => {
    expect(
      togglePlayPauseButtom({
        status: 'stop'
      }, {
        type: types.TOGGLE_PLAY_PAUSE_BUTTOM,
        status: 'play'
      })
    ).toEqual({
      status: 'play'
    });

    expect(
      togglePlayPauseButtom({
        status: 'play'
      }, {
        type: types.TOGGLE_PLAY_PAUSE_BUTTOM,
        status: 'stop'
      })
    ).toEqual({
      status: 'stop'
    });

    expect(
      togglePlayPauseButtom({
        status: 'play'
      }, {
        type: types.TOGGLE_PLAY_PAUSE_BUTTOM,
        status: 'pause'
      })
    ).toEqual({
      status: 'pause'
    });
  });
});
