import { FETCH_TOKEN } from '../actions/types';

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
  default:
    return state;
  }
};

export default user;
