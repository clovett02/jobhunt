import type { ChangeEvent } from "react";

interface checkboxinputtype {
        type: string,
        placeholder: string,
        id: string,
        name: string,
        value: boolean,
        onchange: ChangeEvent<HTMLElement>
}

export class JobInputCheckbox {
    label = {
                for: "",
                text: ""
            };
    input: checkboxinputtype;

    constructor(name: string, text: string, value: boolean, onchange: any){

        this.label = {
            for: name,
            text: text
        }
        
        this.input = {
            type: "checkbox",
            placeholder: name,
            id: name,
            name: name,
            value: value,
            onchange: onchange
        }
    }
}