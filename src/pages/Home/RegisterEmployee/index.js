import { useState } from 'react';
import Button from '../../../components/Button';
import Form from './Form';
import './RegisterEmployee.css';

const RegisterEmployee = (props) => {
	const { teamsName } = props;
	const [showForm, setShowForm] = useState(false);

	return (
		<>
			<div className='my-organization'>
				<div className='div-ghost'></div>
				<div className='content'>
					<h1>Minha Organização</h1>
				</div>
				<div className='add'>
					<Button type="rounded" onClick={() => setShowForm(!showForm)}>
						<img src={ !showForm ? '/images/add.svg' : '/images/close.svg'} />
					</Button>
				</div>
			</div>
			{showForm && <Form
				onSave={value => props.onRegisterEmployee(value)}
				teamsName={teamsName}
			/>}
		</>
	)
}

export default RegisterEmployee;