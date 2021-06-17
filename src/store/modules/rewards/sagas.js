import { all, put,call, takeLatest } from 'redux-saga/effects';
import * as Rewards from '../../../services/Rewards';
import  * as actionType from './actionTypes';
import * as actions from './actions';
import { setErrorGeneral } from '../error/actions';

function* loadRewardsWorker({params}) {
  yield put(actions.setLoadingRewards(true));
  yield put(actions.setStatusRewards(0));
  yield put(actions.setResponseRewards({}));
  yield put(actions.setErrorRewards(''));
  try {
    const response = yield call(Rewards.loadRewardsService,params);
    yield put(actions.setRewards(response.data));
    yield put(actions.setLoadingRewards(false));
    yield put(actions.setErrorRewards(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseRewards(response));
    yield put(actions.setStatusRewards(response.status));
  } catch (error) {
    yield put(actions.setLoadingRewards(false));
    yield put(actions.setStatusRewards(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setErrorRewards(error.response.data.message));
      yield put(actions.setStatusRewards(error.response.status));
    } else if (error.request) {
      yield put(setErrorGeneral(error.message,true,error.request.status));
      yield put(actions.setErrorRewards({ data: error.message }));
      yield put(actions.setStatusRewards(error.request.status));
    } else {
      yield put(actions.setErrorRewards({ data: error.message }));
    }
  }
}

function* createRewardWorker() {
  yield put(actions.setLoadingRewards(true));
  yield put(actions.setStatusRewards(0));
  yield put(actions.setResponseRewards({}));
  yield put(actions.setErrorRewards(''));
  try {
    const response = yield call(Rewards.createRewardService,{});
    yield put(actions.setLoadingRewards(false));
    yield put(actions.setErrorRewards(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseRewards(response));
    yield put(actions.setStatusRewards(response.status));
    yield put(actions.loadRewards());
  } catch (error) {
    yield put(actions.setLoadingRewards(false));
    yield put(actions.setStatusRewards(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setErrorRewards(error.response.data.message));
      yield put(actions.setStatusRewards(error.response.status));
    } else if (error.request) {
      yield put(setErrorGeneral(error.message,true,error.request.status));
      yield put(actions.setErrorRewards({ data: error.message }));
      yield put(actions.setStatusRewards(error.request.status));
    } else {
      yield put(actions.setErrorRewards({ data: error.message }));
    }
  }
}

function* watcherAnalise() {
  yield takeLatest(actionType.LOAD_REWARDS, loadRewardsWorker);
  yield takeLatest(actionType.CREATE_REWARD, createRewardWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}