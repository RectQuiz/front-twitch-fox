import { combineReducers } from 'redux';
import { LoginReducer } from './login/reducer';
import { ModalReducer } from './modal/reducer';
import { UserReducer } from './user/reducer';
import { ErrorReducer } from './error/reducer';
import { NivelReducer } from './nivel/reducer';
import { PerguntaReducer } from './pergunta/reducer';
import { PremiacaoReducer } from './premiacao/reducer';
import { PartidaReducer } from './partida/reducer';
import { CategoriaReducer } from './categoria/reducer';
import { MenuAdminReducer } from './menuAdmin/reducer';
import { ProductsReducer } from './products/reducer';
import { PointsReducer } from './points/reducer';


export default combineReducers({
    LoginReducer,
    ModalReducer,
    UserReducer,
    ErrorReducer,
    NivelReducer,
    PerguntaReducer,
    PremiacaoReducer,
    PartidaReducer,
    CategoriaReducer,
    MenuAdminReducer,
    ProductsReducer,
    PointsReducer
});
