import { useState } from 'react';
import Button from '../../../components/Button';
import Dropdown from '../../../components/Dropdown';
import Input from '../../../components/Input';
import './Form.css';

const Form = () => {
	const listTeam = [
		'Frontend',
		'Backend',
		'Devops',
		'UX',
		'Mobile'
	];

	const onSave = (event) => {
		event.preventDefault();
		console.log(`Saving... 
			Nome: ${name}
			Cargo: ${role}
			Imagem: ${image}
			Time: ${team}
		`);
	};

	const [name, setName] = useState('');
	const [role, setRole] = useState('');
	const [image, setImage] = useState('');
	const [team, setTeam] = useState('');

	return (
		<section className='section-form'>
			<form onSubmit={onSave}>
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
					itens={listTeam}
					onChange={value => setTeam(value)}
				/>
				<Button>Criar card</Button>
			</form>
		</section>
	)
}

export default Form;