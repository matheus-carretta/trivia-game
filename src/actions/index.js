import { FETCH_TOKEN } from './types';
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

export const actionXXY = () => ({
  type: 'XXXY',
  payload: {},
});
