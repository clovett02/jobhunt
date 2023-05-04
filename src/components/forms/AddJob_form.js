import React, { Component } from "react";

export class AddJob_form extends Component {
    constructor(props)
    {
        super(props);
        
        this.FieldNames = ["CompanyName", "JobTitle", "State", "City",
                    "Remote", "Hybrid", "Onsite", "ApplicationDate",
                    "ApplicationTime"];
    }
    
    static displayName = AddJob_form.name;

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

    handleSubmit = (event) => {
        event.preventDefault();
        let data = new FormData(event.target);
        let postdata = {};

        this.FieldNames.forEach(element => {
            if(data.get(element) != null)
            {
                data.append(element, data.get(element));
            }
        });

        data.forEach((value, key) => {
            postdata[key] = value;
        });

        this.setBooleanValues(postdata);

        postdata["SkillsRequired"] = [""];

        let response = fetch("http://hulk.jobhuntapi/jobinfo", 
        {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(postdata)
        });
        console.log(response);
        console.log(JSON.stringify(postdata));

        alert("Job submitted.", response)
        
    }

    render() {
        return (
            <div>
                <form id="jobform" onSubmit={this.handleSubmit}>
                    <label for="CompanyName">Company Name</label><br/>
                    <input type="text" placeholder="Company Name" id="CompanyName" name={this.FieldNames[0]}/><br/>
                    
                    <label for="JobTitle">Job Title</label><br/>
                    <input type="text" placeholder="Job Title" id="JobTitle" name={this.FieldNames[1]}/><br/>
                    
                    <label for="State">State</label><br/>
                    <input type="text" placeholder="State" id="State" name={this.FieldNames[2]}/><br/>

                    <label for="City">City</label><br/>
                    <input type="text" placeholder="City" id="City" name={this.FieldNames[3]}/><br/>
                    
                    <input type="checkbox" id="Remote" name={this.FieldNames[4]} value="Remote"/>
                    <label for="Remote"> Remote</label><br/>

                    <input type="checkbox" id="Hybrid" name={this.FieldNames[5]} value="Hybrid"/>
                    <label for="Hybrid">Hybrid</label><br/>
                    
                    <input type="checkbox" id="Onsite" name={this.FieldNames[6]} value="Onsite"/>
                    <label for="Onsite">Onsite</label><br/>
                    
                    <label for="ApplicationDate">Application Date</label><br/>
                    <input type="date" placeholder="Application Date" id="ApplicationDate" 
                    name={this.FieldNames[7]}/><br/>
                    
                    <label for="ApplicationTime">Application Time</label><br/>
                    <input type="datetime-local" placeholder="Application Time" id="ApplicationTime" 
                    name={this.FieldNames[8]}/><br/>
                    
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}