export interface JobFormPostType {
    CompanyName: string;
    JobTitle: string;
    State: string;
    City: string;
    Remote: boolean;
    Hybrid: boolean;
    Onsite: boolean;
    ApplicationDate: Date;
    ApplicationTime: Date;
    SiteFoundOn: string;   
}