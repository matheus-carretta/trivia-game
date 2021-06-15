import { PAUSE_TIME } from '../actions/types';

const INITIAL_STATE = {
  isTimerPaused: false,
};

const time = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PAUSE_TIME:
    return {
      ...state,
      isTimerPaused: !state.isTimerPaused,
    };
  default:
    return state;
  }
};

export default time;
