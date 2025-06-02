import { Job } from "../classes/Job.ts";
import type { JobJson } from "../dtos/JobJson.ts";

export async function fetchjobByID(jobID: string | null): Promise<Job | null>
{
    if (jobID == null){return null;}
    
    let url = "http://thor.jobhuntapi/api/job/byID/" + jobID
    
    const response = await fetch(url,
    {
        method: 'GET',
        headers: {'Content-Type': 'applicaiton/json'}
    }
    )
    if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`);}
    const result: JobJson = await response.json();
    
    const j = new Job(result);
    return j;
}
