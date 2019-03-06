// @flows

import produce from 'immer';

import renderState from '../renderState';

import type {Reducer, State} from '../types';

let currentState: State = {

};

export default function createAction(reducer: Reducer): Function {
  return () => {
    const nextState: any = produce(currentState, reducer);
    if (nextState !== currentState) {
      currentState = nextState;
      renderState(currentState);
    }
  };
}