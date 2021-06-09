import * as actions from './actionTypes';

const initial_state = {
    alerts: []
}

export const AlertsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case actions.SET_ALERTS:
      return {
        ...state,
        alerts: action.alerts
      };
    case actions.SET_ALERT:
      return {
        ...state,
        alerts: [
            ...state.alerts,
            action.alert
        ],
      };
    default:
      return state;
  }
}
