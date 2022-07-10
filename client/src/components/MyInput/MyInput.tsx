import React from "react";

import "./MyInput.scss";

interface IInput {
  placeholder: string;
}

const MyInput: React.FC<IInput> = ({ placeholder }) => {
  return <input className="my-input" type="text" placeholder={placeholder} />;
};

export default MyInput;
