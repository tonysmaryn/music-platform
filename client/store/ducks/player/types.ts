import { Action } from 'redux';
import { ITrack } from '../../../types/track';

export interface PlayerState {
  active: null | ITrack;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
}

export const initialState: PlayerState = {
  active: null,
  volume: 50,
  duration: 0,
  currentTime: 0,
  pause: true,
};

export enum PlayerActionTypes {
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
  SET_ACTIVE = 'SET_ACTIVE',
  SET_DURATION = 'SET_DURATION',
  SET_CURRENT_TIME = 'SET_CURRENT_TIME',
  SET_VOLUME = 'SET_VOLUME',
}

interface PlayActionInterface extends Action<PlayerActionTypes> {
  type: PlayerActionTypes.PLAY;
}

interface PauseActionInterface extends Action<PlayerActionTypes> {
  type: PlayerActionTypes.PAUSE;
}

interface SetActiveInterface extends Action<PlayerActionTypes> {
  type: PlayerActionTypes.SET_ACTIVE;
  payload: ITrack;
}

interface SetDurationInterface extends Action<PlayerActionTypes> {
  type: PlayerActionTypes.SET_DURATION;
  payload: number;
}

interface SetCurrentTimeInterface extends Action<PlayerActionTypes> {
  type: PlayerActionTypes.SET_CURRENT_TIME;
  payload: number;
}

interface SetVolumeInterface extends Action<PlayerActionTypes> {
  type: PlayerActionTypes.SET_VOLUME;
  payload: number;
}

export type PlayerAction =
  | PlayActionInterface
  | PauseActionInterface
  | SetActiveInterface
  | SetDurationInterface
  | SetCurrentTimeInterface
  | SetVolumeInterface;
