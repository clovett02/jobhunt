import { JobsComponent } from '../components/JobsComponent.tsx';
import '../css/pages/Home.css'

/**
 * Homepage
 */
export function Home() {
    return (
      <div className='homecontainer'>
        <h1>Summary of Jobs Applied To</h1>
        <JobsComponent/>
      </div>
    );
  }
