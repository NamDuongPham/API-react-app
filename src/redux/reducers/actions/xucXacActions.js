import { HANDLE_RESULT, PLAY_GAME } from "redux/constants/xucXacConstants";

export const playGameAction = () => {
  return {
    type: PLAY_GAME,
  };
};

export const handleResultAction = () => {
  return {
    type: HANDLE_RESULT,
  };
};
