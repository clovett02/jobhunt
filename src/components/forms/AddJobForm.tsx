import { useState, type ChangeEvent } from "react";
import { Job } from "../../classes/Job.ts";
import { PostJob } from "../../functions/postjob.ts";
import { JobInputText } from "../../classes/JobInputText.ts";
import { JobInputCheckbox } from "../../classes/JobInputCheckbox.ts";
import { JobInputRadio } from "../../classes/JobInputRadio.ts";
import { JobInputDate } from "../../classes/JobInputDate.ts";
/**
 * Form for adding submitting job to database.
 */
export function AddJobForm() {

    const [job, setjob] = useState<Job>(new Job(null));
    // let payloadjob = new Job(null);

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

    const htmltextinputs = [
        new JobInputText("CompanyName", "Commpany Name", job.CompanyName, handleInputChange),
        new JobInputText("JobTitle", "Job Title", job.JobTitle, handleInputChange),
        new JobInputText("State", "State", job.State, handleInputChange),
        new JobInputText("City", "City", job.City, handleInputChange)
    ]

    const htmlcheckinputs = [
        new JobInputCheckbox("Remote", "Remote", job.Remote, setChecked),
        new JobInputCheckbox("Hybrid", "Hybrid", job.Hybrid, setChecked),
        new JobInputCheckbox("Onsite", "Onsite", job.Onsite, setChecked)
    ]

    const htmldateinputs = [
        new JobInputDate("ApplicationDate", "Application Date", job.ApplicationDate.toISOString().substring(0,10), handledatechange),
        new JobInputDate("ApplicationTime", "Application Time", job.ApplicationTime.toISOString().substring(0, 16), handledatechange, "datetime-local"),
        new JobInputDate("DatePosted", "Date Posted", job.DatePosted.toISOString().substring(0,10), handledatechange)
    ]

    const htmlradioinputs = [
        new JobInputRadio("SiteFoundOn", "LinkedIn", handleInputChange),
        new JobInputRadio("SiteFoundOn", "Indeed", handleInputChange),
        new JobInputRadio("SiteFoundOn", "ZipRecruiter", handleInputChange),
        new JobInputRadio("SiteFoundOn", "Dice", handleInputChange)
    ]

    if (job){
        return (
                <div>
                {htmltextinputs.map((inp) =>
                    <>
                        <label htmlFor={inp.label.for}>{inp.label.text}</label>
                        <input type={inp.input.type} placeholder={inp.input.placeholder} id={inp.input.id} name={inp.input.name}
                        value={inp.input.value} onChange={handleInputChange}/><br/>
                    </>
                )}
                {htmlcheckinputs.map((inp) =>
                    <>
                        <input type="checkbox" id={inp.input.id} name={inp.input.name}
                        checked={inp.input.value} onChange={setChecked}/>
                        <label htmlFor={inp.label.for}>{inp.label.text}</label><br/>
                    </>
                )}
                    
                {htmldateinputs.map((inp) => 
                    <>
                        <label htmlFor={inp.label.for}>{inp.label.text}</label><br/>
                        <input type={inp.input.type} id={inp.input.id} name={inp.input.name}
                        value={inp.input.value} onChange={handledatechange}/><br/>
                    </>
                )}
                

                <label>Site Found On:</label><br/>
                {htmlradioinputs.map((inp) => 
                    <>
                        <input type={inp.input.type} id={inp.input.id} name={inp.input.name} 
                        value={inp.input.value} onChange={handleInputChange}/>
                        <label htmlFor={inp.label.for}>{inp.label.text}</label><br/>
                    </>
                )}

                    <br/>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            );
        }
}
