import { all, put,call, takeLatest } from 'redux-saga/effects';
import * as Login from '../../../services/Login';
import  * as actionType from './actionTypes';
import * as actions from './actions';
import { setErrorGeneral } from '../error/actions';

function* getUrlAuthTwitchWorker({ params }) {
  yield put(actions.setLoading(true));
  try {
    const response = yield call(Login.getAuthUrlTwitch, params);
    // yield put(actions.setLoading(false));
    // console.log('response getUrlAuthTwitchWorker: ',response);
    window.location.assign(response.data.data.url);
    // yield put(actions.setUrlAuthTwitch(response.data.data.url));
    yield put(actions.setError(''));
    yield put(setErrorGeneral('',false,0));
    // yield put(actions.setResponse(response));
    // yield put(actions.setStatus(response.status));
  } catch (error) {
    yield put(actions.setLoading(false));
    if (error.response) {
        console.log('error response: ',error.response);
        yield put(actions.setStatus(error.response.status));
        yield put(actions.setError(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
    } else if (error.request) {
        console.log('error request: ',error.request);
        yield put(actions.setStatus(error.request.status));
        yield put(actions.setError({ data: error.message }));
        yield put(setErrorGeneral(error.message,true,error.request.status));
    } else {
        console.log('error desc: ',error.message);
        yield put(actions.setError({ data: error.message }));
    }
  }
}

function* getUrlAuthTwitchLinkedAccountWorker({ params }) {
  yield put(actions.setLoading(true));
  try {
    const response = yield call(Login.getAuthUrlTwitchLinkedAccount, params);
    // yield put(actions.setLoading(false));
    // console.log('response getUrlAuthTwitchWorker: ',response);
    window.location.assign(response.data.data.url);
    // yield put(actions.setUrlAuthTwitch(response.data.data.url));
    yield put(actions.setError(''));
    yield put(setErrorGeneral('',false,0));
    // yield put(actions.setResponse(response));
    // yield put(actions.setStatus(response.status));
  } catch (error) {
    yield put(actions.setLoading(false));
    if (error.response) {
        console.log('error response: ',error.response);
        yield put(actions.setStatus(error.response.status));
        yield put(actions.setError(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
    } else if (error.request) {
        console.log('error request: ',error.request);
        yield put(actions.setStatus(error.request.status));
        yield put(actions.setError({ data: error.message }));
        yield put(setErrorGeneral(error.message,true,error.request.status));
    } else {
        console.log('error desc: ',error.message);
        yield put(actions.setError({ data: error.message }));
    }
  }
}

function* authCodeTwitchWorker({params}) {
  yield put(actions.setLoading(true));
  try {
    const response = yield call(Login.authCodeTwitch,params);
    yield localStorage.setItem('@siteJokerz/token',response.data.token);
    yield localStorage.setItem('@siteJokerz/nickname', response.data.data.preferred_username);
    yield put(actions.setLoading(false));
    yield put(actions.setError(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponse(response));
    yield put(actions.setStatus(response.status));

  } catch (error) {
    yield put(actions.setLoading(false));
    yield put(actions.setStatus(error.status));
    console.log('error asdasd: ',error);
    if (error.response) {
      console.log('error error.response: ',error.response);
      yield put(actions.setError(error.response.data.message));
      // yield put(actions.setResponse(error.response.data));
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setStatus(error.response.status));
    } else if (error.request) {
      console.log('error error.request: ',error.request);
      yield put(setErrorGeneral(error.message,true,error.request.status));
      yield put(actions.setError({ data: error.message }));
      yield put(actions.setStatus(error.request.status));
    } else {
      yield put(actions.setError({ data: error.message }));
    }
  }
}

function* loginAdminWorker({values}) {
  yield put(actions.setLoading(true));
  try {
    const response = yield call(Login.loginUserAdmin,values);
    console.log("response loginAdminWorker: ",response);
    yield put(actions.setLoading(false));
    yield put(actions.setError(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponse(response));
    yield localStorage.setItem('@siteJokerz/token',response.data.token);
    yield localStorage.setItem('@siteJokerz/nickname', response.data.data.nickname);
    yield put(actions.setStatus(response.status));

  } catch (error) {
    yield put(actions.setLoading(false));
    yield put(actions.setStatus(error.status));
    if (error.response) {
      yield put(actions.setError(error.response.data.message));
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setStatus(error.response.status));
    } else if (error.request) {
      yield put(setErrorGeneral(error.message,true,error.request.status));
      yield put(actions.setError({ data: error.message }));
      yield put(actions.setStatus(error.request.status));
    } else {
      yield put(actions.setError({ data: error.message }));
    }
  }
}

function* watcherAnalise() {
  yield takeLatest(actionType.GET_URL_AUTH_TWITCH, getUrlAuthTwitchWorker);
  yield takeLatest(actionType.GET_URL_AUTH_TWITCH_LINKED_ACCOUNT, getUrlAuthTwitchLinkedAccountWorker);
  yield takeLatest(actionType.AUTH_CODE_TWITCH, authCodeTwitchWorker);
  yield takeLatest(actionType.LOGIN_ADMIN, loginAdminWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}
