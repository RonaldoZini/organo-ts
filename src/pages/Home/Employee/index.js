import './Employee.css';

const Employee = (props) => {
	const { headerColor } = props;
	const { name, role, image } = props.employee;

	return (
		<div className='card'>
			<div className='header' style={{ backgroundColor: headerColor }}></div>
			<div className='image'>
				{image && <img src={image} alt={`image-of-${name}`}></img>}
			</div>
			<div className='body'>
				<label className='name'>{name}</label>
				<label className='role'>{role}</label>
			</div>
		</div>
	)
}

export default Employee;