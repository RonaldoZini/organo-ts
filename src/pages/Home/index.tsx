import { useState } from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import { IEmployee } from '../../shared/interfaces/IEmployee';
import { ITeam } from '../../shared/interfaces/ITeam';
import './Home.css';
import RegisterEmployee from './RegisterEmployee';
import Team from './Team';

const Home = () => {
	const employeesMock = require('../../mocks/employees.json') as IEmployee[];
	const teamsMock = require('../../mocks/teams.json') as ITeam[];
	const teamsName = teamsMock.map((team) => team.name);
	const [employees, setEmployees] = useState<IEmployee[]>(employeesMock);

	const onRegisterEmployee = (employee: IEmployee) => {
		setEmployees([...employees, employee]);
	}

	return (
		<>
			<Banner imageUrl='/images/banner.png' imageAlt='banner-organo' />
			<RegisterEmployee teamsName={teamsName} onRegisterEmployee={value => onRegisterEmployee(value)} />
			{teamsMock.map(team => <Team
				key={team.name}
				team={team}
				employees={employees.filter(employee => employee.teamName === team.name)}
			/>)}
			<Footer />
		</>
	)
}

export default Home;