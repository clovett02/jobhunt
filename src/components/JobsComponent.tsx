
import React, { useState, useEffect} from "react";
import { Job } from "../classes/Job";
import { fetchjobs } from "../functions/fetchjobs.ts";
import '../css/components/JobsComponent.css'
import { JobComponent } from "./JobComponent.tsx";

export function JobsComponent(){

    const [jobs, setjobs] = useState<Job[]>([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const getjobs = async () => {
            const result = await fetchjobs();
            setjobs(result);
            setloading(false);
        }
        getjobs();
    });


    if (loading) {
        return <p>Loading...</p>;
      }

    return(
        <div className="jobs">
            <br></br>
            <h3>Jobs Applied to Within the past year</h3>
            <table>
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Job Title</th>
                        <th>Location</th>
                        <th>Remote?</th>
                        <th>Application<br/>Date</th>
                        <th>Application<br/>Time</th>
                        <th>Site Found<br/> On</th>
                        <th>Used<br/>EasyApply?</th>
                    </tr>
                </thead>
                <tbody>
                {jobs.map((job) => 
                <JobComponent job={job}/>)}
                </tbody>
            </table>
        </div>
    )
}
