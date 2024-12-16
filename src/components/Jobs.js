import React, { Component } from "react";

//Will show all jobs applied to by querying the Jobhuntapi @ thor.jobhuntapi
export class Jobs extends Component
{
    static displayName = Jobs.name;

    constructor(props)
    {
        super(props);
        this.info = (
            fetch('http://thor.jobhuntapi/jobinfo',
            {
                method: 'GET',
                headers: {'Content-Type': 'applicaiton/json'}
            })
        )
    }

    loadJobs(){
        const response = fetch('http://thor.jobhuntapi/jobinfo')
        //const result = response.json();

        //return result;
    }

    render() 
    {
        return (
            <div>
                {this.loadJobs()}
            </div>
        );
    }
}