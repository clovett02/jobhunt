
export type JobJson = {
    JobID: string;
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
}