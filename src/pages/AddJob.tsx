import { AddJobForm } from '../components/forms/AddJobForm';

/**
 * Page for adding jobs to database. Contains AddJobForm.
 */
export function AddJob() {
    return (
        <div>
            <h1>Add a Job</h1>
            <p>Enter the specified information for the job that was applied to,
                then select submit or press enter for it to be uploaded to the 
                MySQL database.
            </p>
            <AddJobForm/>
        </div>
        
    );

}