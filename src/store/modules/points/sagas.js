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

function* syncRedeemPointsPendentesWorker() {
  yield put(actions.setLoadingRedeemPoints(true));
  yield put(actions.setStatusRedeemPoints(0));
  yield put(actions.setResponseRedeemPoints({}));
  yield put(actions.setErrorRedeemPoints(''));
  try {
    const response = yield call(Points.syncRedeemPointPendedntesService,{});
    yield put(actions.setLoadingRedeemPoints(false));
    yield put(actions.setErrorRedeemPoints(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseRedeemPoints(response));
    yield put(actions.setStatusRedeemPoints(response.status));
    yield put(actions.loadRedeemPoints({page:1,last:true}));
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

function* acionarRoletaWorker({params}) {
  yield put(actions.setLoadingRedeemPoints(true));
  yield put(actions.setStatusRedeemPoints(0));
  yield put(actions.setResponseRedeemPoints({}));
  yield put(actions.setErrorRedeemPoints(''));
  try {
    const response = yield call(Points.acionarRoletaService,params);
    yield put(actions.setResponseRoletaAction(response.data.data));
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

function* addPointsUserWorker({params}) {
  yield put(actions.setLoadingRedeemPoints(true));
  yield put(actions.setStatusRedeemPoints(0));
  yield put(actions.setResponseRedeemPoints({}));
  yield put(actions.setErrorRedeemPoints(''));
  try {
    const response = yield call(Points.addPointsUserService,params);
    yield put(actions.setResponseRoletaAction(response.data.data));
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

function* watcherAnalise() {
  yield takeLatest(actionType.LOAD_REDEEM_POINTS, loadRedeemPointsWorker);
  yield takeLatest(actionType.RESTORE_POINTS_STREAM_ELEMENTS, restorePointsStreamElementsWorker);
  yield takeLatest(actionType.SYNC_POINTS_REDEEM_PENDENTES, syncRedeemPointsPendentesWorker);
  yield takeLatest(actionType.ACIONAR_ROLETA, acionarRoletaWorker);
  yield takeLatest(actionType.ADD_POINTS_USER, addPointsUserWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}