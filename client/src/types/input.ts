import React from "react";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    isError?: boolean;
}

export interface IFormInput extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string,
    placeholder: string,
    setValue: (e: string) => void,
    errorMessage: string | null
}
