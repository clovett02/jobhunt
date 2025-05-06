import { JobJson } from "../dtos/JobJson";

export class Job {
    ID: string;
    CompanyName: string;
    CompanyURL: string;
    JobTitle: string;
    JobDescription: string;
    State: string;
    City: string;
    Remote: boolean;
    Hybrid: boolean;
    Onsite: boolean;
    DatePosted: Date;
    ApplicationDate: Date;
    ApplicationTime: Date;
    ApplicationDay: string;
    Responded: boolean;
    ResponseDate: Date;
    ResponseTime: Date;
    ResponseDay: string;
    Denied: boolean;
    EasyApply: boolean;
    SiteFoundOn: string;

    constructor(job: JobJson){
        this.ID = job.JobID;
        this.CompanyName = job.CompanyName;
        this.CompanyURL = job.CompanyURL;
        this.JobTitle = job.JobTitle;
        this.JobDescription = job.JobDescription;
        this.State = job.State;
        this.City = job.City;
        this.Remote = job.Remote;
        this.Hybrid = job.Hybrid;
        this.Onsite = job.Onsite;
        this.DatePosted = job.DatePosted;
        this.ApplicationDate = job.ApplicationDate;
        this.ApplicationTime = job.ApplicationTime;
        this.ApplicationDay = job.ApplicationDay;     
        this.Responded = job.Responded;
        this.ResponseDate = job.ResponseDate;
        this.ResponseTime = job.ResponseTime;
        this.ResponseDay = job.ResponseDay;
        this.Denied = job.Denied;
        this.EasyApply = job.EasyApply;
        this.SiteFoundOn = job.SiteFoundOn;
    }
}