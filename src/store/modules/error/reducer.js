import * as actions from './actionTypes';

const initial_state = {
    error_general:'',
    status_error:false,
    code_general:0
}

export const ErrorReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.SET_ERROR_GENERAL:
      return {
        ...state,
        error_general: action.payload.error,
        status_error: action.payload.status,
        code_general: action.payload.code
      };
    default:
      return state;
  }
}
