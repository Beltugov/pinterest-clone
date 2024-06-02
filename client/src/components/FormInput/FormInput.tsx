import React from 'react';
import MyInput from "../MyInput/MyInput";
import {IFormInput} from "../../types/input";


const FormInput: React.FC<IFormInput> = ({type, placeholder, value, setValue, required, errorMessage, onInput}) => {

    return (
        <>
            <label htmlFor={type}>{placeholder}:</label>
            <MyInput
                isError={!!(errorMessage)}
                required={required}
                type={type}
                id={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onInput={onInput}
            />
            {!!(errorMessage) && (
                <span className="error-message">* {errorMessage}</span>
            )}
        </>
    );
};

export default FormInput;