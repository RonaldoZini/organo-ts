import { IEmployee } from '../../../shared/interfaces/IEmployee';
import './Employee.css';

interface EmployeeProps {
	headerColor: string;
	employee: IEmployee;
}

const Employee = ({ headerColor, employee }: EmployeeProps) => {
	const { name, role, image } = employee;

	return (
		<div className='card'>
			<div className='header' style={{ backgroundColor: headerColor }}></div>
			<div className='image'>
				{image && <img src={image} alt={`avatar-${name}`}/>}
			</div>
			<div className='body'>
				<label className='name'>{name}</label>
				<label className='role'>{role}</label>
			</div>
		</div>
	)
}

export default Employee;