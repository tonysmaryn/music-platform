import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import { tracksReducer } from './ducks/tracks/reducer';
import { playerReducer } from './ducks/player/reducer';

const rootReducer = combineReducers({
  player: playerReducer,
  tracks: tracksReducer,
});

export const hydrateReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = { ...state, ...action.payload };
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
