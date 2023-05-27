import './Input.css';

const Input = (props) => {
	const { value, label, placeholder, required } = props;

	const onChange = (event) => props.onChange(event.target.value);

	return (
		<div className='div-input'>
			<label>{label}</label>
			<input
				onChange={onChange}
				value={value}
				required={required}
				placeholder={placeholder}>
			</input>
		</div>
	)
}

export default Input