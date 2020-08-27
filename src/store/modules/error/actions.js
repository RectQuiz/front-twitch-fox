import * as actions from './actionTypes';

export const setErrorGeneral = (error,status,code) => ({
  type: actions.SET_ERROR_GENERAL,
  payload:{
      error:error,
      status:status,
      code:code
  }
});