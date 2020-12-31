import { apiWithToken } from '../api';
const token = localStorage.getItem('@siteJokerz/token');
const api = apiWithToken(token);
const resouceUrl = '/adm/premiacoes';

export const registerPremiacao = async (params) => {
  params = params ? params : {};
  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
  };
  return await api.post(`${resouceUrl}`, params,config);
};

export const loadPremiacoes = async (params) => {
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

export const deletePremiacao = async (id) => {
    return await api.delete(`${resouceUrl}/${id}`);
};
