import React, { Component } from 'react';
import { JobsPage } from './JobsPage';

/**
 * Homepage
 */
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Summary of Jobs Applied To</h1>
        <JobsPage/>
      </div>
    );
  }
}
