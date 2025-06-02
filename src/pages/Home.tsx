import { JobsComponent } from '../components/JobsComponent.tsx';

/**
 * Homepage
 */
export function Home() {
    return (
      <div>
        <h1>Summary of Jobs Applied To</h1>
        <JobsComponent/>
      </div>
    );
  }
