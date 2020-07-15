import * as actions from './actionTypes';

export const loadInfoUser = (id_user) => ({
  type: actions.LOAD_INFO_USER,
  id:id_user
});

export const setInfoUser = (info_user) => ({
    type: actions.SET_INFO_USER,
    info_user:info_user
});

export const setLoading = (loading) => ({
    type: actions.SET_LOADING_USER,
    loading:loading
});

export const setResponse = (response) => ({
    type: actions.SET_RESPONSE_USER,
    response:response
});

export const setStatus = (status) => ({
    type: actions.SET_STATUS_USER,
    status:status
});

export const setError = (errors) => ({
    type: actions.SET_ERROR_USER,
    errors:errors
});