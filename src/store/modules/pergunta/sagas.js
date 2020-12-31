import { all, put,call, takeLatest } from 'redux-saga/effects';
import * as Pergunta from '../../../services/Pergunta';
import  * as actionType from './actionTypes';
import * as actions from './actions';
import { setErrorGeneral } from '../error/actions';

function* registerPerguntaWorker({ pergunta }) {
  yield put(actions.setLoadingPergunta(true));
  yield put(actions.setStatusPergunta(0));
  yield put(actions.setResponsePergunta({}));
  yield put(actions.setErrorPergunta(''));
  try {
    const response = yield call(Pergunta.registerPergunta, pergunta);
    // console.log('response loadInfoUserhWorker: ',response);
    yield put(actions.setErrorPergunta(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponsePergunta(response));
    yield put(actions.setLoadingPergunta(false));
    // yield put(actions.setResponse(response));
    yield put(actions.setStatusPergunta(response.status));
    yield put(actions.loadPerguntas());
  } catch (error) {
    yield put(actions.setLoadingPergunta(false));
    if (error.response) {
        console.log('error response register pergunta: ',error.response);
        yield put(actions.setErrorPergunta(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setStatusPergunta(error.response.status));
    } else if (error.request) {
        console.log('error request register pergunta: ',error.request);
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorPergunta({ data: error.message }));
        yield put(actions.setStatusPergunta(error.request.status));
    } else {
        console.log('error desc  register pergunta: ',error.message);
        yield put(actions.setErrorPergunta({ data: error.message }));
    }
  }
}

function* atualizarPerguntaWorker({ pergunta }) {
  yield put(actions.setLoadingPergunta(true));
  yield put(actions.setStatusPergunta(0));
  yield put(actions.setResponsePergunta({}));
  yield put(actions.setErrorPergunta(''));
  try {
    const response = yield call(Pergunta.atualizarPergunta, pergunta);
    // console.log('response loadInfoUserhWorker: ',response);
    yield put(actions.setErrorPergunta(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponsePergunta(response));
    yield put(actions.setLoadingPergunta(false));
    // yield put(actions.setResponse(response));
    yield put(actions.setStatusPergunta(response.status));
    yield put(actions.loadPerguntas());
  } catch (error) {
    yield put(actions.setLoadingPergunta(false));
    if (error.response) {
        console.log('error response register pergunta: ',error.response);
        yield put(actions.setErrorPergunta(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setStatusPergunta(error.response.status));
    } else if (error.request) {
        console.log('error request register pergunta: ',error.request);
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorPergunta({ data: error.message }));
        yield put(actions.setStatusPergunta(error.request.status));
    } else {
        console.log('error desc  register pergunta: ',error.message);
        yield put(actions.setErrorPergunta({ data: error.message }));
    }
  }
}

function* loadPerguntasWorker() {
  yield put(actions.setLoadingPergunta(true));
  yield put(actions.setStatusPergunta(0));
  yield put(actions.setResponsePergunta({}));
  yield put(actions.setErrorPergunta(''));
  try {
    const response = yield call(Pergunta.loadPerguntas,{});
    yield put(actions.setPerguntas(response.data.data));
    yield put(actions.setLoadingPergunta(false));
    yield put(actions.setErrorPergunta(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponsePergunta(response));
    yield put(actions.setStatusPergunta(response.status));
  } catch (error) {
    yield put(actions.setLoadingPergunta(false));
    yield put(actions.setStatusPergunta(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setErrorPergunta(error.response.data.message));
      yield put(actions.setStatusPergunta(error.response.status));
    } else if (error.request) {
      yield put(setErrorGeneral(error.message,true,error.request.status));
      yield put(actions.setErrorPergunta({ data: error.message }));
      yield put(actions.setStatusPergunta(error.request.status));
    } else {
      yield put(actions.setErrorPergunta({ data: error.message }));
    }
  }
}

function* deletarPerguntaWorker({id}) {
    yield put(actions.setLoadingPergunta(true));
    yield put(actions.setStatusPergunta(0));
    yield put(actions.setResponsePergunta({}));
    yield put(actions.setErrorPergunta(''));
    try {
      const response = yield call(Pergunta.deletePergunta,id);
      yield put(actions.setLoadingPergunta(false));
      yield put(actions.setErrorPergunta(''));
      yield put(setErrorGeneral('',false,0));
      yield put(actions.setResponsePergunta(response));
      yield put(actions.setStatusPergunta(response.status));
      yield put(actions.loadPerguntas());
    } catch (error) {
      yield put(actions.setLoadingPergunta(false));
      yield put(actions.setStatusPergunta(error.status));
      if (error.response) {
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setErrorPergunta(error.response.data.message));
        yield put(actions.setStatusPergunta(error.response.status));
      } else if (error.request) {
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorPergunta({ data: error.message }));
        yield put(actions.setStatusPergunta(error.request.status));
      } else {
        yield put(actions.setErrorPergunta({ data: error.message }));
      }
    }
}

function* watcherAnalise() {
  yield takeLatest(actionType.CADASTRAR_PERGUNTA, registerPerguntaWorker);
  yield takeLatest(actionType.ATUALIZAR_PERGUNTA, atualizarPerguntaWorker);
  yield takeLatest(actionType.LOAD_PERGUNTAS, loadPerguntasWorker);
  yield takeLatest(actionType.DELETE_PERGUNTA, deletarPerguntaWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}
