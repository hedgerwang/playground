// @flow

import React from 'react';

import './poke-ball.css';

import type {State} from '../types';

export default class PokeBall extends React.Component<any, any, any> {

  props: State;

  render(): React.Element<any> {
    return (
      <div className="poke-ball" >
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    );
  }
}