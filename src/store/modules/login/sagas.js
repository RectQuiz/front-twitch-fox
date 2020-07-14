import { all, put,call, takeLatest } from 'redux-saga/effects';
import * as Login from '../../../services/Login';
import  * as actionType from './actionTypes';
import * as actions from './actions';
// import { getErros } from '~/store/modules/errors/action';

function* getUrlAuthTwitchWorker({ params }) {
  try {
    const response = yield call(Login.getAuthUrlTwitch, params);
    // console.log('response getUrlAuthTwitchWorker: ',response);
    yield put(actions.setUrlAuthTwitch(response.data.data.url));
    yield put(actions.setError(''));
    yield put(actions.setResponse(response));
    yield put(actions.setStatus(response.status));
  } catch (error) {
    if (error.response) {
        console.log('error response: ',error.response);
        yield put(actions.setStatus(error.response.status));
        yield put(actions.setError(error.response.data.message));
    } else if (error.request) {
        console.log('error request: ',error.request);
        yield put(actions.setStatus(error.request.status));
        yield put(actions.setError({ data: error.message }));
    } else {
        console.log('error desc: ',error.message);
        yield put(actions.setError({ data: error.message }));
    }
  }
}


function* authCodeTwitchWorker({params}) {
  try {
    const response = yield call(Login.authCodeTwitch,params);
    yield put(actions.setError(''));
    yield put(actions.setResponse(response));
    yield put(actions.setStatus(response.status));

  } catch (error) {
    yield put(actions.setStatus(error.status));
    if (error.response) {
      yield put(actions.setError(error.response));
    } else if (error.request) {
      yield put(actions.setError({ data: error.message }));
    } else {
      yield put(actions.setError({ data: error.message }));
    }
  }
}

function* watcherAnalise() {
  yield takeLatest(actionType.GET_URL_AUTH_TWITCH, getUrlAuthTwitchWorker);
  yield takeLatest(actionType.AUTH_CODE_TWITCH, authCodeTwitchWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}
