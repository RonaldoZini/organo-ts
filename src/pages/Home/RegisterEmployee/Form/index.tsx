import React, { useState } from 'react';
import Button from '../../../../components/Button';
import Dropdown from '../../../../components/Dropdown';
import Input from '../../../../components/Input';
import { IEmployee } from '../../../../shared/interfaces/IEmployee';
import './Form.css';

interface FormProps {
	teamsName: string[];
	onSave: (employee: IEmployee) => void;
}

const Form = ({ teamsName, onSave }: FormProps) => {
	const [name, setName] = useState<string>('');
	const [role, setRole] = useState<string>('');
	const [image, setImage] = useState<string>('');
	const [teamName, setTeamName] = useState<string>('');

	const onSaveForm = (event?: React.FormEvent<HTMLFormElement>) => {
		event?.preventDefault();
		onSave({ name, role, image, teamName });

		clearFields();
	};

	const clearFields = () => {
		setName('');
		setRole('');
		setImage('');
		setTeamName('');
	}

	return (
		<section className='section-form'>
			<form onSubmit={(event) => onSaveForm(event)}>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<Input
					value={name}
					label="Nome"
					placeholder="Digite seu nome"
					required={true}
					onChange={value => setName(value)}
				/>
				<Input
					value={role}
					label="Cargo"
					placeholder="Digite seu cargo"
					required={true}
					onChange={value => setRole(value)}
				/>
				<Input
					value={image}
					label="Imagem"
					placeholder="Informe o endereço da imagem"
					required={true}
					onChange={value => setImage(value)}
				/>
				<Dropdown
					label="Time"
					required={true}
					itens={teamsName}
					value={teamName}
					onChange={value => setTeamName(value)}
				/>
				<Button
					onClick={() => onSaveForm}>
					Criar card
				</Button>
			</form>
		</section>
	)
}

export default Form;