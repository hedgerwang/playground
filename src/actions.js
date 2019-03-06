// @flow

import produce from 'immer';

import renderState from './renderState';

import type {Reducer, State} from './types';

let currentState: State = {};

export function createAction(reducer: Reducer): Function {
  return (payload: any) => {
    const nextState: any = produce(currentState, (state) => {
      reducer(state, payload);
    });
    if (nextState !== currentState) {
      currentState = nextState;
      renderState(currentState);
    }
  };
}

export const init = createAction((state: State) => {
  state.initialized = true;
});