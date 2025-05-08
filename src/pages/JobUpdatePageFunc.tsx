import React, { useState, useEffect } from "react";
import { Job } from "../classes/Job.ts"
import { fetchjobByID } from "../functions/fetchjob.ts";
// import { PostLocation, PostDescription, PostSiteFoundOn, UpdateJob } from "../functions/updatejob.ts";
import { UpdateJob } from "../functions/updatejob.ts";

export function JobUpdatePageFunc(){

    const queryString: string = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const [jobID] = useState(urlParams.get('jobid'))

    
    const [job, setjob] = useState<Job>();
    const [error, seterror] = useState("");
    const [loading, setloading] = useState(true);

    const [city, setcity] = useState('')
    const [state, setstate] = useState('')
    const [sitefoundon, setsitefoundon] = useState('')
    const [description, setdescription] = useState('')

    const [editdescriptionhidden, setdescriptionhidden] = useState(true)
    const [editSiteFoundOnHidden, seteditsitefoundonhidden] = useState(true)
    const [editlocationhidden, seteditlocationhidden] = useState(true)

    useEffect(() => {
        const fetchJob = async () => {
            
            try{
                const j: Job = await fetchjobByID(jobID) as Job;
                setjob(j);
                setloading(false);
            } catch (error) { seterror(error.message) } finally { setloading(false); }
        }
        fetchJob();
    },[jobID, city, state, sitefoundon, description]);

    // const updateLocation = async () => {

    //     if (!city || !state) {
    //         alert("City and State cannot be empty.");
    //         return;
    //     }
    //     try {
    //         PostLocation(job.ID, city, state);
    //     } catch (error) {
    //             alert(`Failed to update location: ${error.message}`);
    //         }
    //     alert("Location updated successfully!");
    //     seteditlocationhidden(true);
    // }

    // const updateDescription = async () => {

    //     if (!description) {
    //         alert("Description cannot be empty.");
    //         return;
    //     }

    //     try {
    //         const response = await PostDescription(job.ID, description);
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         alert("Description updated successfully!");
    //         setdescriptionhidden(true);
    //     } catch (error) {
    //         alert(`Failed to update description: ${error.message}`);
    //     }
    // }

    // const updateSiteFoundOn = async () => {
    //     if (!sitefoundon){
    //         alert("Please select a site that this job was found on before hitting submit.")
    //     }

    //     try {
    //         const response = await PostSiteFoundOn(job.ID, sitefoundon);
    //         if(!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }
    //         alert("Site Found On updated successfully!");
    //         seteditsitefoundonhidden(true);
    //     } catch (error) {
    //         alert(`Failed to update site found on: ${error.message}`);
    //     }
    // }

    async function update(){
        
        if(job){
            job.City = city;
            job.State = state;
            job.JobDescription = description;
            job.SiteFoundOn = sitefoundon;

            try {
                await UpdateJob(job);
            }
            catch (error) { console.log(error.message) }
        }
    }

    const editCityState = () => {
        if ( editlocationhidden === false ){ seteditlocationhidden(true); }
        else { seteditlocationhidden(false);}
    }

    const editSiteFoundOn = () => {
        if ( editSiteFoundOnHidden ) { seteditsitefoundonhidden(false); }
        else { seteditsitefoundonhidden(true); }
    }

    const editDescription = () => {
        if(editdescriptionhidden === false){ setdescriptionhidden(true); }
        else{ setdescriptionhidden(false); }
    }

    function worksite(){
        if (job){
            if(job.Remote){return "Remote"}
            else if(job.Hybrid){return "Hybrid"}
            else if (job.Onsite) {return "Onsite"}
        }

    }
    function responded(){
        if(job){
            if(job.Responded){return "Yes"}
            else { return "No"}
        }

    }

    const handlecitychange = (event) => { setcity(event.target.value); }
    const handlestatechange = (event) => { setstate(event.target.value); }
    const handledescriptionchange = (event) => { setdescription(event.target.value); }
    const handlesitefoundonchange = (event) => {  setsitefoundon(event.target.value); }


    if (loading){
        return <p>Loading...</p>
    }
    if (error){
        return <p>Error: {error}</p>
    }
    else if (job)
    {
    return (
        <div key={job.ID}>
            <label>JobID: {jobID}</label><br/>
            <label>{job.JobTitle}</label><br/>
            
            <label>{job.City} {job.State}</label>
            <button onClick={editCityState}>Edit Location</button><br/>
            <input className="cityinput" type="text" value={city} onChange={handlecitychange}
                hidden={editlocationhidden} placeholder={job.City}/>
            <input className="stateinput" type="text" value={state} onChange={handlestatechange}
                hidden={editlocationhidden} placeholder={job.State}/>
            <button className="submitlocationbutton" 
                hidden={editlocationhidden} onClick={update}>Submit</button><br/>
            
            <label>Worksite:  {worksite()}</label><br/>
            
            <label>Responded:  {responded()}</label><br/>
            
            <label>Site Found On:  {job.SiteFoundOn}</label>
            <button onClick={editSiteFoundOn}>Edit</button><br/><br/>
                <div hidden={editSiteFoundOnHidden}>
                    <input type="radio" id="LinkedIn" name="SiteFoundOn" value='LinkedIn' 
                    onChange={handlesitefoundonchange}/>
                    <label htmlFor="LinkedIn">LinkedIn</label><br/>

                    <input type="radio" id="Indeed" name="SiteFoundOn" value="Indeed"
                    onChange={handlesitefoundonchange}/>
                    <label htmlFor="Indeed">Indeed</label><br/>

                    <input type="radio" id="Dice" name="SiteFoundOn" value="Dice"
                    onChange={handlesitefoundonchange}/>
                    <label htmlFor="Dice">Dice</label><br/>
                    <button onClick={update}>Submit</button>
                </div><br/>

            <label>{job.CompanyName}</label><br/><br/>
            
            <label>Job Description:</label><br/><br/>
            <p>{job.JobDescription}</p><br/>
            <button onClick={editDescription}>Edit Description</button><br/>
            <input className="descriptioninput" type="text" value={description} onChange={handledescriptionchange}
                hidden={editdescriptionhidden} placeholder={job.JobDescription}/>
            <button className="submitdescriptionbutton" 
                hidden={editdescriptionhidden} onClick={update}>Submit</button>

        </div>
    )}
}