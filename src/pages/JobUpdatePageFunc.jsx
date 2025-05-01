import React, { useState, useEffect } from "react";
import { Job } from "../classes/Job.ts"
import { fetchjobByID } from "../functions/fetchjob.ts";

export function JobUpdatePageFunc(){

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const [jobID] = useState(urlParams.get('jobid'))

    const j = new Job();
    const [job, setjob] = useState({j})
    const [error, seterror] = useState("")
    const [loading, setloading] = useState(true)

    const [editdescriptionhidden, setdescriptionhidden] = useState("true")
    const [editlocationhidden, seteditlocationhidden] = useState("true")

    useEffect(() => {
        const fetchJob = async () => {
            
            try{
                const j = await fetchjobByID(jobID)
                setjob(j);
                setloading(false);
            } catch (error) { seterror(error.message) } finally { setloading(false); }
        }
        fetchJob();
    });

    const editCityState = () => {
        if ( editlocationhidden === "" ){ seteditlocationhidden("true"); }
        else { seteditlocationhidden("");}
    }
    const updateLocation = async () => {
        const city = document.querySelector('.cityinput').value;
        const state = document.querySelector('.stateinput').value;

        if (!city || !state) {
            alert("City and State cannot be empty.");
            return;
        }
        const url = "http://thor.jobhuntapi/api/job/updatelocation";
        const payload = {
            ID: jobID,
            City: city,
            State: state
        };
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            alert(`Failed to update location: ${error.message}`);
        }
        alert("Location updated successfully!");
        seteditlocationhidden("true");
    }

    const editDescription = () => {
        if(editdescriptionhidden === ""){ setdescriptionhidden("true"); }
        else{ setdescriptionhidden(""); }
    }

    const updateDescription = async () => {
        const descriptionInput = document.querySelector('.descriptioninput').value;

        if (!descriptionInput) {
            alert("Description cannot be empty.");
            return;
        }

        const url = "http://thor.jobhuntapi/api/job/updatedescription";
        const payload = {
            ID: jobID,
            JobDescription: descriptionInput
        };
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            alert("Description updated successfully!");
            setdescriptionhidden("true");
        } catch (error) {
            alert(`Failed to update description: ${error.message}`);
        }
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
            <input className="cityinput" type="text" hidden={editlocationhidden} placeholder={job.City}/>
            <input className="stateinput" type="text" hidden={editlocationhidden} placeholder={job.State}/>
            <button className="submitlocationbutton" 
                hidden={editlocationhidden} onClick={updateLocation}>Submit</button><br/>
            
            <label>Worksite</label>

            <label>{job.CompanyName}</label><br/><br/>
            
            <label>Job Description:</label><br/><br/>
            <text>{job.JobDescription}</text><br/>
            <button onClick={editDescription}>Edit Description</button><br/>
            <input className="descriptioninput" type="text" hidden={editdescriptionhidden} placeholder={job.JobDescription}/>
            <button className="submitdescriptionbutton" 
                hidden={editdescriptionhidden} onClick={updateDescription}>Submit</button>

        </div>
    )
}