import { apiWithToken } from '../api';
const token = localStorage.getItem('@siteJokerz/token');
const api = apiWithToken(token);
const resouceUrl = '/adm/perguntas';

export const registerPergunta = async (params) => {
  params = params ? params : {};
  return await api.post(`${resouceUrl}`, {
      ...params
  });
};

export const atualizarPergunta = async (params) => {
  params = params ? params : {};
  return await api.put(`${resouceUrl}/${params.id}`, {
      ...params
  });
};

export const loadPerguntas = async (params) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let page = urlParams.has('page') ? { page: urlParams.get('page') } : {};
    params = params ? params : {};
    let search = urlParams.has('search')
      ? { search: urlParams.get('search') }
      : {};
    return await api.get(`${resouceUrl}`, {
      params: {
        ...params,
        ...page,
        ...search,
      },
    });
};

export const deletePergunta = async (id) => {
    return await api.delete(`${resouceUrl}/${id}`);
};
