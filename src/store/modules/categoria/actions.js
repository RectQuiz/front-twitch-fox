import * as actions from './actionTypes';

export const loadCategorias = () => ({
  type: actions.LOAD_CATEGORIAS
});

export const cadastrarCategoria = (categoria) => ({
    type: actions.CADASTRAR_CATEGORIA,
    categoria:categoria
});

export const deleteCategoria = (id) => ({
    type: actions.DELETE_CATEGORIA,
    id:id
});

export const setCategorias = (categorias) => ({
    type: actions.SET_CATEGORIAS,
    categorias:categorias
});

export const setLoadingCategoria = (loading) => ({
    type: actions.SET_LOADING_CATEGORIA,
    loading:loading
});

export const setResponseCategoria = (response) => ({
    type: actions.SET_RESPONSE_CATEGORIA,
    response:response
});

export const setStatusCategoria = (status) => ({
    type: actions.SET_STATUS_CATEGORIA,
    status:status
});

export const setErrorCategoria = (errors) => ({
    type: actions.SET_ERROR_CATEGORIA,
    errors:errors
});