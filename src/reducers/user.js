import { FETCH_TOKEN, SAVE_USER } from '../actions/types';

const INITIAL_STATE = {
  token: '',
  name: '',
  gravatar: '',
  gravatarEmail: '',
  score: 0,
  assertions: 0,
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case FETCH_TOKEN:
    return {
      ...state,
      token: payload.token,
    };
  case SAVE_USER:
    return {
      ...state,
      name: payload.user.name,
      gravatarEmail: payload.user.gravatarEmail,
      assertions: payload.user.assertions,
      score: payload.user.score,
      gravatar: `https://www.gravatar.com/avatar/${payload.gravatar}`,
    };
  default:
    return state;
  }
};

export default user;
