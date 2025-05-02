import { fetchjobByID } from "../functions/fetchjob";

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
    ResponseDate: DataTransfer;
    ResponseTime: Date;
    ResponseDay: string;
    Denied: boolean;
    EasyApply: boolean;
    SiteFoundOn: string;


    // constructor(ID: string){
    //     this.ID = ID;
    // }

    constructor(ID:string, CompanyName:string, CompanyURL:string, JobTitle:string, 
        JobDescription:string, State:string, City:string, Remote:boolean, Hybrid:boolean,
        Onsite:boolean, Responded:boolean, SiteFoundOn:string){
        this.ID = ID;
        this.CompanyName = CompanyName;
        this.CompanyURL = CompanyURL;
        this.JobTitle = JobTitle;
        this.JobDescription = JobDescription;
        this.State = State;
        this.City = City;
        this.Remote = Remote;
        this.Hybrid = Hybrid;
        this.Onsite = Onsite;
        this.Responded = Responded;
        this.SiteFoundOn = SiteFoundOn;
    }
}