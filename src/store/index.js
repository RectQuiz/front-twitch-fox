import { createStore, applyMiddleware } from 'redux';
import RootReducer from './modules/rootReducer';
import RootSaga from './modules/rootSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(RootSaga);

export default store;
