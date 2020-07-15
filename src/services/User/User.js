import { api } from '../api';

const resouceUrl = '/person';

export const loadInfoUser = async (params) => {
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
    withCredentials: true
  });
};
