import {Saga} from 'redux-saga';
import {fork} from 'redux-saga/effects';

import newsSagaWatcher from '../sagas/newsSaga';

const rootSaga: Saga = function*() {
  yield fork(newsSagaWatcher);
};

export default rootSaga;
