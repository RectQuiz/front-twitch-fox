import * as actions from './actionTypes';

const initial_state = {
    status:false
}

export const ModalReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.SET_STATUS_MODAL:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
}
