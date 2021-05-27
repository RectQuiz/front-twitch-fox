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

function* loadProductWorker({id}) {
  yield put(actions.setLoadingProducts(true));
  yield put(actions.setStatusProducts(0));
  yield put(actions.setResponseProducts({}));
  yield put(actions.setErrorProducts(''));
  try {
    const response = yield call(Products.loadProduct,id);
    yield put(actions.setProduct(response.data.data));
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

function* registerProductWorker({ product }) {
  yield put(actions.setLoadingProducts(true));
  yield put(actions.setStatusProducts(0));
  yield put(actions.setErrorProducts({}));
  yield put(actions.setResponseProducts(''));
  try {
    const response = yield call(Products.registerProduct, product);
    // console.log('response loadInfoUserhWorker: ',response);
    yield put(actions.setErrorProducts(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseProducts(response));
    yield put(actions.setLoadingProducts(false));
    // yield put(actions.setResponse(response));
    yield put(actions.setStatusProducts(response.status));
    // yield put(actions.loadProducts({}));
  } catch (error) {
    yield put(actions.setLoadingProducts(false));
    if (error.response) {
        console.log('error response register product: ',error.response);
        yield put(actions.setErrorProducts(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setStatusProducts(error.response.status));
    } else if (error.request) {
        console.log('error request register product: ',error.request);
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorProducts({ data: error.message }));
        yield put(actions.setStatusProducts(error.request.status));
    } else {
        console.log('error desc  register product: ',error.message);
        yield put(actions.setErrorProducts({ data: error.message }));
    }
  }
}

function* editProductWorker({ params }) {
  yield put(actions.setLoadingProducts(true));
  yield put(actions.setStatusProducts(0));
  yield put(actions.setErrorProducts({}));
  yield put(actions.setResponseProducts(''));
  try {
    const response = yield call(Products.editProduct, params);
    // console.log('response loadInfoUserhWorker: ',response);
    yield put(actions.setErrorProducts(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseProducts(response));
    yield put(actions.setLoadingProducts(false));
    // yield put(actions.setResponse(response));
    yield put(actions.setStatusProducts(response.status));
    // yield put(actions.loadProducts({}));
  } catch (error) {
    yield put(actions.setLoadingProducts(false));
    if (error.response) {
        console.log('error response register product: ',error.response);
        yield put(actions.setErrorProducts(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setStatusProducts(error.response.status));
    } else if (error.request) {
        console.log('error request register product: ',error.request);
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorProducts({ data: error.message }));
        yield put(actions.setStatusProducts(error.request.status));
    } else {
        console.log('error desc  register product: ',error.message);
        yield put(actions.setErrorProducts({ data: error.message }));
    }
  }
}

function* changeStatusProductWorker({ params }) {
  yield put(actions.setLoadingProducts(true));
  yield put(actions.setStatusProducts(0));
  yield put(actions.setErrorProducts({}));
  yield put(actions.setResponseProducts(''));
  try {
    const response = yield call(Products.changeStatusProductService, params);
    // console.log('response loadInfoUserhWorker: ',response);
    yield put(actions.setErrorProducts(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseProducts(response));
    yield put(actions.setLoadingProducts(false));
    // yield put(actions.setResponse(response));
    yield put(actions.setStatusProducts(response.status));
    // yield put(actions.loadProducts({}));
  } catch (error) {
    yield put(actions.setLoadingProducts(false));
    if (error.response) {
        console.log('error response register product: ',error.response);
        yield put(actions.setErrorProducts(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setStatusProducts(error.response.status));
    } else if (error.request) {
        console.log('error request register product: ',error.request);
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorProducts({ data: error.message }));
        yield put(actions.setStatusProducts(error.request.status));
    } else {
        console.log('error desc  register product: ',error.message);
        yield put(actions.setErrorProducts({ data: error.message }));
    }
  }
}

function* cadProductsSteamWorker() {
  yield put(actions.setLoadingProducts(true));
  yield put(actions.setStatusProducts(0));
  yield put(actions.setErrorProducts({}));
  yield put(actions.setResponseProducts(''));
  try {
    const response = yield call(Products.cadProductSteamService);
    // console.log('response loadInfoUserhWorker: ',response);
    yield put(actions.setErrorProducts(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseProducts(response));
    yield put(actions.setLoadingProducts(false));
    // yield put(actions.setResponse(response));
    yield put(actions.setStatusProducts(response.status));
    yield put(actions.loadProducts({page:1,last:true}));
  } catch (error) {
    yield put(actions.setLoadingProducts(false));
    if (error.response) {
        console.log('error response register product: ',error.response);
        yield put(actions.setErrorProducts(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setStatusProducts(error.response.status));
    } else if (error.request) {
        console.log('error request register product: ',error.request);
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorProducts({ data: error.message }));
        yield put(actions.setStatusProducts(error.request.status));
    } else {
        console.log('error desc  register product: ',error.message);
        yield put(actions.setErrorProducts({ data: error.message }));
    }
  }
}

function* deleteStickerProductSteamWorker({info}) {
  yield put(actions.setLoadingProducts(true));
  yield put(actions.setStatusProducts(0));
  yield put(actions.setErrorProducts({}));
  yield put(actions.setResponseProducts(''));
  try {
    const response = yield call(Products.deleteStickerProductService,info);
    // console.log('response loadInfoUserhWorker: ',response);
    yield put(actions.setErrorProducts(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseProducts(response));
    yield put(actions.setLoadingProducts(false));
    // yield put(actions.setResponse(response));
    yield put(actions.setStatusProducts(response.status));
    yield put(actions.loadProduct(info.product_id));
  } catch (error) {
    yield put(actions.setLoadingProducts(false));
    if (error.response) {
        console.log('error response register product: ',error.response);
        yield put(actions.setErrorProducts(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setStatusProducts(error.response.status));
    } else if (error.request) {
        console.log('error request register product: ',error.request);
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorProducts({ data: error.message }));
        yield put(actions.setStatusProducts(error.request.status));
    } else {
        console.log('error desc  register product: ',error.message);
        yield put(actions.setErrorProducts({ data: error.message }));
    }
  }
}

function* deleteProductWorker({id}) {
  yield put(actions.setLoadingProducts(true));
  yield put(actions.setStatusProducts(0));
  yield put(actions.setErrorProducts({}));
  yield put(actions.setResponseProducts(''));
  try {
    const response = yield call(Products.deleteProductService,id);
    // console.log('response loadInfoUserhWorker: ',response);
    yield put(actions.setErrorProducts(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponseProducts(response));
    yield put(actions.setLoadingProducts(false));
    // yield put(actions.setResponse(response));
    yield put(actions.setStatusProducts(response.status));
    yield put(actions.loadProducts({page:1,last:true}));
  } catch (error) {
    yield put(actions.setLoadingProducts(false));
    if (error.response) {
        console.log('error response register product: ',error.response);
        yield put(actions.setErrorProducts(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setStatusProducts(error.response.status));
    } else if (error.request) {
        console.log('error request register product: ',error.request);
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setErrorProducts({ data: error.message }));
        yield put(actions.setStatusProducts(error.request.status));
    } else {
        console.log('error desc  register product: ',error.message);
        yield put(actions.setErrorProducts({ data: error.message }));
    }
  }
}

function* watcherAnalise() {
  yield takeLatest(actionType.LOAD_PRODUCTS, loadProductsWorker);
  yield takeLatest(actionType.REGISTER_PRODUCT, registerProductWorker);
  yield takeLatest(actionType.LOAD_PRODUCT, loadProductWorker);
  yield takeLatest(actionType.EDIT_PRODUCT, editProductWorker);
  yield takeLatest(actionType.CAD_PRODUCTS_STEAM, cadProductsSteamWorker);
  yield takeLatest(actionType.DELETE_STICKER_PRODUCT, deleteStickerProductSteamWorker);
  yield takeLatest(actionType.CHANGE_STATUS_PRODUCT, changeStatusProductWorker);
  yield takeLatest(actionType.DELETE_PRODUCT, deleteProductWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}