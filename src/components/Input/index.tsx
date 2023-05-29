import './Input.css';

interface InputProps {
	value: string;
	label: string;
	placeholder: string;
	required: boolean;
	onChange: (value: string) => void;
}

const Input = ({ value, label, placeholder, required, onChange }: InputProps) => {
	return (
		<div className='div-input'>
			<label>{label}</label>
			<input
				onChange={(event) => onChange(event.target.value)}
				value={value}
				required={required}
				placeholder={placeholder}>
			</input>
		</div>
	)
}

export default Input