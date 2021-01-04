import { all, put,call, takeLatest } from 'redux-saga/effects';
import * as Categoria from '../../../services/Categoria';
import  * as actionType from './actionTypes';
import * as actions from './actions';
import { setErrorGeneral } from '../error/actions';

function* registerCategoriaWorker({ categoria }) {
  yield put(actions.setLoadingCategoria(true));
  yield put(actions.setStatusCategoria(0));
  yield put(actions.setResponseCategoria({}));
  yield put(actions.setErrorCategoria(''));
  try {
    const response = yield call(Categoria.registerCategoria, categoria);
    // console.log('response loadInfoUserhWorker: ',response);
    yield put(actions.setErrorCategoria(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseCategoria(response));
    yield put(actions.setLoadingCategoria(false));
    // yield put(actions.setResponse(response));
    yield put(actions.setStatusCategoria(response.status));
    yield put(actions.loadCategorias());
  } catch (error) {
    yield put(actions.setLoadingCategoria(false));
    if (error.response) {
        console.log('error response register Categoria: ',error.response);
        yield put(actions.setErrorCategoria(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setStatusCategoria(error.response.status));
    } else if (error.request) {
        console.log('error request register Categoria: ',error.request);
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorCategoria({ data: error.message }));
        yield put(actions.setStatusCategoria(error.request.status));
    } else {
        console.log('error desc  register Categoria: ',error.message);
        yield put(actions.setErrorCategoria({ data: error.message }));
    }
  }
}

function* loadCategoriasWorker() {
  yield put(actions.setLoadingCategoria(true));
  yield put(actions.setStatusCategoria(0));
  yield put(actions.setResponseCategoria({}));
  yield put(actions.setErrorCategoria(''));
  try {
    const response = yield call(Categoria.loadCategorias,{});
    yield put(actions.setCategorias(response.data.data));
    yield put(actions.setLoadingCategoria(false));
    yield put(actions.setErrorCategoria(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseCategoria(response));
    yield put(actions.setStatusCategoria(response.status));
  } catch (error) {
    yield put(actions.setLoadingCategoria(false));
    yield put(actions.setStatusCategoria(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setErrorCategoria(error.response.data.message));
      yield put(actions.setStatusCategoria(error.response.status));
    } else if (error.request) {
      yield put(setErrorGeneral(error.message,true,error.request.status));
      yield put(actions.setErrorCategoria({ data: error.message }));
      yield put(actions.setStatusCategoria(error.request.status));
    } else {
      yield put(actions.setErrorCategoria({ data: error.message }));
    }
  }
}

function* deletarCategoriaWorker({id}) {
    yield put(actions.setLoadingCategoria(true));
    yield put(actions.setStatusCategoria(0));
    yield put(actions.setResponseCategoria({}));
    yield put(actions.setErrorCategoria(''));
    try {
      const response = yield call(Categoria.deleteCategoria,id);
      yield put(actions.setLoadingCategoria(false));
      yield put(actions.setErrorCategoria(''));
      yield put(setErrorGeneral('',false,0));
      yield put(actions.setResponseCategoria(response));
      yield put(actions.setStatusCategoria(response.status));
      yield put(actions.loadCategorias());
    } catch (error) {
      yield put(actions.setLoadingCategoria(false));
      yield put(actions.setStatusCategoria(error.status));
      if (error.response) {
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setErrorCategoria(error.response.data.message));
        yield put(actions.setStatusCategoria(error.response.status));
      } else if (error.request) {
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorCategoria({ data: error.message }));
        yield put(actions.setStatusCategoria(error.request.status));
      } else {
        yield put(actions.setErrorCategoria({ data: error.message }));
      }
    }
}

function* watcherAnalise() {
  yield takeLatest(actionType.CADASTRAR_CATEGORIA, registerCategoriaWorker);
  yield takeLatest(actionType.LOAD_CATEGORIAS, loadCategoriasWorker);
  yield takeLatest(actionType.DELETE_CATEGORIA, deletarCategoriaWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}
