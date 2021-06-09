import * as actions from './actionTypes';

export const setAlert = (alert) => ({
  type: actions.SET_ALERT,
  alert:alert
});

export const setAlerts = (alerts) => ({
    type: actions.SET_ALERTS,
    alerts:alerts
});