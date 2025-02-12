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
                <label>{job.City} {job.State}</label><br/>
                <label>{job.CompanyName}</label><br/>
                <textarea>{job.JobDescription}</textarea>
            </div>
        )
        
    }
}

