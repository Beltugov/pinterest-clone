import React, {ButtonHTMLAttributes} from "react";
import "./MyButton.scss";

const MyButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({children, ...props}) => {
	return (
		<button
			{...props}
		>
			{children}
		</button>
	);
};

export default MyButton;
