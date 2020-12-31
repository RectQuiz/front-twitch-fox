import { all, put,call, takeLatest } from 'redux-saga/effects';
import * as Premiacao from '../../../services/Premiacao';
import  * as actionType from './actionTypes';
import * as actions from './actions';
import { setErrorGeneral } from '../error/actions';

function* registerPremiacaoWorker({ premiacao }) {
  yield put(actions.setLoadingPremiacao(true));
  yield put(actions.setStatusPremiacao(0));
  yield put(actions.setResponsePremiacao({}));
  yield put(actions.setErrorPremiacao(''));
  try {
    const response = yield call(Premiacao.registerPremiacao, premiacao);
    // console.log('response loadInfoUserhWorker: ',response);
    yield put(actions.setErrorPremiacao(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponsePremiacao(response));
    yield put(actions.setLoadingPremiacao(false));
    // yield put(actions.setResponse(response));
    yield put(actions.setStatusPremiacao(response.status));
    yield put(actions.loadPremiacoes());
  } catch (error) {
    yield put(actions.setLoadingPremiacao(false));
    if (error.response) {
        console.log('error response register premiacao: ',error.response);
        yield put(actions.setErrorPremiacao(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setStatusPremiacao(error.response.status));
    } else if (error.request) {
        console.log('error request register premiacao: ',error.request);
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorPremiacao({ data: error.message }));
        yield put(actions.setStatusPremiacao(error.request.status));
    } else {
        console.log('error desc  register premiacao: ',error.message);
        yield put(actions.setErrorPremiacao({ data: error.message }));
    }
  }
}

function* loadPremiacoesWorker() {
  yield put(actions.setLoadingPremiacao(true));
  yield put(actions.setStatusPremiacao(0));
  yield put(actions.setResponsePremiacao({}));
  yield put(actions.setErrorPremiacao(''));
  try {
    const response = yield call(Premiacao.loadPremiacoes,{});
    yield put(actions.setPremiacoes(response.data.data));
    yield put(actions.setLoadingPremiacao(false));
    yield put(actions.setErrorPremiacao(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponsePremiacao(response));
    yield put(actions.setStatusPremiacao(response.status));
  } catch (error) {
    yield put(actions.setLoadingPremiacao(false));
    yield put(actions.setStatusPremiacao(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setErrorPremiacao(error.response.data.message));
      yield put(actions.setStatusPremiacao(error.response.status));
    } else if (error.request) {
      yield put(setErrorGeneral(error.message,true,error.request.status));
      yield put(actions.setErrorPremiacao({ data: error.message }));
      yield put(actions.setStatusPremiacao(error.request.status));
    } else {
      yield put(actions.setErrorPremiacao({ data: error.message }));
    }
  }
}

function* deletarPremiacaoWorker({id}) {
    yield put(actions.setLoadingPremiacao(true));
    yield put(actions.setStatusPremiacao(0));
    yield put(actions.setResponsePremiacao({}));
    yield put(actions.setErrorPremiacao(''));
    try {
      const response = yield call(Premiacao.deletePremiacao,id);
      yield put(actions.setLoadingPremiacao(false));
      yield put(actions.setErrorPremiacao(''));
      yield put(setErrorGeneral('',false,0));
      yield put(actions.setResponsePremiacao(response));
      yield put(actions.setStatusPremiacao(response.status));
      yield put(actions.loadPremiacoes());
    } catch (error) {
      yield put(actions.setLoadingPremiacao(false));
      yield put(actions.setStatusPremiacao(error.status));
      if (error.response) {
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setErrorPremiacao(error.response.data.message));
        yield put(actions.setStatusPremiacao(error.response.status));
      } else if (error.request) {
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorPremiacao({ data: error.message }));
        yield put(actions.setStatusPremiacao(error.request.status));
      } else {
        yield put(actions.setErrorPremiacao({ data: error.message }));
      }
    }
}

function* watcherAnalise() {
  yield takeLatest(actionType.CADASTRAR_PREMIACAO, registerPremiacaoWorker);
  yield takeLatest(actionType.LOAD_PREMIACOES, loadPremiacoesWorker);
  yield takeLatest(actionType.DELETE_PREMIACAO, deletarPremiacaoWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}
