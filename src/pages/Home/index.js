import { useState } from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Form from './Form';
import './Home.css';
import Team from './Team';

const Home = () => {
	const employeesMock = require('../../mocks/employees.json');
	const teamsMock = require('../../mocks/teams.json');
	const teamsName = teamsMock.map((team) => team.name);
	const [employees, setEmployees] = useState(employeesMock);

	const onAddEmployee = (employee) => {
		setEmployees([...employees, employee]);
	}

	return (
		<>
			<Banner />
			<Form
				onAddEmployee={value => onAddEmployee(value)}
				teamsName={teamsName}
			/>
			{teamsMock.map(team => <Team
				key={team.name}
				team={team}
				employees={employees.filter(employee => employee.teamName == team.name)}
			/>)}
			<Footer />
		</>
	)
}

export default Home;