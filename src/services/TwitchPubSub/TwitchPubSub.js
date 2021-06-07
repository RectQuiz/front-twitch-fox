import { apiWithToken } from '../api';
const resouceUrl = '/twitch';

export const setStatusPubSubService = async (params) => {
    const token_ = localStorage.getItem('@siteJokerz/token');
    const api_ = apiWithToken(token_);
    params = params ? params : {};
    return await api_.get(`${resouceUrl}/SyncPubsub`, {
      params: {
        ...params
      },
    });
};
