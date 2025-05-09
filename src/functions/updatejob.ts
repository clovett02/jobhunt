
import { Job } from "../classes/Job";

export function UpdateJob(job: Job | undefined){
    const url = "http://thor.jobhuntapi/api/job/update";
    
    fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(job)
    });

}
