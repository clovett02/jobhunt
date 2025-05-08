
export type JobJson = {
    id: string;
    companyName: string;
    companyUrl: string;
    jobTitle: string;
    jobDescription: string;
    state: string;
    city: string;
    remote: boolean;
    hybrid: boolean;
    onsite: boolean;
    datePosted: Date;
    applicationDate: Date;
    applicationTime: Date;
    // ApplicationDay: string;
    responded: boolean;
    responseDate: Date;
    responseTime: Date;
    // ResponseDay: string;
    denied: boolean;
    easyApply: boolean;
    siteFoundOn: string;
}