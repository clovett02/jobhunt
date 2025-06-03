import type { ChangeEvent } from "react";

interface textinputtype {
        type: string,
        placeholder: string,
        id: string,
        name: string,
        value: string,
        onchange: ChangeEvent<HTMLElement>
}

export class JobInputText {
    label = {
                for: "",
                text: ""
            };
    input: textinputtype;

    constructor(name: string, text: string, value: string, onchange: any){

        this.label = {
            for: name,
            text: text
        }
        
        this.input = {
            type: "text",
            placeholder: name,
            id: name,
            name: name,
            value: value,
            onchange: onchange
        }
    }
}