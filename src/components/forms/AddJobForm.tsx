import { useState, useEffect, type ChangeEvent } from "react";
import { Job } from "../../classes/Job.ts";
import type { JobFormPostType } from "../../interfaces/JobFormPost.ts";
/**
 * Form for adding submitting job to database.
 */
export function AddJobForm() {

    const [job, setjob] = useState<Job>();

    // const year = new Date().getFullYear();
    // let month = String(new Date().getMonth() + 1);
    // let day = String(new Date().getDate());
    // let hour = String(new Date().getHours());
    // let minute = String(new Date().getMinutes());

    // if (month.length < 2) 
    // { month = "0" + month; }
    // if (day.length < 2)
    // { day = "0" + day; }
    // if (hour.length < 2) 
    // { hour = "0" + hour; }
    // if (minute.length < 2)
    // { minute = "0" + minute; }

    let FieldNames = ["CompanyName", "JobTitle", "State", "City",
        "Remote", "Hybrid", "Onsite", "ApplicationDate",
        "ApplicationTime", "SiteFoundOn"];

    
    useEffect (()  => {
        
        let j: JobFormPostType = {
            CompanyName: '',
            JobTitle: '',
            State: '',
            City: '',
            Remote: false,
            Hybrid: false,
            Onsite: false,
            ApplicationDate: new Date(),
            ApplicationTime: new Date(),
            SiteFoundOn: ''
        };

        setjob(new Job(j));
    }, [])
    
    function setChecked(event: ChangeEvent)
    {
        if(job){
            const { name, checked } = event.target as HTMLInputElement;
            setjob({...job, [name]: checked})
        }

    }

    function handleInputChange(event: ChangeEvent)
    {
        if(job){
            const { name, value } = event.target as HTMLInputElement;
            setjob({...job, [name]: value});
        }
        
    }

    // function setBooleanValues(postdata: postdatatype)
    // {
    //     if(postdata["Remote"] === "Remote")
    //     { 
    //         postdata["Remote"] = true; 
    //     }
    //     else{ postdata.set("Remote", false); }
        
    //     if(postdata["Hybrid"] === "Hybrid")
    //     { 
    //         postdata["Hybrid"] = true;
    //     }
    //     else{ postdata["Hybrid"] = false; }

    //     if(postdata["Onsite"] === "Onsite")
    //     {
    //         postdata["Onsite"] = true;
    //     }
    //     else{ postdata["Onsite"] = false; }

    // }

    async function handleSubmit(){
        if(job){ 
            let j = job;
            const payload = new Job(j);
            
            fetch('http://thor.jobhuntapi/api/job/addjob',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(payload)
                
            })
            .then(response => response.json())
            .then(data => {
            console.log('Form data sent:', data);
            })
            .catch(error => console.error('Error sending form data:', error));
        }
    }

    if (job){
        return (
                <div>
                    <form id="jobform" onSubmit={handleSubmit}>
                        
                        
                        <input type="text" placeholder="Company Name" id="CompanyName" name={FieldNames[0]}
                        value={job.CompanyName} onChange={handleInputChange}/><br/>
                        <label htmlFor="CompanyName">Company Name</label><br/>
                        
                        <label htmlFor="JobTitle">Job Title</label><br/>
                        <input type="text" placeholder="Job Title" id="JobTitle" name={FieldNames[1]}
                        value={job.JobTitle} onChange={handleInputChange}/><br/><br/>
                        
                        <label htmlFor="State">State</label><br/>
                        <input type="text" placeholder="State" id="State" name={FieldNames[2]}
                        value={job.State} onChange={handleInputChange}/><br/>

                        <label htmlFor="City">City</label><br/>
                        <input type="text" placeholder="City" id="City" name={FieldNames[3]}
                        value={job.City} onChange={handleInputChange}/><br/><br/>
                        
                        <input type="checkbox" id="Remote" name={FieldNames[4]}
                        checked={job.Remote} onChange={setChecked}/>
                        <label htmlFor="Remote"> Remote</label><br/>

                        <input type="checkbox" id="Hybrid" name={FieldNames[5]}
                        checked={job.Hybrid} onChange={setChecked}/>
                        <label htmlFor="Hybrid">Hybrid</label><br/>
                        
                        <input type="checkbox" id="Onsite" name={FieldNames[6]}
                        checked={job.Onsite} onChange={setChecked}/>
                        <label htmlFor="Onsite">Onsite</label><br/><br/>
                        
                        <label htmlFor="ApplicationDate">Application Date</label><br/>
                        <input type="date" placeholder="Application Date" id="ApplicationDate" 
                        name={FieldNames[7]}
                        value={job.ApplicationDate} onChange={handleInputChange}/><br/>
                        
                        <label htmlFor="ApplicationTime">Application Time</label><br/>
                        <input type="datetime-local" placeholder="Application Time" id="ApplicationTime" 
                        name={FieldNames[8]}
                        value={job.ApplicationTime} onChange={handleInputChange}/><br/><br/>

                        <label>Site Found On:</label><br/>
                        <input type="radio" id="LinkedIn" name={FieldNames[9]} value='LinkedIn'
                        onChange={handleInputChange}/>
                        <label htmlFor="LinkedIn">LinkedIn</label><br/>

                        <input type="radio" id="Indeed" name={FieldNames[9]} value="Indeed"
                        onChange={handleInputChange}/>
                        <label htmlFor="Indeed">Indeed</label><br/>

                        <input type="radio" id="Dice" name={FieldNames[9]} value="Dice"
                        onChange={handleInputChange}/>
                        <label htmlFor="Dice">Dice</label><br/>

                        <br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            );
        }
    
    
}
