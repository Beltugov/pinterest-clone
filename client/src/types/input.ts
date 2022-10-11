import React from "react";

export interface IInput {
  id?: string;
  type?: string;
  value: string;
  isError?: boolean;
  change: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}
