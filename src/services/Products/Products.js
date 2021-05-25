import { apiWithToken } from '../api';
const token = localStorage.getItem('@siteJokerz/token');
const api = apiWithToken(token);
const resouceUrl = '/products';

export const loadProducts = async (params) => {
    const token_ = localStorage.getItem('@siteJokerz/token');
    const api_ = apiWithToken(token_);
    params = params ? params : {};
    return await api_.get(`${resouceUrl}`, {
      params: {
        ...params
      },
    });
};

export const loadProduct = async (id) => {
  const token_ = localStorage.getItem('@siteJokerz/token');
  const api_ = apiWithToken(token_);
  return await api_.get(`${resouceUrl}/${id}`);
}

export const registerProduct = async (params) => {
  params = params ? params : {};
  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
  };
  return await api.post(`${resouceUrl}`, params,config);
};

export const editProduct = async (params) => {
  const config = {
    headers: {
        'content-type': 'multipart/form-data'
    }
  };
  return await api.put(`${resouceUrl}/${params.id}`, params.product,config);
};

export const changeStatusProductService = async (params) => {
  return await api.put(`${resouceUrl}/${params.id}/status`, params.product);
};

export const cadProductSteamService = async () => {
  const token_ = localStorage.getItem('@siteJokerz/token');
  const api_ = apiWithToken(token_);
  return await api_.get(`${resouceUrl}/reload_products_cs`);
};

export const deleteStickerProductService = async (info) => {
  const token_ = localStorage.getItem('@siteJokerz/token');
  const api_ = apiWithToken(token_);
  return await api_.delete(`${resouceUrl}/sticker`,{data:info});
};