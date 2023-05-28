import './Button.css';

const Button = (props) => {
	const { children, type } = props;

	return (
		<button className={type} onClick={(event) => props.onClick(event)}>
			{children}
		</button>
	)
}

export default Button