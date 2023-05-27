import { useState } from 'react';
import Banner from '../../components/Banner';
import Form from './Form';
import './Home.css';
import Team from './Team';

const Home = () => {
	const teams = [
		'Frontend',
		'Backend',
		'Devops',
		'UX',
		'Mobile'
	];

	const [employees, setEmployees] = useState([]);

	const onAddEmployee = (employee) => {
		setEmployees([...employees, employee]);
	}

	return (
		<>
			<Banner />
			<Form onAddEmployee={value => onAddEmployee(value)} teams={teams} />
			{teams.map(team => <Team key={team} name={team} />)}
		</>
	)
}

export default Home;