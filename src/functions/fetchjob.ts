import { Job } from "../classes/Job.ts";

export async function fetchjobByID(jobID: string)
{
    let url = "http://thor.jobhuntapi/api/job/byID/" + jobID
    
    const response = await fetch(url,
    {
        method: 'GET',
        headers: {'Content-Type': 'applicaiton/json'}
    }
    )
    if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`);}
    const result = await response.json();
    
    const j = new Job(
        result.JobID, 
        result.CompanyName,
        result.CompanyURL,
        result.JobTitle,
        result.JobDescription,
        result.State,
        result.City,
        result.Remote,
        result.Hybrid,
        result.Onsite,
        result.Responded,
        result.SiteFoundOn
    );
    return j;
}