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

export const cadastrarProduct = (product) => ({
    type: actions.REGISTER_PRODUCT,
    product:product
});

export const editProductAction = (product,id) => ({
    type: actions.EDIT_PRODUCT,
    params:{
        product:product,
        id:id
    }
});

export const changeStatusProductAction = (product,id) => ({
    type: actions.CHANGE_STATUS_PRODUCT,
    params:{
        product:product,
        id:id
    }
});

export const loadProduct = (id) => ({
  type: actions.LOAD_PRODUCT,
  id:id
});

export const setProduct = (product) => ({
    type: actions.SET_PRODUCT,
    product:product
});

export const cadProductsSteam = () => ({
    type: actions.CAD_PRODUCTS_STEAM
});

export const deleteStickerProductAction = (info) => ({
    type: actions.DELETE_STICKER_PRODUCT,
    info:info
});

export const deleteProductAction = (id) => ({
    type: actions.DELETE_PRODUCT,
    id:id
});

export const redeemProductAction = (params) => ({
    type: actions.REDEEM_PRODUCT,
    params:params
});

export const loadRedeemProducts = (params) => ({
    type: actions.LOAD_REDEEM_PRODUCTS,
    params:params
});

export const setRedeemProducts = (redeem) => ({
    type: actions.SET_REDEEM_PRODUCTS,
    redeem:redeem
});

export const changeStatusRedeemProduct = (redeem) => ({
    type: actions.CHANGE_STATUS_REDEEM_PRODUCT,
    redeem:redeem
});