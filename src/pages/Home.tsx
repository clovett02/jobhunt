import React from 'react';
import { JobsComponent } from '../components/JobsComponent.tsx';

/**
 * Homepage
 */
export function Home() {
  // static displayName = Home.name;
    return (
      <div>
        <h1>Summary of Jobs Applied To</h1>
        <JobsComponent/>
      </div>
    );
  }
