import { FETCH_GAME_DATA, RESET_GAME_DATA } from '../actions/types';

const INITIAL_STATE = {
  gameData: [],
};

const game = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_GAME_DATA:
    return {
      ...state,
      gameData: [...action.payload.data],
    };

  case RESET_GAME_DATA:
    return {
      ...state,
      gameData: [],
    };

  default:
    return state;
  }
};

export default game;
