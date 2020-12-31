import * as actions from './actionTypes';

export const loadPremiacoes = () => ({
  type: actions.LOAD_PREMIACOES
});

export const cadastrarPremiacao = (premiacao) => ({
    type: actions.CADASTRAR_PREMIACAO,
    premiacao:premiacao
});

export const deletePremiacao = (id) => ({
    type: actions.DELETE_PREMIACAO,
    id:id
});

export const setPremiacoes = (premiacoes) => ({
    type: actions.SET_PREMIACOES,
    premiacoes:premiacoes
});

export const setLoadingPremiacao = (loading) => ({
    
    type: actions.SET_LOADING_PREMIACAO,
    loading:loading
});

export const setResponsePremiacao = (response) => ({
    type: actions.SET_RESPONSE_PREMIACAO,
    response:response
});

export const setStatusPremiacao = (status) => ({
    type: actions.SET_STATUS_PREMIACAO,
    status:status
});

export const setErrorPremiacao = (errors) => ({
    type: actions.SET_ERROR_PREMIACAO,
    errors:errors
});