// @flow

import React from 'react';

import PokeBall from './PokeBall';
import PokeMon from './PokeMon';

import './main.css';

import type {State} from '../types';

export default class MainView extends React.Component<any, any, any> {

  props: State;

  render(): React.Element<any> {
    return (
      <div className="main">
        <PokeBall state={this.props} />
        <PokeMon name="p1" />
        <PokeMon name="p2" />
      </div>
    );
  }
}