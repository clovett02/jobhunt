
export type JobJson = {
    Id: number;
    CompanyName: string;
    CompanyUrl: string;
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
}
