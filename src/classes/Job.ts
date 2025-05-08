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
    // ApplicationDay: string;
    Responded: boolean;
    ResponseDate: Date;
    ResponseTime: Date;
    // ResponseDay: string;
    Denied: boolean;
    EasyApply: boolean;
    SiteFoundOn: string;

    constructor(job: JobJson){
        this.ID = job.id;
        this.CompanyName = job.companyName;
        this.CompanyURL = job.companyUrl;
        this.JobTitle = job.jobTitle;
        this.JobDescription = job.jobDescription;
        this.State = job.state;
        this.City = job.city;
        this.Remote = job.remote;
        this.Hybrid = job.hybrid;
        this.Onsite = job.onsite;
        this.DatePosted = new Date(job.datePosted);
        this.ApplicationDate = new Date(job.applicationDate);
        this.ApplicationTime = new Date(job.applicationTime);
        // this.ApplicationDay = job.ApplicationDay;     
        this.Responded = job.responded;
        this.ResponseDate = job.responseDate;
        this.ResponseTime = job.responseTime;
        // this.ResponseDay = job.ResponseDay;
        this.Denied = job.denied;
        this.EasyApply = job.easyApply;
        this.SiteFoundOn = job.siteFoundOn;
    }
}