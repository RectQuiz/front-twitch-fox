import * as actions from './actionTypes';

const initial_state = {
    response: {},
    perguntas: null,
    loading: false,
    errors: '',
    status:0,
    quant_perguntas:{}
}

export const PerguntaReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.SET_QUANT_PERGUNTAS:
      return {
        ...state,
        quant_perguntas: action.quant_perguntas,
      };
    case actions.SET_PERGUNTAS:
      return {
        ...state,
        perguntas: action.perguntas,
      };
    case actions.SET_LOADING_PERGUNTA:
      return {
        ...state,
        loading: action.loading
      };
    case actions.SET_RESPONSE_PERGUNTA:
      return {
        ...state,
        response: action.response
      };
    case actions.SET_STATUS_PERGUNTA:
      return {
        ...state,
        status: action.status
      };
    case actions.SET_ERROR_PERGUNTA:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
}
