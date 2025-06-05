import type { ChangeEvent } from "react";

interface dateinputtype {
        type: string,
        id: string,
        name: string,
        value: string,
        onchange: ChangeEvent<HTMLElement>
}

export class JobInputDate {
    label = {
                for: "",
                text: ""
            };
    input: dateinputtype;

    constructor(name: string, text: string, value: string, onchange: any, type: string = "date"){

        this.label = {
            for: name,
            text: text
        }
        
        this.input = {
            type: type,
            id: name,
            name: name,
            value: value,
            onchange: onchange
        }
    }
}