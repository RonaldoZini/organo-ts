import './Dropdown.css';

interface DropdownProps {
	label: string;
	required: boolean;
	itens: string[];
	value: string;
	onChange: (value: string) => void;
}

const Dropdown = ({ label, required, itens, value, onChange }: DropdownProps) => {
	return (
		<div className='div-dropdown'>
			<label>{label}</label>
			<select
				onChange={(event) => onChange(event.target.value)}
				required={required}
				value={value}>
				<option></option>
				{itens.map(item => <option key={item}>{item}</option>)}
			</select>
		</div>
	)
}

export default Dropdown