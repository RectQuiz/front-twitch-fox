import { apiWithToken } from '../api';
const resouceUrl = '/rewards';

export const loadRewardsService = async (params) => {
    const token_ = localStorage.getItem('@siteJokerz/token');
    const api_ = apiWithToken(token_);
    params = params ? params : {};
    return await api_.get(`${resouceUrl}`, {
      params: {
        ...params
      },
    });
};

export const createRewardService = async (reward) => {
  const token_ = localStorage.getItem('@siteJokerz/token');
  const api_ = apiWithToken(token_);
  return await api_.post(`${resouceUrl}`,reward);
};
