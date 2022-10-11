import React from "react";

import "./MyInput.scss";
import { IInput } from "../../types/input";

const MyInput: React.FC<IInput> = ({
  placeholder,
  type,
  id,
  value,
  change,
  isError,
}) => {
  return (
    <input
      className={isError ? "my-input error" : "my-input"}
      type={type}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={change}
    />
  );
};

export default MyInput;
