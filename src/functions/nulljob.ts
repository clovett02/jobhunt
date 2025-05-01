import { Job } from "../classes/Job.ts";

export function nulljob(){
    return new Job(
        "", "", "", "", "", "", "",
        false, false, false, false, "",
    );
}