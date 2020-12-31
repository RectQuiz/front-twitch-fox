import * as actions from './actionTypes';
//Partida
//PARTIDA
//PARTIDAS
//partidas
//partida
export const loadPartidas = () => ({
  type: actions.LOAD_PARTIDAS
});

export const loadPartidaAtual = () => ({
  type: actions.LOAD_PARTIDA_ATUAL
});

export const cadastrarPartida = (partida) => ({
    type: actions.CADASTRAR_PARTIDA,
    partida:partida
});

export const deletePartida = (id) => ({
    type: actions.DELETE_PARTIDA,
    id:id
});

export const setPartidas = (partidas) => ({
    type: actions.SET_PARTIDAS,
    partidas:partidas
});

export const setPartida = (partida) => ({
    type: actions.SET_PARTIDA,
    partida:partida
});

export const setLoadingPartida = (loading) => ({
    
    type: actions.SET_LOADING_PARTIDA,
    loading:loading
});

export const setResponsePartida = (response) => ({
    type: actions.SET_RESPONSE_PARTIDA,
    response:response
});

export const setStatusPartida = (status) => ({
    type: actions.SET_STATUS_PARTIDA,
    status:status
});

export const setErrorPartida = (errors) => ({
    type: actions.SET_ERROR_PARTIDA,
    errors:errors
});