import * as actions from './actionTypes';

const initial_state = {
    response: {},
    products: null,
    loading: false,
    errors: '',
    status:0,
    totalPages:0,
    currentPage:0
}

export const ProductsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.SET_PRODUCTS:
      return {
        ...state,
        products: action.products.data,
        totalPages: action.products.totalPages,
        currentPage: action.products.currentPage,
      };
    case actions.SET_LOADING_PRODUCTS:
      return {
        ...state,
        loading: action.loading
      };
    case actions.SET_RESPONSE_PRODUCTS:
      return {
        ...state,
        response: action.response
      };
    case actions.SET_STATUS_PRODUCTS:
      return {
        ...state,
        status: action.status
      };
    case actions.SET_ERROR_PRODUCTS:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
}
