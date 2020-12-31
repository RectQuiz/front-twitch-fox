import * as actions from './actionTypes';

const initial_state = {
    response: {},
    partidas: null,
    partida: null,
    loading: false,
    errors: '',
    status:0
}
//Partida
//PARTIDA
//PARTIDAS
//partidas
//partida

export const PartidaReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.SET_PARTIDAS:
      return {
        ...state,
        partidas: action.partidas,
      };
    case actions.SET_PARTIDA:
      return {
        ...state,
        partida: action.partida,
      };
    case actions.SET_LOADING_PARTIDA:
      return {
        ...state,
        loading: action.loading
      };
    case actions.SET_RESPONSE_PARTIDA:
      return {
        ...state,
        response: action.response
      };
    case actions.SET_STATUS_PARTIDA:
      return {
        ...state,
        status: action.status
      };
    case actions.SET_ERROR_PARTIDA:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
}
