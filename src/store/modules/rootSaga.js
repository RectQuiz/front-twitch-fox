import { all, fork } from 'redux-saga/effects';
import loginSaga from './login/sagas';
import userSaga from './user/sagas';


export default function* () {
  yield all([
    fork(loginSaga),
    fork(userSaga),
  ]);
}
