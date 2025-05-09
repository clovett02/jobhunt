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

    const [currentjob, setcurrentjob] = useState<Job>();
    const [newjob, setnewjob] = useState<Job>();
    const [pljob, setpljob] = useState<Job>();
    const [error, seterror] = useState("");
    const [loading, setloading] = useState(true);

    const [editdescriptionhidden, setdescriptionhidden] = useState(true);
    const [editSiteFoundOnHidden, seteditsitefoundonhidden] = useState(true);
    const [editlocationhidden, seteditlocationhidden] = useState(true);
    const [editcompanyurlhidden, seteditcompanyurl] = useState(true);

    useEffect(() => {
        const fetchJob = async () => {
            
            try{
                const j: Job = await fetchjobByID(jobID) as Job;
                setcurrentjob(j);
                setnewjob(j);
                setloading(false);
            } catch (error) { seterror(error.message) } finally { setloading(false); }
        }
        fetchJob();
    },[jobID, pljob]);

    // async function getJob(): Promise<Job> {
    //     let j = new Job(null);
    //     try{
    //         j = await fetchjobByID(jobID);
    //         setloading(false);
    //     } catch (error) { 
    //         seterror(error.message);
    //     } finally { setloading(false); }
    //     return j;
    // }

    async function update(){
        if(newjob){
            setloading(true);
            setpljob(newjob)
            const payloadjob = newjob;
            try {
                await UpdateJob(payloadjob);
            }
            catch (error) { console.log(error.message) }
            finally { setloading(false); }
        }
    }

    async function deleteJ(){
        if (currentjob){
            if(window.confirm(`Are you sure? ${currentjob.JobTitle} will be deleted.` )){
                await deleteJob(currentjob.ID);
                alert(`${currentjob.JobTitle} was deleted.`);
            }
            else {
                alert(`${currentjob.JobTitle} was not deleted`);
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
        if (currentjob){
            if(currentjob.Remote){return "Remote"}
            else if(currentjob.Hybrid){return "Hybrid"}
            else if (currentjob.Onsite) {return "Onsite"}
        }

    }
    function responded(){
        if(currentjob){
            if(currentjob.Responded){return "Yes"}
            else { return "No"}
        }

    }

    const handlejobchange = (event) => {
        if (currentjob && newjob){
            const {name, value} = event.target;
            setnewjob({...newjob, [name]: value});
            
            console.log(newjob);
            console.log(name);
            console.log(value);
        }

    }

    if (loading){
        return <p>Loading...</p>
    }
    if (error){
        return <p>Error: {error}</p>
    }
    else if (currentjob && newjob)
    {
    return (
        <div key={newjob.ID}>
            <label>JobID: {jobID}</label><button onClick={deleteJ}>Delete</button><br/>
            <label className="CompanyName">{currentjob.CompanyName}</label><br/>
            <label className="JobTitle">{currentjob.JobTitle}</label><br/>
            
            <label>{currentjob.City} {currentjob.State}</label>
            <button onClick={editCityState}>Edit Location</button><br/>
            <input className="cityinput" type="text" value={newjob.City} onChange={handlejobchange}
                name="City" hidden={editlocationhidden} placeholder={currentjob.City}/>
            <input className="stateinput" type="text" value={newjob.State} onChange={handlejobchange}
                name="State" hidden={editlocationhidden} placeholder={currentjob.State}/><br/>
            
            <label>Worksite:  {worksite()}</label><br/>
            
            <label>Responded:  {responded()}</label><br/>
            
            <label>Site Found On:  {currentjob.SiteFoundOn}</label>
            <button onClick={editSiteFoundOn}>Edit</button><br/><br/>
                <div hidden={editSiteFoundOnHidden}>
                    <input type="radio" id="LinkedIn" name="SiteFoundOn" value='LinkedIn' 
                    onChange={handlejobchange}/>
                    <label htmlFor="LinkedIn">LinkedIn</label><br/>

                    <input type="radio" id="Indeed" name="SiteFoundOn" value="Indeed"
                    onChange={handlejobchange}/>
                    <label htmlFor="Indeed">Indeed</label><br/>

                    <input type="radio" id="Dice" name="SiteFoundOn" value="Dice"
                    onChange={handlejobchange}/>
                    <label htmlFor="Dice">Dice</label><br/>
                </div><br/>

            <label>Company URL: <a href={currentjob.CompanyURL}>{currentjob.CompanyURL}</a></label><button onClick={editCompanyUrl}>Edit</button><br/>
            <input type="text" value={newjob.CompanyURL} onChange={handlejobchange}
                name="CompanyURL" hidden={editcompanyurlhidden} placeholder={currentjob.CompanyURL}></input>
            <label>JobBoard URL: </label><br/><br/>
            
            <label>Job Description:</label><br/><br/>
            <p>{currentjob.JobDescription}</p><br/>
            <button onClick={editDescription}>Edit Description</button><br/>
            <input className="descriptioninput" type="text" value={newjob.JobDescription} onChange={handlejobchange}
                name="JobDescription" hidden={editdescriptionhidden} placeholder={currentjob.JobDescription}/>
            <br/>
            <button onClick={update}>Update</button>

        </div>
    )}
}