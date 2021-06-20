import * as actions from './actionTypes';

const initial_state = {
    response: {},
    channels: null,
    loading: false,
    errors: '',
    status:0
}

export const ChannelsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.SET_CHANNELS:
      return {
        ...state,
        channels: action.channels,
      };
    case actions.SET_LOADING_CHANNELS:
      return {
        ...state,
        loading: action.loading
      };
    case actions.SET_RESPONSE_CHANNELS:
      return {
        ...state,
        response: action.response
      };
    case actions.SET_STATUS_CHANNELS:
      return {
        ...state,
        status: action.status
      };
    case actions.SET_ERROR_CHANNELS:
      return {
        ...state,
        errors: action.errors,
      };
    default:
      return state;
  }
}
