import * as actions from './actionTypes';

const initial_state = {
    response: {},
    premiacoes: null,
    loading: false,
    errors: '',
    status:0
}

export const PremiacaoReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.SET_PREMIACOES:
      return {
        ...state,
        premiacoes: action.premiacoes,
      };
    case actions.SET_LOADING_PREMIACAO:
      return {
        ...state,
        loading: action.loading
      };
    case actions.SET_RESPONSE_PREMIACAO:
      return {
        ...state,
        response: action.response
      };
    case actions.SET_STATUS_PREMIACAO:
      return {
        ...state,
        status: action.status
      };
    case actions.SET_ERROR_PREMIACAO:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
}
