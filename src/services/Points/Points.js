import { apiWithToken } from '../api';
const resouceUrl = '/redeemPoints';

export const loadredeemPoints = async (params) => {
    const token_ = localStorage.getItem('@siteJokerz/token');
    const api_ = apiWithToken(token_);
    params = params ? params : {};
    return await api_.get(`${resouceUrl}`, {
      params: {
        ...params
      },
    });
};

export const restorePointsStreamElementsService = async (params) => {
  const token_ = localStorage.getItem('@siteJokerz/token');
  const api_ = apiWithToken(token_);
  return await api_.get(`/restorePointsStreamElements`);
};
