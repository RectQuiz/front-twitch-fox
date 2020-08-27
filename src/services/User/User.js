import { apiWithToken } from '../api';
const token = localStorage.getItem('@siteJokerz/token');
const api = apiWithToken(token);
// console.log('token service: ',token);

const resouceUrl = '/person';

export const loadInfoUser = async (params) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let page = urlParams.has('page') ? { page: urlParams.get('page') } : {};
  params = params ? params : {};
  let search = urlParams.has('search')
    ? { search: urlParams.get('search') }
    : {};
  return await api.get(`${resouceUrl}/info`, {
    params: {
      ...params,
      ...page,
      ...search,
    }
  });
};

export const loadAccountsForType = async (params) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let page = urlParams.has('page') ? { page: urlParams.get('page') } : {};
  params = params ? params : {};
  let search = urlParams.has('search')
    ? { search: urlParams.get('search') }
    : {};
  return await api.get(`${resouceUrl}/type_accounts`, {
    params: {
      ...params,
      ...page,
      ...search,
    }
  });
};

export const setStatusType = async (params) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let page = urlParams.has('page') ? { page: urlParams.get('page') } : {};
  params = params ? params : {};
  let search = urlParams.has('search')
    ? { search: urlParams.get('search') }
    : {};
  return await api.post(`${resouceUrl}/type`, params);
};
