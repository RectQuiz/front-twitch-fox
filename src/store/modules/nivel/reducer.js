import * as actions from './actionTypes';

const initial_state = {
    response: {},
    niveis: null,
    loading: false,
    errors: '',
    status:0
}

export const NivelReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.SET_NIVEIS:
      return {
        ...state,
        niveis: action.niveis,
      };
    case actions.SET_LOADING_NIVEL:
      return {
        ...state,
        loading: action.loading
      };
    case actions.SET_RESPONSE_NIVEL:
      return {
        ...state,
        response: action.response
      };
    case actions.SET_STATUS_NIVEL:
      return {
        ...state,
        status: action.status
      };
    case actions.SET_ERROR_NIVEL:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
}
