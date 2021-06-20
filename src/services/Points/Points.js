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

export const syncRedeemPointPendedntesService = async (params) => {
  const token_ = localStorage.getItem('@siteJokerz/token');
  const api_ = apiWithToken(token_);
  return await api_.get(`${resouceUrl}/register/pendentes`);
};

export const acionarRoletaService = async (params) => {
  const token_ = localStorage.getItem('@siteJokerz/token');
  const api_ = apiWithToken(token_);
  let id_channel = params.id_channel?params.id_channel:'null';
  let pontos = params.pontos?params.pontos:'null';
  return await api_.put(`/points/${id_channel}/${pontos}/roleta`);
};