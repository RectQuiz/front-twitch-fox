import * as actions from './actionTypes';

const initial_state = {
    response: {},
    url_twitch: '',
    loading: false,
    errors: '',
    status:0
}

export const LoginReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.SET_URL_AUTH_TWITCH:
      return {
        ...state,
        url_twitch: action.url,
      };
    case actions.SET_RESPONSE:
      return {
        ...state,
        response: action.response
      };
    case actions.SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    case actions.SET_ERROR:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
}
