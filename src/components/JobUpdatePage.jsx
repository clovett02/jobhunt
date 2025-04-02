import { Component } from "react";
import { Job } from "../classes/Job"

export class JobUpdatePage extends Component{

    constructor(props){
        super(props);

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);

        this.state = {
            jobID : urlParams.get('jobid'),
            job : new Job(),
            error : "",
            loading : ""
        }

    }

    componentDidMount()
    { this.fetchJob(); }

    fetchJob = async () => 
    {
        const { jobID } = this.state
        let url = "http://thor.jobhuntapi/api/job/byID/" + jobID
        
        try
        {
            const response = await fetch(url,
                {
                    method: 'GET',
                    headers: {'Content-Type': 'applicaiton/json'}
                }
            )
            if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`);}
            const result = await response.json();
            
            this.setState({job: new Job(
                result.JobID, 
                result.CompanyName,
                result.CompanyURL,
                result.JobTitle,
                result.JobDescription,
                result.State,
                result.City
            ), loading: false})  
        }
        catch (error) {this.setState({ error: error.message, loading: false });}
    }

    editCityState = event => {

    }

    editDescription = event => {

    }

    updateCityandState = event => {
        const job = this.state.job;
        
    }

    updateDescription = event => {
        const job = this.state.job;
        const { ID, JobDescription } = (job.ID, job.JobDescription);
        const formdata =  { ID, JobDescription };
        const url = "thor.jobhuntapi/api/job/updatedescription"
        fetch(url,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formdata)
            }
        )
    }

    render(){
        const {job, jobID, loading, error} = this.state;

        if (loading) {
            return <p>Loading...</p>;
          }
      
          if (error) {
            return <p>Error: {error}</p>;
          }

        return(
            <div>
                <label>JobID: {jobID}</label><br/>
                <label>{job.JobTitle}</label><br/>
                {/* <form id="location" onSubmit={this.updateCityandState}> */}
                    <label>{job.City} {job.State}</label><br/>
                    <button>Edit Location</button><br/>
                {/* </form> */}
                <label>{job.CompanyName}</label><br/><br/>
                {/* <form id="description" onSubmit={this.updateDescription}> */}
                    <label>Job Description:</label><br/><br/>
                    <text>{job.JobDescription}</text>
                    <button onClick={this.editDescription}>Edit Description</button>
                {/* </form> */}

            </div>
        )
        
    }
}

