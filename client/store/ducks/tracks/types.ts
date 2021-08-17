import { Action } from 'redux';
import { ITrack } from '../../../types/track';

export const initialState: TracksState = {
  tracks: [],
};

export interface TracksState {
  tracks: ITrack[];
  error?: string;
}

export enum TrackActionTypes {
  FETCH_TRACKS = 'FETCH_TRACKS',
  FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR',
}

interface FetchTracksActionInterface extends Action<TrackActionTypes> {
  type: TrackActionTypes.FETCH_TRACKS;
  payload: ITrack[];
}

interface FetchTracksErrorActionInterface extends Action<TrackActionTypes> {
  type: TrackActionTypes.FETCH_TRACKS_ERROR;
  payload: string;
}

export type TracksAction =
  | FetchTracksActionInterface
  | FetchTracksErrorActionInterface;
