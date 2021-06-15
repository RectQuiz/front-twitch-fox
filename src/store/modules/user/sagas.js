import { all, put,call, takeLatest } from 'redux-saga/effects';
import * as User from '../../../services/User';
import  * as actionType from './actionTypes';
import * as actions from './actions';
import { setErrorGeneral } from '../error/actions';

function* loadInfoUserhWorker({ params }) {
  yield put(actions.setLoading(true));
  try {
    const response = yield call(User.loadInfoUser, params);
    // console.log('response loadInfoUserhWorker: ',response);
    yield put(actions.setInfoUser(response.data.data));
    yield put(actions.setError(''));
    // yield put(setErrorGeneral('',false,0));
    yield put(actions.setLoading(false));
    // yield put(actions.setResponse(response));
    yield put(actions.setStatus(response.status));
  } catch (error) {
    yield put(actions.setLoading(false));
    if (error.response) {
        console.log('error response: ',error.response);
        yield put(actions.setError(error.response.data.message));
        yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
        yield put(actions.setStatus(error.response.status));
    } else if (error.request) {
        console.log('error request: ',error.request);
        yield put(setErrorGeneral(error.message,true,error.request.status));
        yield put(actions.setError({ data: error.message }));
        yield put(actions.setStatus(error.request.status));
    } else {
        console.log('error desc: ',error.message);
        yield put(actions.setError({ data: error.message }));
    }
  }
}

function* SetStatusTypePersonWorker({params}) {
  yield put(actions.setLoading(true));
  try {
    const response = yield call(User.setStatusType,params);
    yield put(actions.setLoading(false));
    yield put(actions.setError(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponse(response));
    yield put(actions.setStatus(response.status));
    yield put(actions.loadInfoUser());
  } catch (error) {
    yield put(actions.setLoading(false));
    yield put(actions.setStatus(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setError(error.response.data.message));
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

function* GetAccountsForTypeWorker({params}) {
  yield put(actions.setLoading(true));
  try {
    const response = yield call(User.loadAccountsForType,params);
    yield put(actions.setLoading(false));
    yield put(actions.setError(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponse(response));
    yield put(actions.setUsers(response.data.data));
    yield put(actions.setStatus(response.status));
  } catch (error) {
    yield put(actions.setLoading(false));
    yield put(actions.setStatus(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setError(error.response.data.message));
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

function* editPersonWorker({params}) {
  yield put(actions.setLoading(true));
  yield put(actions.setStatus(0));
  yield put(actions.setResponse({}));
  yield put(actions.setError(''));
  try {
    const response = yield call(User.editPerson,params);
    yield put(actions.setLoading(false));
    yield put(actions.setError(''));
    yield put(setErrorGeneral('',false,0));
    yield put(actions.setResponse(response));
    yield put(actions.setStatus(response.status));
    yield put(actions.loadInfoUser());
  } catch (error) {
    yield put(actions.setLoading(false));
    yield put(actions.setStatus(error.status));
    if (error.response) {
      yield put(setErrorGeneral(error.response.data.message,true,error.response.status));
      yield put(actions.setError(error.response.data.message));
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
  yield takeLatest(actionType.LOAD_INFO_USER, loadInfoUserhWorker);
  yield takeLatest(actionType.SET_STATUS_TYPE_PERSON, SetStatusTypePersonWorker);
  yield takeLatest(actionType.LOAD_ACCOUNTS_FOR_TYPE, GetAccountsForTypeWorker);
  yield takeLatest(actionType.EDIT_USER, editPersonWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}
