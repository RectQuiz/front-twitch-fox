import { combineReducers } from 'redux';
import { LoginReducer } from './login/reducer';
import { ModalReducer } from './modal/reducer';
import { UserReducer } from './user/reducer';
import { ErrorReducer } from './error/reducer';


export default combineReducers({
    LoginReducer,
    ModalReducer,
    UserReducer,
    ErrorReducer
});
