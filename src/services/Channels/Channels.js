import { apiWithToken } from "../api";
const resouceUrl = "/channel";

export const loadChannelsService = async (params) => {
  const token_ = localStorage.getItem("@siteJokerz/token");
  const api_ = apiWithToken(token_);
  params = params ? params : {};
  return await api_.get(`${resouceUrl}`, {
    params: {
      ...params,
    },
  });
};

export const createChannelService = async (channel) => {
  channel = channel ? channel : {};
  const token_ = localStorage.getItem("@siteJokerz/token");
  const api_ = apiWithToken(token_);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  return await api_.post(`/auth/cadastro_streamer`, channel, config);
};

export const loadChannelByNameService = async (name) => {
  const token_ = localStorage.getItem("@siteJokerz/token");
  const api_ = apiWithToken(token_);
  return await api_.get(`${resouceUrl}/${name}`);
};

export const loadParceirosService = async (params) => {
  const token_ = localStorage.getItem("@siteJokerz/token");
  const api_ = apiWithToken(token_);
  params = params ? params : {};
  return await api_.get(`${resouceUrl}/parceiros`, {
    params: {
      ...params,
    },
  });
};
