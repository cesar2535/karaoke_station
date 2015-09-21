import expect from 'expect';
import * as types from '../../constants/ActionTypes';
import api, { CALL_API, Schemas } from '../../middleware/api';

const fakeStore = fakeData => ({
  getState() {
    return fakeData;
  }
});

const dispatchWithStoreOf = (storeData, action) => {
  let dispatched = null;
  const dispatch = api(fakeStore(storeData))(actionAttempt => dispatched = actionAttempt);
  dispatch(action);
  return dispatched;
};