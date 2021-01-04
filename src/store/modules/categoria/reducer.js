import * as actions from './actionTypes';

const initial_state = {
    response: {},
    categorias: null,
    loading: false,
    errors: '',
    status:0
}

export const CategoriaReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.SET_CATEGORIAS:
      return {
        ...state,
        categorias: action.categorias,
      };
    case actions.SET_LOADING_CATEGORIA:
      return {
        ...state,
        loading: action.loading
      };
    case actions.SET_RESPONSE_CATEGORIA:
      return {
        ...state,
        response: action.response
      };
    case actions.SET_STATUS_CATEGORIA:
      return {
        ...state,
        status: action.status
      };
    case actions.SET_ERROR_CATEGORIA:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
}
