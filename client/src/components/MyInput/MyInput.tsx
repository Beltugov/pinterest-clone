import React from "react";

import "./MyInput.scss";
import {IInput} from "../../types/input";

const MyInput: React.FC<IInput> = ({isError, ...props}) => {
    return (
        <input
            className={isError ? "my-input error" : "my-input"}
            {...props}
        />
    );
};

export default MyInput;
