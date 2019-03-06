// @flow

import React from 'react';
import ReactDOM from 'react-dom';

import Main from './views/Main';

import type {State} from './types';

export default function renderState(state: State): void {
  const ROOT_ID = 'state_root_element';
  const {body} = document;
  const el = document.getElementById(ROOT_ID) || document.createElement('div');
  if (!el.parentElement && body) {
    el.id = ROOT_ID;
    body.appendChild(el);
  }
  if (el.parentElement) {
    ReactDOM.render(<Main state={state} />, el);
  }
}