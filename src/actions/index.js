import { FETCH_TOKEN, SAVE_USER } from './types';
import { apiTokenRequest } from '../services/api';

export const actionFetchToken = () => (dispatch) => apiTokenRequest().then((token) => {
  localStorage.setItem('token', token);
  dispatch({
    type: FETCH_TOKEN,
    payload: {
      token,
    },
  });
});

export const actionSaveUser = (user, gravatar) => ({
  type: SAVE_USER,
  payload: {
    user,
    gravatar,
  },
});

export const actionXXY = () => ({
  type: 'XXXY',
  payload: {},
});
