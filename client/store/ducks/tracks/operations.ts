import { Dispatch } from 'react';
import { TracksAction } from './types';
import { actions } from './actionCreators';
import axios from 'axios';

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TracksAction>) => {
    try {
      const response = await axios.get('http://localhost:5000/tracks');
      dispatch(actions.fetchTracks(response.data));
    } catch (e) {
      dispatch(
        actions.fetchTracksError('Произошла ошибка при загрузке треков')
      );
    }
  };
};

export const searchTracks = (query: string) => {
  return async (dispatch: Dispatch<TracksAction>) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/tracks/search?query=${query}`
      );
      dispatch(actions.fetchTracks(response.data));
    } catch (e) {
      dispatch(
        actions.fetchTracksError('Произошла ошибка при загрузке треков')
      );
    }
  };
};
