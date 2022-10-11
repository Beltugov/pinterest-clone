import React from "react";
import "./MyButton.scss";
import { IButton } from "../../types/button";

const MyButton: React.FC<IButton> = ({
  className,
  children,
  onClick,
  type,
}) => {
  return (
    <button
      className={className}
      type={type}
      onClick={(event) => onClick(event)}
    >
      {children}
    </button>
  );
};

export default MyButton;
