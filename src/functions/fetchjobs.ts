import { Job } from "../classes/Job.ts";
import type { JobJson } from "../dtos/JobJson.ts";

/**
 * Converts a Json array into an array of {Job} objects.
 * @param jsonjobs an array of Json formatted jobs
 * @returns An array of Job objects
 */
function setJobs(jobs: JobJson[]):Job[]{
    let results: Job[] = [];
    for (let i = 0; i < jobs.length; i++) {
        results.push(new Job(jobs[i]))
    }
    return results;
}

export async function fetchjobs(): Promise<(Job[])>
{   
    let url = "http://thor.jobhuntapi/api/jobs/pastyear";

    try{
        const response = await fetch(url,
        {
            method: 'GET',
            headers: {'Content-Type': 'applicaiton/json'}
        })
        if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`);}
        const result: JobJson[] = await response.json();
        return setJobs(result);
    } catch (error) { 
        console.error("Error fetching jobs: ", error)
        return [];
    }
}