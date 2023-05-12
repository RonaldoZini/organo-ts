import './Dropdown.css';

const Dropdown = (props) => {
	const { label, required, itens } = props;

	return (
		<div className='div-dropdown'>
			<label>{label}</label>
			<select required={required}>
				{itens.map(item => <option key={item}>{item}</option>)}
			</select>
		</div>
	)
}

export default Dropdown