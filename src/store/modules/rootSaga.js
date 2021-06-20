import { all, fork } from 'redux-saga/effects';
import loginSaga from './login/sagas';
import userSaga from './user/sagas';
import nivelSaga from './nivel/sagas';
import perguntaSaga from './pergunta/sagas';
import premiacaoSaga from './premiacao/sagas';
import partidaSaga from './partida/sagas';
import categoriaSaga from './categoria/sagas';
import productsSaga from './products/sagas';
import twitchPubSubSaga from './twitchPubSub/sagas';
import pointsSaga from './points/sagas';
import rewardsSaga from './rewards/sagas';
import channelsSaga from './channel/sagas';


export default function* () {
  yield all([
    fork(loginSaga),
    fork(userSaga),
    fork(nivelSaga),
    fork(perguntaSaga),
    fork(premiacaoSaga),
    fork(partidaSaga),
    fork(categoriaSaga),
    fork(productsSaga),
    fork(twitchPubSubSaga),
    fork(pointsSaga),
    fork(rewardsSaga),
    fork(channelsSaga),
  ]);
}
