import type { JobJson } from "../dtos/JobJson";
import type { JobFormPostType } from "../interfaces/JobFormPost";

export class Job {
    ID?: number;
    CompanyName: string = "";
    CompanyURL?: string;
    JobTitle: string = "";
    JobDescription?: string;
    State: string = "";
    City: string = "";
    Remote: boolean = false;
    Hybrid: boolean = false;
    Onsite: boolean = false;
    DatePosted?: Date;
    ApplicationDate: Date = new Date;
    ApplicationTime: Date = new Date();
    // ApplicationDay: string;
    Responded?: boolean;
    ResponseDate?: Date;
    ResponseTime?: Date;
    // ResponseDay: string;
    Denied?: boolean;
    EasyApply?: boolean;
    SiteFoundOn?: string;

    constructor(job: JobJson | JobFormPostType | null){
        if(job != null){
            if("Id" in job){
                this.ID = job.Id;
                this.CompanyName = job.CompanyName;
                this.CompanyURL = job.CompanyUrl;
                this.JobTitle = job.JobTitle;
                this.JobDescription = job.JobDescription;
                this.State = job.State;
                this.City = job.City;
                this.Remote = job.Remote;
                this.Hybrid = job.Hybrid;
                this.Onsite = job.Onsite;
                this.DatePosted = new Date(job.DatePosted);
                this.ApplicationDate = new Date(job.ApplicationDate);
                this.ApplicationTime = new Date(job.ApplicationTime);
                // this.ApplicationDay = job.ApplicationDay;     
                this.Responded = job.Responded;
                this.ResponseDate = job.ResponseDate;
                this.ResponseTime = job.ResponseTime;
                // this.ResponseDay = job.ResponseDay;
                this.Denied = job.Denied;
                this.EasyApply = job.EasyApply;
                this.SiteFoundOn = job.SiteFoundOn;
            } else {
                this.CompanyName = job.CompanyName;
                this.JobTitle = job.JobTitle;
                this.State = job.State;
                this.City = job.City;
                this.Remote = job.Remote;
                this.Hybrid = job.Hybrid;
                this.Onsite = job.Onsite;
                this.ApplicationDate = new Date(job.ApplicationDate);
                this.ApplicationTime = new Date(job.ApplicationTime);
                this.SiteFoundOn = job.SiteFoundOn;            
            }
        } else if(job === null) {
            this.CompanyName = "";
            this.JobTitle = "";
            this.State = "";
            this.City = "";
            this.Remote = false;
            this.Hybrid = false;
            this.Onsite = false;
            this.ApplicationDate = new Date();
            this.ApplicationTime = new Date();
            this.SiteFoundOn = "";
        }

    }
}