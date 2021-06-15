import { PAUSE_TIME, SET_TIMER } from '../actions/types';

const INITIAL_STATE = {
  isTimerPaused: false,
  currentTime: 30,
};

const time = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PAUSE_TIME:
    return {
      ...state,
      isTimerPaused: !state.isTimerPaused,
    };
  case SET_TIMER:
    return {
      ...state,
      currentTime: state.currentTime - 1,
    };
  default:
    return state;
  }
};

export default time;
