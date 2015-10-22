import { CALL_API, Schemas } from '../middleware/api';
import {
      PLAY_PAUSE_REQUEST, PLAY_PAUSE_SUCCESS, PLAY_PAUSE_FAILURE,
      REPLAY_REQUEST, REPLAY_SUCCESS, REPLAY_FAILURE,
      GUIDE_REQUEST, GUIDE_SUCCESS, GUIDE_FAILURE,
      NEXT_REQUEST, NEXT_SUCCESS, NEXT_FAILURE,
      /* EDIT_MIC_ECHO_REQUEST, EDIT_MIC_ECHO_SUCCESS, EDIT_MIC_ECHO_FAILURE, */
      EDIT_MIC_VOLUME_REQUEST, EDIT_MIC_VOLUME_SUCCESS, EDIT_MIC_VOLUME_FAILURE,
      EDIT_MUSIC_VOLUME_REQUEST, EDIT_MUSIC_VOLUME_SUCCESS, EDIT_MUSIC_VOLUME_FAILURE,
      EDIT_PITCH_REQUEST, EDIT_PITCH_SUCCESS, EDIT_PITCH_FAILURE
      /*EDIT_EFFECT_REQUEST, EDIT_EFFECT_SUCCESS, EDIT_EFFECT_FAILURE*/ } from '../constants/ActionTypes';

function actionPlayPause() {
  return {
    [CALL_API]: {
      types: [ PLAY_PAUSE_REQUEST, PLAY_PAUSE_SUCCESS, PLAY_PAUSE_FAILURE ],
      endpoint: '/player/playpause',
      schema: '',
      method: 'POST'
    }
  };
}

export function playpause(event) {
  event.stopPropagation();
  return ( dispatch ) => {
    return dispatch(actionPlayPause());
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

export function repeat(event) {
  event.stopPropagation();
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

export function guide(event) {
  event.stopPropagation();
  return ( dispatch ) => {
    return dispatch(actionGuide());
  };
}

function actionNext() {
  return {
    [CALL_API]: {
      types: [ NEXT_REQUEST, NEXT_SUCCESS, NEXT_FAILURE ],
      endpoint: '/player/next',
      schema: '',
      method: 'POST'
    }
  };
}

export function next(event) {
  event.stopPropagation();
  return ( dispatch ) => {
    return dispatch(actionNext());
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

function actionMicVolumeUp() {
  return {
    [CALL_API]: {
      types: [ EDIT_MIC_VOLUME_REQUEST, EDIT_MIC_VOLUME_SUCCESS, EDIT_MIC_VOLUME_FAILURE ],
      endpoint: '/effects/mic/volume/up',
      schema: '',
      method: 'POST'
    }
  };
}

export function micVolumeUp(event) {
  event.stopPropagation();
  return ( dispatch ) => {
    return dispatch(actionMicVolumeUp());
  };
}

function actionMicVolumeDown() {
  return {
    [CALL_API]: {
      types: [ EDIT_MIC_VOLUME_REQUEST, EDIT_MIC_VOLUME_SUCCESS, EDIT_MIC_VOLUME_FAILURE ],
      endpoint: '/effects/mic/volume/down',
      schema: '',
      method: 'POST'
    }
  };
}

export function micVolumeDown(event) {
  event.stopPropagation();
  return ( dispatch ) => {
    return dispatch(actionMicVolumeDown());
  };
}

function actionMusicVolumeUp() {
  return {
    [CALL_API]: {
      types: [ EDIT_MUSIC_VOLUME_REQUEST, EDIT_MUSIC_VOLUME_SUCCESS, EDIT_MUSIC_VOLUME_FAILURE ],
      endpoint: '/player/volume/up',
      schema: '',
      method: 'POST'
    }
  };
}

export function musicVolumeUp(event) {
  event.stopPropagation();
  return ( dispatch ) => {
    return dispatch(actionMusicVolumeUp());
  };
}

function actionMusicVolumeDown() {
  return {
    [CALL_API]: {
      types: [ EDIT_MUSIC_VOLUME_REQUEST, EDIT_MUSIC_VOLUME_SUCCESS, EDIT_MUSIC_VOLUME_FAILURE ],
      endpoint: '/player/volume/down',
      schema: '',
      method: 'POST'
    }
  };
}

export function musicVolumeDown(event) {
  event.stopPropagation();
  return ( dispatch ) => {
    return dispatch(actionMusicVolumeDown());
  };
}

function actionPitchUp() {
  return {
    [CALL_API]: {
      types: [ EDIT_PITCH_REQUEST, EDIT_PITCH_SUCCESS, EDIT_PITCH_FAILURE ],
      endpoint: '/effects/pitch/up',
      schema: '',
      method: 'POST'
    }
  };
}

export function pitchUp(event) {
  event.stopPropagation();
  return ( dispatch ) => {
    return dispatch(actionPitchUp());
  };
}

function actionPitchDown() {
  return {
    [CALL_API]: {
      types: [ EDIT_PITCH_REQUEST, EDIT_PITCH_SUCCESS, EDIT_PITCH_FAILURE ],
      endpoint: '/effects/pitch/down',
      schema: '',
      method: 'POST'
    }
  };
}

export function pitchDown(event) {
  event.stopPropagation();
  return ( dispatch ) => {
    return dispatch(actionPitchDown());
  };
}

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
