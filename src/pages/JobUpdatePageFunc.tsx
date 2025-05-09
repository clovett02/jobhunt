import React, { useState, useEffect } from "react";
import { Job } from "../classes/Job.ts"
import { fetchjobByID } from "../functions/fetchjob.ts";
import { UpdateJob } from "../functions/updatejob.ts";
import '../css/JobUpdatePage.css'
import { deleteJob } from "../functions/deletejob.ts";

export function JobUpdatePageFunc(){

    const queryString: string = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const [jobID] = useState(urlParams.get('jobid'))

    
    const [job, setjob] = useState<Job>();
    const [error, seterror] = useState("");
    const [loading, setloading] = useState(true);

    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [sitefoundon, setsitefoundon] = useState('');
    const [description, setdescription] = useState('');
    const [companyurl, setcompanyurl] = useState('');

    const [editdescriptionhidden, setdescriptionhidden] = useState(true);
    const [editSiteFoundOnHidden, seteditsitefoundonhidden] = useState(true);
    const [editlocationhidden, seteditlocationhidden] = useState(true);
    const [editcompanyurlhidden, seteditcompanyurl] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            
            try{
                const j: Job = await fetchjobByID(jobID) as Job;
                setjob(j);
                setcity(j.City);
                setstate(j.State);
                setsitefoundon(j.SiteFoundOn);
                setdescription(j.JobDescription);
                setcompanyurl(j.CompanyURL)
                setloading(false);
            } catch (error) { seterror(error.message) } finally { setloading(false); }
        }
        fetchJob();
    },[jobID]);

    async function update(){
        
        if(job){
            job.City = city;
            job.State = state;
            job.JobDescription = description;
            job.SiteFoundOn = sitefoundon;
            job.CompanyURL = companyurl;

            try {
                await UpdateJob(job);
            }
            catch (error) { console.log(error.message) }
        }
    }

    async function deleteJ(){
        if (job){
            if(window.confirm(`Are you sure? ${job.JobTitle} will be deleted.` )){
                await deleteJob(job.ID);
                alert(`${job.JobTitle} was deleted.`);
            }
            else {
                alert(`${job.JobTitle} was not deleted`);
            }
        }
        else {
            alert(`Job object is currently undefined.`);
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

    const editCompanyUrl = () => {
        if(editcompanyurlhidden){ seteditcompanyurl(false);}
        else { seteditcompanyurl(true);}
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
    const handlecompanyurlchange = (event) => { setcompanyurl(event.target.value);}


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
            <label>JobID: {jobID}</label><button onClick={deleteJ}>Delete</button><br/>
            <label className="CompanyName">{job.CompanyName}</label><br/>
            <label className="JobTitle">{job.JobTitle}</label><br/>
            
            <label>{job.City} {job.State}</label>
            <button onClick={editCityState}>Edit Location</button><br/>
            <input className="cityinput" type="text" value={city} onChange={handlecitychange}
                hidden={editlocationhidden} placeholder={job.City}/>
            <input className="stateinput" type="text" value={state} onChange={handlestatechange}
                hidden={editlocationhidden} placeholder={job.State}/><br/>
            
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
                </div><br/>

            <label>Company URL: <a href={job.CompanyURL}>{job.CompanyURL}</a></label><button onClick={editCompanyUrl}>Edit</button><br/>
            <input type="text" value={companyurl} onChange={handlecompanyurlchange}
            hidden={editcompanyurlhidden} placeholder={job.CompanyURL}></input>
            <label>JobBoard URL: </label><br/><br/>
            
            <label>Job Description:</label><br/><br/>
            <p>{job.JobDescription}</p><br/>
            <button onClick={editDescription}>Edit Description</button><br/>
            <input className="descriptioninput" type="text" value={description} onChange={handledescriptionchange}
                hidden={editdescriptionhidden} placeholder={job.JobDescription}/>
            <br/>
            <button onClick={update}>Update</button>

        </div>
    )}
}