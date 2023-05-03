import React, {Component} from 'react';
import { AddJob_form } from './forms/AddJob_form';

export class AddJob extends Component {
    static displayName = AddJob.name;


    render() {
        return (
            <div>
                <h1>Add a Job</h1>
                <p>Enter the specified information for the job that was applied to,
                    then select submit or press enter for it to be uploaded to the 
                    MySQL database.
                </p>
                <AddJob_form/>
            </div>
            
        );


}
}