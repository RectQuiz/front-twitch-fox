import { combineReducers } from 'redux';
import { LoginReducer } from './login/reducer';
import { ModalReducer } from './modal/reducer';


export default combineReducers({
    LoginReducer,
    ModalReducer
});
