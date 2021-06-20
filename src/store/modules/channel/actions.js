import * as actions from './actionTypes';

export const loadChannelsAction = (params) => ({
    type: actions.LOAD_CHANNELS,
    params:params
});

export const setChannelsAction = (channels) => ({
    type: actions.SET_CHANNELS,
    channels:channels
});

export const setLoadingChannelsAction = (loading) => ({
    type: actions.SET_LOADING_CHANNELS,
    loading:loading
});

export const setErrorChannelsAction = (error) => ({
    type: actions.SET_ERROR_CHANNELS,
    error:error
});

export const setResponseChannelsAction = (response) => ({
    type: actions.SET_RESPONSE_CHANNELS,
    response:response
});

export const setStatusChannelsAction = (status) => ({
    type: actions.SET_STATUS_CHANNELS,
    status:status
});