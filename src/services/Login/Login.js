import { api } from '../api';

const resouceUrl = '/auth';

export const getAuthUrlTwitch = async (params) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let page = urlParams.has('page') ? { page: urlParams.get('page') } : {};
  params = params ? params : {};
  let search = urlParams.has('search')
    ? { search: urlParams.get('search') }
    : {};
  return await api.get(`${resouceUrl}/url-twitch`, {
    params: {
      ...params,
      ...page,
      ...search,
    },
  });
};

export const authCodeTwitch = async (params) => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let page = urlParams.has('page') ? { page: urlParams.get('page') } : {};
    params = params ? params : {};
    let search = urlParams.has('search')
      ? { search: urlParams.get('search') }
      : {};
    return await api.get(`${resouceUrl}/twitch_person?code=${params.code}`);
};

export const loginUserAdmin = async (params) => {
  params = params ? params : {};
  return await api.post(`${resouceUrl}/login_streamer`,params);
};
