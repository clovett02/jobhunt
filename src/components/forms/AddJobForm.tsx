import { useState, type ChangeEvent } from "react";
import { Job } from "../../classes/Job.ts";
import { PostJob } from "../../functions/postjob.ts";
/**
 * Form for adding submitting job to database.
 */
export function AddJobForm() {

    const [job, setjob] = useState<Job>(new Job(null));
    // let payloadjob = new Job(null);

    let FieldNames = ["CompanyName", "JobTitle", "State", "City",
        "Remote", "Hybrid", "Onsite", "ApplicationDate",
        "ApplicationTime", "SiteFoundOn"];


    function setChecked(event: ChangeEvent){
        if(job){
            const { name, checked } = event.target as HTMLInputElement;
            setjob({...job, [name]: checked})
            // payloadjob = {...payloadjob, [name]: checked};
            // console.log(payloadjob);
        }

    }

    function handledatechange(event: ChangeEvent){
        if(job){
            const { name, value } = event.target as HTMLInputElement;
            setjob({...job, [name]: new Date(value)});
            // payloadjob = {...payloadjob, [name]: new Date(value)};
            // console.log(payloadjob);
        }
    }

    function handleInputChange(event: ChangeEvent){
        if(job){
            const { name, value } = event.target as HTMLInputElement;
            setjob({...job, [name]: value});
            // payloadjob = {...payloadjob, [name]: value};
            // console.log(payloadjob);
        }
    }

    async function handleSubmit(){
        if(job != null){
            const newjob = job;
            const payloadjob = newjob;
            console.log(payloadjob);
            try {
                await PostJob(payloadjob);
            }
            catch (error: any) { console.log(error.message) }      
        }
    }

    if (job){
        return (
                <div>
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
                    value={job.ApplicationDate.toISOString().substring(0,10)} onChange={handledatechange}/><br/>
                    
                    <label htmlFor="ApplicationTime">Application Time</label><br/>
                    <input type="datetime-local" placeholder="Application Time" id="ApplicationTime" 
                    name={FieldNames[8]}
                    value={job.ApplicationTime.toISOString().substring(0, 16)} onChange={handledatechange}/><br/><br/>

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
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            );
        }
}
