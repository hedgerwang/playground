// @flow


export type State = {
  initialized?: ?boolean,
  mousePressed?: ?boolean,
  mouseX?: ?number,
  mouseY?: ?number,
};

export type Reducer = (state: State, payload: any) => void;