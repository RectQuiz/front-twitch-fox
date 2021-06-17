import * as actions from './actionTypes';

const initial_state = {
    response: {},
    rewards: null,
    loading: false,
    errors: '',
    status:0,
    totalPages:0,
    currentPage:0
}

export const RewardsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.SET_REWARDS:
      return {
        ...state,
        rewards: action.reward.data,
        totalPages: action.reward.totalPages,
        currentPage: action.reward.currentPage,
      };
    case actions.SET_LOADING_REWARDS:
      return {
        ...state,
        loading: action.loading
      };
    case actions.SET_RESPONSE_REWARDS:
      return {
        ...state,
        response: action.response
      };
    case actions.SET_STATUS_REWARDS:
      return {
        ...state,
        status: action.status
      };
    case actions.SET_ERROR_REWARDS:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
}