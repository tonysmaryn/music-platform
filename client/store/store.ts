import { Context, createWrapper, MakeStore } from 'next-redux-wrapper';
import { AnyAction, applyMiddleware, createStore } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { hydrateReducer, RootState } from './rootReducer';

const makeStore = (context: Context) =>
  createStore(hydrateReducer, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore, { debug: true });

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
