import { CALL_API, Schemas } from '../middleware/api';
import { TOGGLE_PLAY_PAUSE_BUTTOM,
			PLAY_REQUEST, PLAY_SUCCESS, PLAY_FAILURE,
			PAUSE_REQUEST, PAUSE_SUCCESS, PAUSE_FAILURE,
      STOP_REQUEST, STOP_SUCCESS, STOP_FAILURE,
      REPLAY_REQUEST, REPLAY_SUCCESS, REPLAY_FAILURE,
      GUIDE_REQUEST, GUIDE_SUCCESS, GUIDE_FAILURE,
      EDIT_MIC_ECHO_REQUEST, EDIT_MIC_ECHO_SUCCESS, EDIT_MIC_ECHO_FAILURE,
      EDIT_MIC_VOLUME_REQUEST, EDIT_MIC_VOLUME_SUCCESS, EDIT_MIC_VOLUME_FAILURE,
      EDIT_MUSIC_VOLUME_REQUEST, EDIT_MUSIC_VOLUME_SUCCESS, EDIT_MUSIC_VOLUME_FAILURE,
      EDIT_KEY_REQUEST, EDIT_KEY_SUCCESS, EDIT_KEY_FAILURE,
      EDIT_EFFECT_REQUEST, EDIT_EFFECT_SUCCESS, EDIT_EFFECT_FAILURE } from '../constants/ActionTypes';

function actionPlay(action) {
  const endpoint = '/player/' + action;
  return {
    [CALL_API]: {
      types: [ PLAY_REQUEST, PLAY_SUCCESS, PLAY_FAILURE ],
      endpoint: endpoint,
      schema: '',
      method: 'POST'
    }
  };
}

export function play(action) {
  return ( dispatch ) => {
    return dispatch(actionPlay(action));
  };
}

function actionPause() {
  return {
    [CALL_API]: {
      types: [ PAUSE_REQUEST, PAUSE_SUCCESS, PAUSE_FAILURE ],
      endpoint: '/player/pause',
      schema: '',
      method: 'POST'
    }
  };
}

export function pause() {
  return ( dispatch ) => {
    return dispatch(actionPause());
  };
}

export function togglePlayPauseButtom(status) {
  return {
		type: TOGGLE_PLAY_PAUSE_BUTTOM,
		status
	};
}

function actionStop() {
  return {
    [CALL_API]: {
      types: [ STOP_REQUEST, STOP_SUCCESS, STOP_FAILURE ],
      endpoint: '/player/stop',
      schema: '',
      method: 'POST'
    }
  };
}

export function stop() {
  return ( dispatch ) => {
    return dispatch(actionStop());
  };
}

function actionRepeat() {
  return {
    [CALL_API]: {
      types: [ REPLAY_REQUEST, REPLAY_SUCCESS, REPLAY_FAILURE ],
      endpoint: '/player/replay',
      schema: '',
      method: 'POST'
    }
  };
}

export function repeat() {
  return ( dispatch ) => {
    return dispatch(actionRepeat());
  };
}

function actionGuide() {
  return {
    [CALL_API]: {
      types: [ GUIDE_REQUEST, GUIDE_SUCCESS, GUIDE_FAILURE ],
      endpoint: '/player/guide',
      schema: '',
      method: 'POST'
    }
  };
}

export function guide() {
  return ( dispatch ) => {
    return dispatch(actionGuide());
  };
}

// function actionMicEcho() {
//   return {
//     [CALL_API]: {
//       types: [ EDIT_MIC_ECHO_REQUEST, EDIT_MIC_ECHO_SUCCESS, EDIT_MIC_ECHO_FAILURE ],
//       endpoint: '/effects/mic/echo',
//       schema: '',
//       method: 'POST'
//     }
//   };
// }

// export function micEcho() {
//   return ( dispatch ) => {
//     return dispatch(actionMicEcho());
//   };
// }

// function actionMicVolume() {
//   return {
//     [CALL_API]: {
//       types: [ EDIT_MIC_VOLUME_REQUEST, EDIT_MIC_VOLUME_SUCCESS, EDIT_MIC_VOLUME_FAILURE ],
//       endpoint: '/effects/mic/volume',
//       schema: '',
//       method: 'POST'
//     }
//   };
// }

// export function michVolume() {
//   return ( dispatch ) => {
//     return dispatch(actionMicVolume());
//   };
// }

// function actionMusicVolume() {
//   return {
//     [CALL_API]: {
//       types: [ EDIT_MUSIC_VOLUME_REQUEST, EDIT_MUSIC_VOLUME_SUCCESS, EDIT_MUSIC_VOLUME_FAILURE ],
//       endpoint: '/player/volume',
//       schema: '',
//       method: 'POST'
//     }
//   };
// }

// export function musicVolume() {
//   return ( dispatch ) => {
//     return dispatch(actionMusicVolume());
//   };
// }

// function actionKey() {
//   return {
//     [CALL_API]: {
//       types: [ EDIT_KEY_REQUEST, EDIT_KEY_SUCCESS, EDIT_KEY_FAILURE ],
//       endpoint: '/effects/pitch',
//       schema: '',
//       method: 'POST'
//     }
//   };
// }

// export function key() {
//   return ( dispatch ) => {
//     return dispatch(actionKey());
//   };
// }

// function actionEffect() {
//   return {
//     [CALL_API]: {
//       types: [ EDIT_EFFECT_REQUEST, EDIT_EFFECT_SUCCESS, EDIT_EFFECT_FAILURE ],
//       endpoint: '/effect',
//       schema: '',
//       method: 'POST'
//     }
//   };
// }

// export function effect() {
//   return ( dispatch ) => {
//     return dispatch(actionEffect());
//   };
// }
