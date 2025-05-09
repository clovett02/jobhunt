import React, { Component } from "react";
import { Job } from "../../classes/Job.ts";


/**
 * Form for adding submitting job to database.
 */
export class AddJobForm extends Component {
    
    static displayName = AddJobForm.name;

    constructor(props)
    {
        super(props);

        const year = new Date().getFullYear();
        let month = new Date().getMonth() + 1;
        let day = new Date().getDate();
        let hour = new Date().getHours();
        let minute = new Date().getMinutes();

        if (String(month).length < 2) 
        { month = "0" + month; }
        if (String(day).length < 2)
        { day = "0" + day; }
        if (String(hour).length < 2) 
        { hour = "0" + hour; }
        if (String(minute).length < 2)
        { minute = "0" + minute; }

        this.state = 
        {
            CompanyName: '',
            JobTitle: '',
            State: '',
            City: '',
            Remote: false,
            Hybrid: false,
            Onsite: false,
            ApplicationDate: year + "-" + month + "-" + day,
            ApplicationTime: year + "-" + month + "-" + day + "T" + hour + ":" + minute + ":00",
            SiteFoundOn: ''
        };
        
        this.FieldNames = ["CompanyName", "JobTitle", "State", "City",
                    "Remote", "Hybrid", "Onsite", "ApplicationDate",
                    "ApplicationTime", "SiteFoundOn"];

    }
    
    setChecked = event =>
    {
        const { name, checked } = event.target;
        this.setState
        ({
            [name]:checked
        });
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

        let j = new Job();
        j = this.state;
        
        fetch('http://thor.jobhuntapi/api/job/addjob',
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(j)
            
        })
        .then(response => response.json())
        .then(data => {
        console.log('Form data sent:', data);
        })
        .catch(error => console.error('Error sending form data:', error));
    }

    render() {
        return (
            <div>
                <form id="jobform" onSubmit={this.handleSubmit}>
                    <label htmlFor="CompanyName">Company Name</label><br/>
                    <input type="text" placeholder="Company Name" id="CompanyName" name={this.FieldNames[0]}
                    value={this.state.CompanyName} onChange={this.handleInputChange}/><br/>
                    
                    <label htmlFor="JobTitle">Job Title</label><br/>
                    <input type="text" placeholder="Job Title" id="JobTitle" name={this.FieldNames[1]}
                    value={this.state.JobTitle} onChange={this.handleInputChange}/><br/><br/>
                    
                    <label htmlFor="State">State</label><br/>
                    <input type="text" placeholder="State" id="State" name={this.FieldNames[2]}
                    value={this.state.State} onChange={this.handleInputChange}/><br/>

                    <label htmlFor="City">City</label><br/>
                    <input type="text" placeholder="City" id="City" name={this.FieldNames[3]}
                    value={this.state.City} onChange={this.handleInputChange}/><br/><br/>
                    
                    <input type="checkbox" id="Remote" name={this.FieldNames[4]}
                    value={this.state.Remote} onChange={this.setChecked}/>
                    <label htmlFor="Remote"> Remote</label><br/>

                    <input type="checkbox" id="Hybrid" name={this.FieldNames[5]}
                    value={this.state.Hybrid} onChange={this.setChecked}/>
                    <label htmlFor="Hybrid">Hybrid</label><br/>
                    
                    <input type="checkbox" id="Onsite" name={this.FieldNames[6]}
                    value={this.state.Onsite} onChange={this.setChecked}/>
                    <label htmlFor="Onsite">Onsite</label><br/><br/>
                    
                    <label htmlFor="ApplicationDate">Application Date</label><br/>
                    <input type="date" placeholder="Application Date" id="ApplicationDate" 
                    name={this.FieldNames[7]}
                    value={this.state.ApplicationDate} onChange={this.handleInputChange}/><br/>
                    
                    <label htmlFor="ApplicationTime">Application Time</label><br/>
                    <input type="datetime-local" placeholder="Application Time" id="ApplicationTime" 
                    name={this.FieldNames[8]}
                    value={this.state.ApplicationTime} onChange={this.handleInputChange}/><br/><br/>

                    <label>Site Found On:</label><br/>
                    <input type="radio" id="LinkedIn" name={this.FieldNames[9]} value='LinkedIn'
                    onChange={this.handleInputChange}/>
                    <label htmlFor="LinkedIn">LinkedIn</label><br/>

                    <input type="radio" id="Indeed" name={this.FieldNames[9]} value="Indeed"
                    onChange={this.handleInputChange}/>
                    <label htmlFor="Indeed">Indeed</label><br/>

                    <input type="radio" id="Dice" name={this.FieldNames[9]} value="Dice"
                    onChange={this.handleInputChange}/>
                    <label htmlFor="Dice">Dice</label><br/>

                    <br/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}