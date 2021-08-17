import { ITrack } from '../../../types/track';
import { TrackActionTypes, TracksAction } from './types';

const fetchTracks = (payload: ITrack[]): TracksAction => {
  return { type: TrackActionTypes.FETCH_TRACKS, payload };
};

const fetchTracksError = (payload: string): TracksAction => {
  return { type: TrackActionTypes.FETCH_TRACKS_ERROR, payload };
};

export const actions = {
  fetchTracks,
  fetchTracksError,
};
