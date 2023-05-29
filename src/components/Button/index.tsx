import React, { ReactElement } from 'react';
import './Button.css';

interface ButtonProps {
	children: ReactElement | string,
	type?: string,
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = (props: ButtonProps) => {
	const { children, type } = props;

	return (
		<button className={type} onClick={(event) => props.onClick(event)}>
			{children}
		</button>
	)
}

export default Button;