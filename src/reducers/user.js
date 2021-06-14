import { FETCH_TOKEN, SAVE_USER } from '../actions/types';

const INITIAL_STATE = {
  token: '',
  name: '',
  gravatar: '',
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
    };
  default:
    return state;
  }
};

export default user;
