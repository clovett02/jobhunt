import React, { Component } from 'react';
import { Jobs } from './Jobs';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Summary of Jobs Applied To</h1>
        <Jobs/>
      </div>
    );
  }
}
