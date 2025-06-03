import type { Job } from "../classes/Job";

export function PostJob(job: Job){
    const url = "http://thor.jobhuntapi/api/job/addjob"

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(job)
    });

}