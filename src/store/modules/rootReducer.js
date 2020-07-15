import { combineReducers } from 'redux';
import { LoginReducer } from './login/reducer';
import { ModalReducer } from './modal/reducer';
import { UserReducer } from './user/reducer';


export default combineReducers({
    LoginReducer,
    ModalReducer,
    UserReducer
});
