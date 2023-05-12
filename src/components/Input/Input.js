import './Input.css';

const Input = (props) => {
	const { label, placeholder, required } = props;
	return (
		<div className='div-input'>
			<label>{label}</label>
			<input required={required} placeholder={placeholder}></input>
		</div>
	)
}

export default Input