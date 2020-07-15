import * as actions from './actionTypes';

const initial_state = {
    response: {},
    user: null,
    loading: false,
    errors: '',
    status:0
}

export const UserReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.SET_INFO_USER:
      return {
        ...state,
        user: action.info_user,
      };
    case actions.SET_LOADING_USER:
      return {
        ...state,
        loading: action.loading
      };
    case actions.SET_RESPONSE_USER:
      return {
        ...state,
        response: action.response
      };
    case actions.SET_STATUS_USER:
      return {
        ...state,
        status: action.status
      };
    case actions.SET_ERROR_USER:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
}
