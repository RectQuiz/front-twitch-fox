import * as actions from './actionTypes';

export const loadRedeemPoints = (params) => ({
  type: actions.LOAD_REDEEM_POINTS,
  params:params
});

export const setRedeemPoints = (redeem) => ({
    type: actions.SET_REDEEM_POINTS,
    redeem:redeem
});

export const setLoadingRedeemPoints = (loading) => ({
    
    type: actions.SET_LOADING_REDEEM_POINTS,
    loading:loading
});

export const setResponseRedeemPoints = (response) => ({
    type: actions.SET_RESPONSE_REDEEM_POINTS,
    response:response
});

export const setStatusRedeemPoints = (status) => ({
    type: actions.SET_STATUS_REDEEM_POINTS,
    status:status
});

export const setErrorRedeemPoints = (errors) => ({
    type: actions.SET_ERROR_REDEEM_POINTS,
    errors:errors
});

export const restorePointsStreamElementsAction = () => ({
    type: actions.RESTORE_POINTS_STREAM_ELEMENTS
});


export const syncRedeemPointPendentesAction = () => ({
    type: actions.SYNC_POINTS_REDEEM_PENDENTES
});