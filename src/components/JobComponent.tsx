import React from "react"
import { Job } from "../classes/Job"
import '../css/components/JobComponent.css'

export function JobComponent(props:{job:Job}){
    const job = props.job;

    function RemoteHybridOnsitetoString(r,  h,  o){
        if (r){return "Remote";}
        if (h){return "Hybrid";}
        if (o){return "Onsite";}
        return "";
    }

    function ReturnJobURL(jobid){
        return "/updatejob/?jobid=" + jobid
    }

    return (
        <tr className="tablerow">
            <td>{job.CompanyName}</td>
            <td><a href={ReturnJobURL(job.ID)} className="joblink">{job.JobTitle}</a></td>
            <td>{job.City} {job.State}</td>
            <td>{RemoteHybridOnsitetoString(job.Remote, job.Hybrid, job.Onsite)}</td>
            <td>{`${job.ApplicationDate}`}</td>
            <td>{`${job.ApplicationTime}`}</td>
            <td>{job.SiteFoundOn}</td>
            <td>{job.EasyApply}</td>
        </tr>
    )
}