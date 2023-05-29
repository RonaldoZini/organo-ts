import { useState } from 'react';
import Button from '../../../components/Button';
import { IEmployee } from '../../../shared/interfaces/IEmployee';
import Form from './Form';
import './RegisterEmployee.css';

interface RegisterEmployeeProps {
	teamsName: string[];
	onRegisterEmployee: (employee: IEmployee) => any;
}

const RegisterEmployee = ({ teamsName, onRegisterEmployee }: RegisterEmployeeProps) => {
	const [showForm, setShowForm] = useState<boolean>(false);

	return (
		<>
			<div className='my-organization'>
				<div className='div-ghost'></div>
				<div className='content'>
					<h1>Minha Organização</h1>
				</div>
				<div className='add'>
					<Button type="rounded" onClick={() => setShowForm(!showForm)}>
						<img src={!showForm ? '/images/add.svg' : '/images/close.svg'} alt='icon-add-or-close' />
					</Button>
				</div>
			</div>
			{showForm && <Form
				onSave={(value) => onRegisterEmployee(value)}
				teamsName={teamsName}
			/>}
		</>
	)
}

export default RegisterEmployee;