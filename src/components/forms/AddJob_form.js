import React, { Component } from "react";

export class AddJob_form extends Component {
    
    static displayName = AddJob_form.name;

    constructor(props)
    {
        super(props);

        this.state = 
        {
            CompanyName: '',
            JobTitle: '',
            State: '',
            City: '',
            Remote: false,
            Hybrid: false,
            Remote: false,
            ApplicationDate: Date.now(),
            ApplicationTime: Date.now()
        }
        
        this.FieldNames = ["CompanyName", "JobTitle", "State", "City",
                    "Remote", "Hybrid", "Onsite", "ApplicationDate",
                    "ApplicationTime"];
    }
    
    handleInputChange = event => 
    {
        const { name, value } = event.target;
        this.setState({ 
            [name]: value
        });
    }

    setBooleanValues(postdata)
    {
        if(postdata["Remote"] === "Remote")
        { 
            postdata["Remote"] = true; 
        }
        else{ postdata.set("Remote", false); }
        
        if(postdata["Hybrid"] === "Hybrid")
        { 
            postdata["Hybrid"] = true;
        }
        else{ postdata["Hybrid"] = false; }

        if(postdata["Onsite"] === "Onsite")
        {
            postdata["Onsite"] = true;
        }
        else{ postdata["Onsite"] = false; }

    }

    handleSubmit = event =>
    {
        event.preventDefault();
        const { CompanyName, JobTitle, State, City, Remote,
            Hybrid, Onsite, ApplicationDate, ApplicationTime } = this.state;
        const formData = { CompanyName, JobTitle, State, City, Remote,
            Hybrid, Onsite, ApplicationDate, ApplicationTime };
        
        fetch('http://hulk.jobhuntapi/jobinfo', 
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
        console.log('Form data sent:', data);
        // Handle any success or error response from the API
        })
        .catch(error => console.error('Error sending form data:', error));
    }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     let data = new FormData(event.target);
    //     let postdata = {};

    //     this.FieldNames.forEach(element => {
    //         if(data.get(element) != null)
    //         {
    //             data.append(element, data.get(element));
    //         }
    //     });

    //     data.forEach((value, key) => {
    //         postdata[key] = value;
    //     });

    //     this.setBooleanValues(postdata);

    //     postdata["SkillsRequired"] = [""];

    //     let response = fetch("http://hulk.jobhuntapi/jobinfo", 
    //     {
    //         headers: {"Content-Type": "application/json"},
    //         method: "POST",
    //         body: JSON.stringify(postdata)
    //     });
    //     console.log(response);
    //     console.log(JSON.stringify(postdata));

    //     alert("Job submitted.", response)
        
    // }

    render() {
        return (
            <div>
                <form id="jobform" onSubmit={this.handleSubmit}>
                    <label for="CompanyName">Company Name</label><br/>
                    <input type="text" placeholder="Company Name" id="CompanyName" name={this.FieldNames[0]}
                    value={this.state.CompanyName} onChange={this.handleInputChange}/><br/>
                    
                    <label for="JobTitle">Job Title</label><br/>
                    <input type="text" placeholder="Job Title" id="JobTitle" name={this.FieldNames[1]}
                    value={this.state.JobTitle} onChange={this.handleInputChange}/><br/>
                    
                    <label for="State">State</label><br/>
                    <input type="text" placeholder="State" id="State" name={this.FieldNames[2]}
                    value={} onChange={this.handleInputChange}/><br/>

                    <label for="City">City</label><br/>
                    <input type="text" placeholder="City" id="City" name={this.FieldNames[3]}
                    value={this.state.City} onChange={this.handleInputChange}/><br/>
                    
                    <input type="checkbox" id="Remote" name={this.FieldNames[4]}
                    value={this.state.Remote} onChange={this.handleInputChange}/>
                    <label for="Remote"> Remote</label><br/>

                    <input type="checkbox" id="Hybrid" name={this.FieldNames[5]}
                    value={this.state.Hybrid} onChange={this.handleInputChange}/>
                    <label for="Hybrid">Hybrid</label><br/>
                    
                    <input type="checkbox" id="Onsite" name={this.FieldNames[6]}
                    value={this.state.Onsite} onChange={this.handleInputChange}/>
                    <label for="Onsite">Onsite</label><br/>
                    
                    <label for="ApplicationDate">Application Date</label><br/>
                    <input type="date" placeholder="Application Date" id="ApplicationDate" 
                    name={this.FieldNames[7]}
                    value={this.state.ApplicationDate} onChange={this.handleInputChange}/><br/>
                    
                    <label for="ApplicationTime">Application Time</label><br/>
                    <input type="datetime-local" placeholder="Application Time" id="ApplicationTime" 
                    name={this.FieldNames[8]}
                    value={this.state.ApplicationTime} onChange={this.handleInputChange}/><br/>
                    
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}