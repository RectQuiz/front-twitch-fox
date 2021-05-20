import { all, put,call, takeLatest } from 'redux-saga/effects';
import * as Products from '../../../services/Products';
import  * as actionType from './actionTypes';
import * as actions from './actions';
import { setErrorGeneral } from '../error/actions';

function* loadProductsWorker({params}) {
  yield put(actions.setLoadingProducts(true));
  yield put(actions.setStatusProducts(0));
  yield put(actions.setResponseProducts({}));
  yield put(actions.setErrorProducts(''));
  try {
    const response = yield call(Products.loadProducts,params);
    yield put(actions.setProducts(response.data));
    yield put(actions.setLoadingProducts(false));
    yield put(actions.setErrorProducts(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseProducts(response));
    yield put(actions.setStatusProducts(response.status));
  } catch (error) {
    yield put(actions.setLoadingProducts(false));
    yield put(actions.setStatusProducts(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setErrorProducts(error.response.data.message));
      yield put(actions.setStatusProducts(error.response.status));
    } else if (error.request) {
      yield put(setErrorGeneral(error.message,true,error.request.status));
      yield put(actions.setErrorProducts({ data: error.message }));
      yield put(actions.setStatusProducts(error.request.status));
    } else {
      yield put(actions.setErrorProducts({ data: error.message }));
    }
  }
}

function* watcherAnalise() {
  yield takeLatest(actionType.LOAD_PRODUCTS, loadProductsWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}
