import { all, put,call, takeLatest } from 'redux-saga/effects';
import * as Channels from '../../../services/Channels';
import  * as actionType from './actionTypes';
import * as actions from './actions';
import { setErrorGeneral } from '../error/actions';

function* loadChannelsWorker({params}) {
  yield put(actions.setLoadingChannelsAction(true));
  yield put(actions.setStatusChannelsAction(0));
  yield put(actions.setResponseChannelsAction({}));
  yield put(actions.setErrorChannelsAction(''));
  try {
    const response = yield call(Channels.loadChannelsService,params);
    yield put(actions.setChannelsAction(response.data.data));
    yield put(actions.setLoadingChannelsAction(false));
    yield put(actions.setErrorChannelsAction(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseChannelsAction(response));
    yield put(actions.setStatusChannelsAction(response.status));
  } catch (error) {
    yield put(actions.setLoadingChannelsAction(false));
    yield put(actions.setStatusChannelsAction(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setErrorChannelsAction(error.response.data.message));
      yield put(actions.setStatusChannelsAction(error.response.status));
    } else if (error.request) {
      yield put(setErrorGeneral(error.message,true,error.request.status));
      yield put(actions.setErrorChannelsAction({ data: error.message }));
      yield put(actions.setStatusChannelsAction(error.request.status));
    } else {
      yield put(actions.setErrorChannelsAction({ data: error.message }));
    }
  }
}

function* watcherAnalise() {
  yield takeLatest(actionType.LOAD_CHANNELS, loadChannelsWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}