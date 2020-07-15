import { all, put,call, takeLatest } from 'redux-saga/effects';
import * as User from '../../../services/User';
import  * as actionType from './actionTypes';
import * as actions from './actions';
// import { getErros } from '~/store/modules/errors/action';

function* loadInfoUserhWorker({ params }) {
  yield put(actions.setLoading(true));
  try {
    const response = yield call(User.loadInfoUser, params);
    // console.log('response loadInfoUserhWorker: ',response);
    yield put(actions.setInfoUser(response.data.data));
    yield put(actions.setError(''));
    yield put(actions.setLoading(false));
    // yield put(actions.setResponse(response));
    yield put(actions.setStatus(response.status));
  } catch (error) {
    yield put(actions.setLoading(false));
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

function* watcherAnalise() {
  yield takeLatest(actionType.LOAD_INFO_USER, loadInfoUserhWorker);
}

export default function* saga() {
  yield all([watcherAnalise()]);
}
