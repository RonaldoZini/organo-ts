import { useState } from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import './Home.css';
import RegisterEmployee from './RegisterEmployee';
import Team from './Team';

const Home = () => {
	const employeesMock = require('../../mocks/employees.json');
	const teamsMock = require('../../mocks/teams.json');
	const teamsName = teamsMock.map((team) => team.name);
	const [employees, setEmployees] = useState(employeesMock);

	const onRegisterEmployee = (employee) => {
		setEmployees([...employees, employee]);
	}

	return (
		<>
			<Banner />
			<RegisterEmployee teamsName={teamsName} onRegisterEmployee={value => onRegisterEmployee(value)} />
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