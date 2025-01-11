import React, { Component } from "react";


/**
 * Show all jobs applied to by querying the Jobhuntapi @ thor.jobhuntapi
 */
export class Jobs extends Component
{
    static displayName = Jobs.name;
    static alljobsurl = 'http://thor.jobhuntapi/api/jobs/pastyear';
    static jobByIDurl = 'http://thor.jobhuntapi/api/job/byid/49';

    constructor(props)
    {
        super(props);

        this.state = 
        {
            jobs : [],
            error: "",
            loading: ""
        };
    }

    componentDidMount()
    { this.fetchJobs(); }

    fetchJobs = async () => 
    {
        try
        {
            const response = await fetch('http://thor.jobhuntapi/api/jobs/pastyear',
                {
                    method: 'GET',
                    headers: {'Content-Type': 'applicaiton/json'}
                }
            )
            if (!response.ok) {throw new Error(`HTTP error! status: ${response.status}`);}
            const result = await response.json();
            this.setState({jobs: result, loading: false})
            
                
        }
        catch (error) {this.setState({ error: error.message, loading: false });}
    }

    RemoteHybridOnsitetoString(r,  h,  o)
    {
        //r is for remote, h is for hybrid, and o is for onsite
        if (r){return "Remote";}
        if (h){return "Hybrid";}
        if (o){return "Onsite";}
        return "";
    }

    render() 
    {
        const { jobs, loading, error } = this.state;

        if (loading) {
            return <p>Loading...</p>;
          }
      
          if (error) {
            return <p>Error: {error}</p>;
          }

        return (
            <div>
                <br></br>
                <h3>Jobs Applied to Within the past year</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Job Title</th>
                            <th>Location</th>
                            <th>Remote?</th>
                            <th>Application<br/>Date</th>
                            <th>Application<br/>Time</th>
                            <th>Site Found<br/> On</th>
                            <th>Used<br/>EasyApply?</th>
                        </tr>
                    </thead>
                    <tbody>
                    {jobs.map((job) => 
                    <tr key={job.JobID}>
                        <td>{job.CompanyName}</td>
                        <td>{job.JobTitle}</td>
                        <td>{job.City} {job.State}</td>
                        <td>{this.RemoteHybridOnsitetoString(job.Remote, job.Hybrid, job.Onsite)}</td>
                        <td>{job.ApplicationDate}</td>
                        <td>{job.ApplicationTime}</td>
                        <td>{job.SiteFoundOn}</td>
                        <td>{job.EasyApply}</td>
                    </tr>)}
                    </tbody>
                    
                </table>
            </div>
        );
        
    }
}