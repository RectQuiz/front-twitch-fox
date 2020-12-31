import { all, fork } from 'redux-saga/effects';
import loginSaga from './login/sagas';
import userSaga from './user/sagas';
import nivelSaga from './nivel/sagas';
import perguntaSaga from './pergunta/sagas';
import premiacaoSaga from './premiacao/sagas';
import partidaSaga from './partida/sagas';


export default function* () {
  yield all([
    fork(loginSaga),
    fork(userSaga),
    fork(nivelSaga),
    fork(perguntaSaga),
    fork(premiacaoSaga),
    fork(partidaSaga),
  ]);
}
