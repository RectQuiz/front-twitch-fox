import { all, put,call, takeLatest } from 'redux-saga/effects';
import * as Points from '../../../services/Points';
import  * as actionType from './actionTypes';
import * as actions from './actions';
import { setErrorGeneral } from '../error/actions';
import * as actionsUser from './../user/actions';

function* loadRedeemPointsWorker({params}) {
  yield put(actions.setLoadingRedeemPoints(true));
  yield put(actions.setStatusRedeemPoints(0));
  yield put(actions.setResponseRedeemPoints({}));
  yield put(actions.setErrorRedeemPoints(''));
  try {
    const response = yield call(Points.loadredeemPoints,params);
    yield put(actions.setRedeemPoints(response.data));
    yield put(actions.setLoadingRedeemPoints(false));
    yield put(actions.setErrorRedeemPoints(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseRedeemPoints(response));
    yield put(actions.setStatusRedeemPoints(response.status));
  } catch (error) {
    yield put(actions.setLoadingRedeemPoints(false));
    yield put(actions.setStatusRedeemPoints(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setErrorRedeemPoints(error.response.data.message));
      yield put(actions.setStatusRedeemPoints(error.response.status));
    } else if (error.request) {
      yield put(setErrorGeneral(error.message,true,error.request.status));
      yield put(actions.setErrorRedeemPoints({ data: error.message }));
      yield put(actions.setStatusRedeemPoints(error.request.status));
    } else {
      yield put(actions.setErrorRedeemPoints({ data: error.message }));
    }
  }
}

function* restorePointsStreamElementsWorker() {
  yield put(actions.setLoadingRedeemPoints(true));
  yield put(actions.setStatusRedeemPoints(0));
  yield put(actions.setResponseRedeemPoints({}));
  yield put(actions.setErrorRedeemPoints(''));
  try {
    const response = yield call(Points.restorePointsStreamElementsService,{});
    yield put(actions.setRedeemPoints(response.data));
    yield put(actions.setLoadingRedeemPoints(false));
    yield put(actions.setErrorRedeemPoints(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseRedeemPoints(response));
    yield put(actions.setStatusRedeemPoints(response.status));
    yield put(actionsUser.loadInfoUser());
  } catch (error) {
    yield put(actions.setLoadingRedeemPoints(false));
    yield put(actions.setStatusRedeemPoints(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setErrorRedeemPoints(error.response.data.message));
      yield put(actions.setStatusRedeemPoints(error.response.status));
    } else if (error.request) {
      yield put(setErrorGeneral(error.message,true,error.request.status));
      yield put(actions.setErrorRedeemPoints({ data: error.message }));
      yield put(actions.setStatusRedeemPoints(error.request.status));
    } else {
      yield put(actions.setErrorRedeemPoints({ data: error.message }));
    }
  }
}

function* watcherAnalise() {
  yield takeLatest(actionType.LOAD_REDEEM_POINTS, loadRedeemPointsWorker);
  yield takeLatest(actionType.RESTORE_POINTS_STREAM_ELEMENTS, restorePointsStreamElementsWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}