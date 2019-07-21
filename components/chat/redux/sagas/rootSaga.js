import { call, put, delay, all} from 'redux-saga/effects';
import {getWord} from './getWordSaga';
import {actionWatcher} from './chatScreenSagas';
export default function* rootSaga() {
    yield all([
      getWord(),
        actionWatcher()
    ])
    // code after all-effect
  }