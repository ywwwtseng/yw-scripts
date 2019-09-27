import { put, takeEvery, all } from 'redux-saga/effects';
import { GET_DATA, DATA_RECEIVED } from '../actions';

function* getData(action) {
  // const data = yield call(Api.fetchUser, action.payload.dataId);
  const data = [1, 2, 3];

  yield put({ 
    type: DATA_RECEIVED, 
    payload: { 
      dataId: action.payload.dataId, 
      data,
    } 
  });
}

function* actionWatcher() {
  yield takeEvery(GET_DATA, getData);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}