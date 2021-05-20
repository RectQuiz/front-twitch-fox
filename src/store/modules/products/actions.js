import * as actions from './actionTypes';

export const loadProducts = (params) => ({
  type: actions.LOAD_PRODUCTS,
  params:params
});

export const setProducts = (products) => ({
    type: actions.SET_PRODUCTS,
    products:products
});

export const setLoadingProducts = (loading) => ({
    
    type: actions.SET_LOADING_PRODUCTS,
    loading:loading
});

export const setResponseProducts = (response) => ({
    type: actions.SET_RESPONSE_PRODUCTS,
    response:response
});

export const setStatusProducts = (status) => ({
    type: actions.SET_STATUS_PRODUCTS,
    status:status
});

export const setErrorProducts = (errors) => ({
    type: actions.SET_ERROR_PRODUCTS,
    errors:errors
});
