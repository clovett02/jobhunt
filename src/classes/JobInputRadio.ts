import type { ChangeEvent } from "react";

interface radioinputtype {
        type: string,
        placeholder: string,
        id: string,
        name: string,
        value: string,
        onchange: ChangeEvent<HTMLElement>
}

export class JobInputRadio {
    label = {
                for: "",
                text: ""
            };
    input: radioinputtype;

    constructor(name: string, text: string, onchange: any){

        this.label = {
            for: name,
            text: text
        }
        
        this.input = {
            type: "radio",
            placeholder: text,
            id: text,
            name: name,
            value: text,
            onchange: onchange
        }
    }
}