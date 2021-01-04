import * as actions from './actionTypes';

export const loadPerguntas = () => ({
  type: actions.LOAD_PERGUNTAS
});

export const LoadQuantPerguntas = () => ({
    type: actions.LOAD_QUANT_PERGUNTAS
});

export const cadastrarPergunta = (pergunta) => ({
    type: actions.CADASTRAR_PERGUNTA,
    pergunta:pergunta
});

export const atualizarPergunta = (pergunta) => ({
    type: actions.ATUALIZAR_PERGUNTA,
    pergunta:pergunta
});

export const deletePergunta = (id) => ({
    type: actions.DELETE_PERGUNTA,
    id:id
});

export const setPerguntas = (perguntas) => ({
    type: actions.SET_PERGUNTAS,
    perguntas:perguntas
});

export const setQuantPerguntas = (quant_perguntas) => ({
    type: actions.SET_QUANT_PERGUNTAS,
    quant_perguntas:quant_perguntas
});

export const setLoadingPergunta = (loading) => ({
    
    type: actions.SET_LOADING_PERGUNTA,
    loading:loading
});

export const setResponsePergunta = (response) => ({
    type: actions.SET_RESPONSE_PERGUNTA,
    response:response
});

export const setStatusPergunta = (status) => ({
    type: actions.SET_STATUS_PERGUNTA,
    status:status
});

export const setErrorPergunta = (errors) => ({
    type: actions.SET_ERROR_PERGUNTA,
    errors:errors
});