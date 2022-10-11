import React from "react";

type buttonType = "button" | "submit" | "reset";

export interface IButton {
  type?: buttonType;
  className: string;
  children?: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
