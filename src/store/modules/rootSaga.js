import { all, fork } from 'redux-saga/effects';
import loginSaga from './login/sagas';


export default function* () {
  yield all([
    fork(loginSaga)
  ]);
}
