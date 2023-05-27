import './Dropdown.css';

const Dropdown = (props) => {
	const { label, required, itens } = props;

	const onChange = (event) => props.onChange(event.target.value);

	return (
		<div className='div-dropdown'>
			<label>{label}</label>
			<select
				onChange={onChange}
				required={required}>
				{itens.map(item => <option key={item}>{item}</option>)}
			</select>
		</div>
	)
}

export default Dropdown