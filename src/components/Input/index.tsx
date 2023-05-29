import './Input.css';

interface InputProps {
	value: string;
	label: string;
	placeholder?: string;
	required?: boolean;
	type?: 'text' | 'password' | 'date' | 'email' | 'number';
	onChange: (value: string) => void;
}

const Input = ({ value, label, placeholder, required, type = 'text', onChange }: InputProps) => {
	return (
		<div className='div-input'>
			<label>{label}</label>
			<input
				onChange={(event) => onChange(event.target.value)}
				value={value}
				required={required}
				type={type}
				placeholder={placeholder}>
			</input>
		</div>
	)
}

export default Input