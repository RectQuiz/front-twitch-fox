import * as actions from './actionTypes';

export const loadRewards = (params) => ({
  type: actions.LOAD_REWARDS,
  params:params
});

export const setRewards = (reward) => ({
    type: actions.SET_REWARDS,
    reward:reward
});

export const setLoadingRewards = (loading) => ({
    type: actions.SET_LOADING_REWARDS,
    loading:loading
});

export const setResponseRewards = (response) => ({
    type: actions.SET_RESPONSE_REWARDS,
    response:response
});

export const setStatusRewards = (status) => ({
    type: actions.SET_STATUS_REWARDS,
    status:status
});

export const setErrorRewards = (errors) => ({
    type: actions.SET_ERROR_REWARDS,
    errors:errors
});

export const createRewardsAction = (reward) => ({
    type: actions.CREATE_REWARD,
    reward:reward
});

export const deleteRewardAction = (id_reward) => ({
    type: actions.DELETE_REWARD,
    id_reward:id_reward
});