import { all, put,call, takeLatest } from 'redux-saga/effects';
import * as Partida from '../../../services/Partida';
import  * as actionType from './actionTypes';
import * as actions from './actions';
import { setErrorGeneral } from '../error/actions';

//Partida
//Partidas
//PARTIDA
//PARTIDAS
//partidas
//partida

function* registerPartidaWorker({ partida }) {
  yield put(actions.setLoadingPartida(true));
  yield put(actions.setStatusPartida(0));
  yield put(actions.setResponsePartida({}));
  yield put(actions.setErrorPartida(''));
  try {
    const response = yield call(Partida.registerPartida, partida);
    // console.log('response loadInfoUserhWorker: ',response);
    yield put(actions.setErrorPartida(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponsePartida(response));
    yield put(actions.setLoadingPartida(false));
    yield put(actions.setPartida(response.data.data));
    // yield put(actions.setResponse(response));
    yield put(actions.setStatusPartida(response.status));
    yield put(actions.loadPartidaAtual());
  } catch (error) {
    yield put(actions.setLoadingPartida(false));
    if (error.response) {
        console.log('error response register partida: ',error.response);
        yield put(actions.setErrorPartida(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setStatusPartida(error.response.status));
    } else if (error.request) {
        console.log('error request register partida: ',error.request);
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorPartida({ data: error.message }));
        yield put(actions.setStatusPartida(error.request.status));
    } else {
        console.log('error desc  register partida: ',error.message);
        yield put(actions.setErrorPartida({ data: error.message }));
    }
  }
}

function* atualizarPartidaWorker({ partida }) {
  yield put(actions.setLoadingPartida(true));
  yield put(actions.setStatusPartida(0));
  yield put(actions.setResponsePartida({}));
  yield put(actions.setErrorPartida(''));
  try {
    const response = yield call(Partida.atualizarPartida, partida);
    // console.log('response loadInfoUserhWorker: ',response);
    yield put(actions.setErrorPartida(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponsePartida(response));
    yield put(actions.setLoadingPartida(false));
    yield put(actions.setPartida(response.data.data));
    // yield put(actions.setResponse(response));
    yield put(actions.setStatusPartida(response.status));
    yield put(actions.loadPartidaAtual());
  } catch (error) {
    yield put(actions.setLoadingPartida(false));
    if (error.response) {
        console.log('error response register partida: ',error.response);
        yield put(actions.setErrorPartida(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setStatusPartida(error.response.status));
    } else if (error.request) {
        console.log('error request register partida: ',error.request);
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorPartida({ data: error.message }));
        yield put(actions.setStatusPartida(error.request.status));
    } else {
        console.log('error desc  register partida: ',error.message);
        yield put(actions.setErrorPartida({ data: error.message }));
    }
  }
}

function* loadPartidasWorker() {
  yield put(actions.setLoadingPartida(true));
  yield put(actions.setStatusPartida(0));
  yield put(actions.setResponsePartida({}));
  yield put(actions.setErrorPartida(''));
  try {
    const response = yield call(Partida.loadPartidas,{});
    yield put(actions.setPartidas(response.data.data));
    yield put(actions.setLoadingPartida(false));
    yield put(actions.setErrorPartida(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponsePartida(response));
    yield put(actions.setStatusPartida(response.status));
  } catch (error) {
    yield put(actions.setLoadingPartida(false));
    yield put(actions.setStatusPartida(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setErrorPartida(error.response.data.message));
      yield put(actions.setStatusPartida(error.response.status));
    } else if (error.request) {
      yield put(setErrorGeneral(error.message,true,error.request.status));
      yield put(actions.setErrorPartida({ data: error.message }));
      yield put(actions.setStatusPartida(error.request.status));
    } else {
      yield put(actions.setErrorPartida({ data: error.message }));
    }
  }
}

function* loadPartidaAtualWorker() {
  yield put(actions.setLoadingPartida(true));
  yield put(actions.setStatusPartida(0));
  yield put(actions.setResponsePartida({}));
  yield put(actions.setErrorPartida(''));
  try {
    const response = yield call(Partida.loadPartidaAtual,{});
    yield put(actions.setPartida(response.data.data));
    yield put(actions.setLoadingPartida(false));
    yield put(actions.setErrorPartida(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponsePartida(response));
    yield put(actions.setStatusPartida(response.status));
  } catch (error) {
    yield put(actions.setLoadingPartida(false));
    yield put(actions.setStatusPartida(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setErrorPartida(error.response.data.message));
      yield put(actions.setStatusPartida(error.response.status));
    } else if (error.request) {
      yield put(setErrorGeneral(error.message,true,error.request.status));
      yield put(actions.setErrorPartida({ data: error.message }));
      yield put(actions.setStatusPartida(error.request.status));
    } else {
      yield put(actions.setErrorPartida({ data: error.message }));
    }
  }
}

function* deletarPartidaWorker({id}) {
    yield put(actions.setLoadingPartida(true));
    yield put(actions.setStatusPartida(0));
    yield put(actions.setResponsePartida({}));
    yield put(actions.setErrorPartida(''));
    try {
      const response = yield call(Partida.deletePartida,id);
      yield put(actions.setLoadingPartida(false));
      yield put(actions.setErrorPartida(''));
      yield put(setErrorGeneral('',false,0));
      yield put(actions.setResponsePartida(response));
      yield put(actions.setStatusPartida(response.status));
      yield put(actions.loadPartidas());
    } catch (error) {
      yield put(actions.setLoadingPartida(false));
      yield put(actions.setStatusPartida(error.status));
      if (error.response) {
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setErrorPartida(error.response.data.message));
        yield put(actions.setStatusPartida(error.response.status));
      } else if (error.request) {
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorPartida({ data: error.message }));
        yield put(actions.setStatusPartida(error.request.status));
      } else {
        yield put(actions.setErrorPartida({ data: error.message }));
      }
    }
}

function* watcherAnalise() {
  yield takeLatest(actionType.CADASTRAR_PARTIDA, registerPartidaWorker);
  yield takeLatest(actionType.ATUALIZAR_PARTIDA, atualizarPartidaWorker);
  yield takeLatest(actionType.LOAD_PARTIDAS, loadPartidasWorker);
  yield takeLatest(actionType.DELETE_PARTIDA, deletarPartidaWorker);
  yield takeLatest(actionType.LOAD_PARTIDA_ATUAL, loadPartidaAtualWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}
