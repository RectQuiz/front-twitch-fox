import { apiWithToken } from '../api';
const resouceUrl = '/channel';

export const loadChannelsService= async (params) => {
    const token_ = localStorage.getItem('@siteJokerz/token');
    const api_ = apiWithToken(token_);
    params = params ? params : {};
    return await api_.get(`${resouceUrl}`, {
      params: {
        ...params
      }
    });
};

export const loadParceirosService= async (params) => {
  const token_ = localStorage.getItem('@siteJokerz/token');
  const api_ = apiWithToken(token_);
  params = params ? params : {};
  return await api_.get(`${resouceUrl}/parceiros`, {
    params: {
      ...params
    }
  });
};