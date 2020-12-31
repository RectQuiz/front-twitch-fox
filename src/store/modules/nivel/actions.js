import * as actions from './actionTypes';

export const loadNiveis = () => ({
  type: actions.LOAD_NIVEIS
});

export const cadastrarNivel = (nivel) => ({
    type: actions.CADASTRAR_NIVEL,
    nivel:nivel
});

export const deleteNivel = (id) => ({
    type: actions.DELETE_NIVEL,
    id:id
});

export const setNiveis = (niveis) => ({
    type: actions.SET_NIVEIS,
    niveis:niveis
});

export const setLoadingNivel = (loading) => ({
    type: actions.SET_LOADING_NIVEL,
    loading:loading
});

export const setResponseNivel = (response) => ({
    type: actions.SET_RESPONSE_NIVEL,
    response:response
});

export const setStatusNivel = (status) => ({
    type: actions.SET_STATUS_NIVEL,
    status:status
});

export const setErrorNivel = (errors) => ({
    type: actions.SET_ERROR_NIVEL,
    errors:errors
});