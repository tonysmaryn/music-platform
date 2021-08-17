import {
  initialState,
  TrackActionTypes,
  TracksAction,
  TracksState,
} from './types';

export const tracksReducer = (
  state = initialState,
  action: TracksAction
): TracksState => {
  switch (action.type) {
    case TrackActionTypes.FETCH_TRACKS: {
      return { ...state, tracks: action.payload };
    }
    case TrackActionTypes.FETCH_TRACKS_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
