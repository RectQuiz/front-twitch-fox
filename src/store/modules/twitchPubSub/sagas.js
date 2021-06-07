import { all, put,call, takeLatest } from 'redux-saga/effects';
import * as TwitchPubSub from '../../../services/TwitchPubSub';
import  * as actionType from './actionTypes';
import * as actions from './actions';
import * as actionsUser from '../user/actions';
import { setErrorGeneral } from '../error/actions';

function* setStatusPubSubWorker({params}) {
  yield put(actionsUser.setLoading(true));
  yield put(actionsUser.setStatus(0));
  yield put(actionsUser.setResponse({}));
  yield put(actionsUser.setError(''));
  try {
    const response = yield call(TwitchPubSub.setStatusPubSubService,params);
    yield put(actionsUser.setLoading(false));
    yield put(actionsUser.setError(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actionsUser.setResponse(response));
    yield put(actionsUser.setStatus(response.status));
    yield put(actionsUser.loadInfoUser());
  } catch (error) {
    yield put(actionsUser.setLoading(false));
    yield put(actionsUser.setStatus(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actionsUser.setError(error.response.data.message));
      yield put(actionsUser.setStatus(error.response.status));
    } else if (error.request) {
      yield put(setErrorGeneral(error.message,true,error.request.status));
      yield put(actionsUser.setError({ data: error.message }));
      yield put(actionsUser.setStatus(error.request.status));
    } else {
      yield put(actionsUser.setError({ data: error.message }));
    }
  }
}

function* watcherAnalise() {
  yield takeLatest(actionType.SET_STATUS_PUBSUB, setStatusPubSubWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}