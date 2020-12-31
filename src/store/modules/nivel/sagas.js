import { all, put,call, takeLatest } from 'redux-saga/effects';
import * as Nivel from '../../../services/Nivel';
import  * as actionType from './actionTypes';
import * as actions from './actions';
import { setErrorGeneral } from '../error/actions';

function* registerNivelWorker({ nivel }) {
  yield put(actions.setLoadingNivel(true));
  yield put(actions.setStatusNivel(0));
  yield put(actions.setResponseNivel({}));
  yield put(actions.setErrorNivel(''));
  try {
    const response = yield call(Nivel.registerNivel, nivel);
    // console.log('response loadInfoUserhWorker: ',response);
    yield put(actions.setErrorNivel(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseNivel(response));
    yield put(actions.setLoadingNivel(false));
    // yield put(actions.setResponse(response));
    yield put(actions.setStatusNivel(response.status));
    yield put(actions.loadNiveis());
  } catch (error) {
    yield put(actions.setLoadingNivel(false));
    if (error.response) {
        console.log('error response register nivel: ',error.response);
        yield put(actions.setErrorNivel(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setStatusNivel(error.response.status));
    } else if (error.request) {
        console.log('error request register nivel: ',error.request);
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorNivel({ data: error.message }));
        yield put(actions.setStatusNivel(error.request.status));
    } else {
        console.log('error desc  register nivel: ',error.message);
        yield put(actions.setErrorNivel({ data: error.message }));
    }
  }
}

function* loadNiveisWorker() {
  yield put(actions.setLoadingNivel(true));
  yield put(actions.setStatusNivel(0));
  yield put(actions.setResponseNivel({}));
  yield put(actions.setErrorNivel(''));
  try {
    const response = yield call(Nivel.loadNiveis,{});
    yield put(actions.setNiveis(response.data.data));
    yield put(actions.setLoadingNivel(false));
    yield put(actions.setErrorNivel(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseNivel(response));
    yield put(actions.setStatusNivel(response.status));
  } catch (error) {
    yield put(actions.setLoadingNivel(false));
    yield put(actions.setStatusNivel(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setErrorNivel(error.response.data.message));
      yield put(actions.setStatusNivel(error.response.status));
    } else if (error.request) {
      yield put(setErrorGeneral(error.message,true,error.request.status));
      yield put(actions.setErrorNivel({ data: error.message }));
      yield put(actions.setStatusNivel(error.request.status));
    } else {
      yield put(actions.setErrorNivel({ data: error.message }));
    }
  }
}

function* deletarNivelWorker({id}) {
    yield put(actions.setLoadingNivel(true));
    yield put(actions.setStatusNivel(0));
    yield put(actions.setResponseNivel({}));
    yield put(actions.setErrorNivel(''));
    try {
      const response = yield call(Nivel.deleteNivel,id);
      yield put(actions.setLoadingNivel(false));
      yield put(actions.setErrorNivel(''));
      yield put(setErrorGeneral('',false,0));
      yield put(actions.setResponseNivel(response));
      yield put(actions.setStatusNivel(response.status));
      yield put(actions.loadNiveis());
    } catch (error) {
      yield put(actions.setLoadingNivel(false));
      yield put(actions.setStatusNivel(error.status));
      if (error.response) {
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setErrorNivel(error.response.data.message));
        yield put(actions.setStatusNivel(error.response.status));
      } else if (error.request) {
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorNivel({ data: error.message }));
        yield put(actions.setStatusNivel(error.request.status));
      } else {
        yield put(actions.setErrorNivel({ data: error.message }));
      }
    }
}

function* watcherAnalise() {
  yield takeLatest(actionType.CADASTRAR_NIVEL, registerNivelWorker);
  yield takeLatest(actionType.LOAD_NIVEIS, loadNiveisWorker);
  yield takeLatest(actionType.DELETE_NIVEL, deletarNivelWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}
