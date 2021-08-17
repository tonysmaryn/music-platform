import { ITrack } from '../../../types/track';
import { PlayerAction, PlayerActionTypes } from './types';

const PlayAction = (): PlayerAction => {
  return { type: PlayerActionTypes.PLAY };
};

const PauseAction = (): PlayerAction => {
  return { type: PlayerActionTypes.PAUSE };
};

const SetActive = (payload: ITrack): PlayerAction => {
  return { type: PlayerActionTypes.SET_ACTIVE, payload };
};

const SetDuration = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_DURATION, payload };
};

const SetCurrentTime = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_CURRENT_TIME, payload };
};

const SetVolume = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_VOLUME, payload };
};

export const playerActions = {
  PlayAction,
  PauseAction,
  SetActive,
  SetDuration,
  SetCurrentTime,
  SetVolume,
};
