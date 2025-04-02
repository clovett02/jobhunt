import React, { useState, useEffect } from "react";
import { Job } from "../classes/Job"

export function JobUpdatePageFunc(){

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const [jobID] = useState(urlParams.get('jobid'))

    const j = new Job();
    const [job, setjob] = useState({j})
    const [error, seterror] = useState("")
    const [loading, setloading] = useState(true)

    useEffect(() => {
        const fetchJob = async () => {
            let url = "http://thor.jobhuntapi/api/job/byID/" + jobID
            
            try{
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
                    result.City
                );
                setjob(j);
                setloading(false);
            } catch (error) { seterror(error.message) } finally { setloading(false); }
        }
        fetchJob();
    });

    const editCityState = () => {

    }

    const editDescription = () => {

    }
    
    if (loading){
        return <p>Loading...</p>
    }
    if (error){
        return <p>Error: {error}</p>
    }

    return (
        <div>
            <label>JobID: {jobID}</label><br/>
            <label>{job.JobTitle}</label><br/>
                <label>{job.City} {job.State}</label>
                <button onClick={editCityState}>Edit Location</button><br/>
            <label>{job.CompanyName}</label><br/><br/>
                <label>Job Description:</label><br/><br/>
                <text>{job.JobDescription}</text>
                <button onClick={editDescription}>Edit Description</button>
        </div>
    )
}