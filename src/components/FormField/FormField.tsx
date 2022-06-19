import React from 'react';
import {LabelInput, TextInput} from "./styles";

function FormField(props : any) {
    return (
        <div>
            <LabelInput htmlFor={props.title}> {props.title} </LabelInput>
            <TextInput name={props.title} type={props.type} placeholder={props.placeholder} required></TextInput>
        </div>
    );
}

export default FormField;
