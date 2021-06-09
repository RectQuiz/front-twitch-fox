import * as actions from './actionTypes';

export const setStatuspubSub = (params) => ({
  type: actions.SET_STATUS_PUBSUB,
  params:params
});

export const syncPointsTwitchAction = (params) => ({
  type: actions.SYNC_POINTS_TWITCH,
  params:params
});