import React from "react";
import "./MyButton.scss";

interface IMyButton {
  children?: React.ReactNode;
  // onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const MyButton: React.FC<IMyButton> = ({ children }) => {
  return <button className="my-button">{children}</button>;
};

export default MyButton;
