import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import Input from '../Input/Input';
import './Form.css';

const Form = () => {
	const team = [
		'Frontend',
		'Backend',
		'Devops',
		'UX',
		'Mobile'
	];

	const onSave = (event) => {
		event.preventDefault();
		console.log('saving...');
	};

	return (
		<section className='section-form'>
			<form onSubmit={onSave}>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<Input label="Nome" placeholder="Digite seu nome" required={true} />
				<Input label="Cargo" placeholder="Digite seu cargo" required={true} />
				<Input label="Imagem" placeholder="Informe o endereço da imagem" required={true} />
				<Dropdown label="Time" required={true} itens={team} />
				<Button>Criar card</Button>
			</form>
		</section>
	)
}

export default Form;