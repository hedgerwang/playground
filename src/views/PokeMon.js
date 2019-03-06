// @flow

import cx from 'classnames';
import React from 'react';

import './poke-mon.css';

export default class PokeMon extends React.Component<any, any, any> {
  props: {
    name: string,
  };

  render(): React.Element<any> {
    const {name} = this.props;
    const className = cx('poke-mon', name);
    const style = {
      backgroundImage: `url("./${name}.png")`
    };
    return (
      <div className={className} style={style}>

      </div>
    );
  }
}