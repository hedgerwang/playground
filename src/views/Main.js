// @flow

import React from 'react';

import PokeBall from './PokeBall';
import PokeMon from './PokeMon';

import './main.css';

import type {State} from '../types';

export default class MainView extends React.Component<any, any, any> {

  props: State;

  render(): React.Element<any> {
    const style = {
      backgroundImage: 'url("./g1.png")',
    };
    return (
      <div className="main" style={style}>
        <PokeBall state={this.props} />
        <PokeMon name="p1" />
        <PokeMon name="p2" />
        <PokeMon name="p1" />
        <PokeMon name="p2" />
        <PokeMon name="p1" />
        <PokeMon name="p2" />
      </div>
    );
  }
}