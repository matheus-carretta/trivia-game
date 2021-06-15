import { FETCH_TOKEN, SAVE_USER, FETCH_GAME_DATA, PAUSE_TIME } from './types';
import { apiTokenRequest, apiQuestionsRequest } from '../services/api';

export const actionFetchToken = () => (dispatch) => apiTokenRequest().then((token) => {
  localStorage.setItem('token', token);
  dispatch({
    type: FETCH_TOKEN,
    payload: {
      token,
    },
  });
});

export const actionFetchGameData = (token) => (dispatch) => apiQuestionsRequest(token)
  .then((data) => dispatch({
    type: FETCH_GAME_DATA,
    payload: {
      data,
    },
  }));

export const actionSaveUser = (user, gravatar) => ({
  type: SAVE_USER,
  payload: {
    user,
    gravatar,
  },
});

export const pauseTime = () => ({
  type: PAUSE_TIME,
});
