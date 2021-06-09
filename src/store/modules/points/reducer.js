import * as actions from './actionTypes';

const initial_state = {
    response: {},
    redeemPoints: null,
    redeemPoint: null,
    loading: false,
    errors: '',
    status:0,
    totalPages:0,
    currentPage:0
}

export const PointsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.SET_REDEEM_POINTS:
      return {
        ...state,
        redeemPoints: action.redeem.data,
        totalPages: action.redeem.totalPages,
        currentPage: action.redeem.currentPage,
      };
    case actions.SET_LOADING_REDEEM_POINTS:
      return {
        ...state,
        loading: action.loading
      };
    case actions.SET_RESPONSE_REDEEM_POINTS:
      return {
        ...state,
        response: action.response
      };
    case actions.SET_STATUS_REDEEM_POINTS:
      return {
        ...state,
        status: action.status
      };
    case actions.SET_ERROR_REDEEM_POINTS:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
}