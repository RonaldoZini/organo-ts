import { IEmployee } from '../../../shared/interfaces/IEmployee';
import { ITeam } from '../../../shared/interfaces/ITeam';
import Employee from '../Employee';
import './Team.css';

interface TeamProps {
	employees: IEmployee[];
	team: ITeam;
}

const Team = ({ employees, team }: TeamProps) => {
	const { name, colorPrimary, colorSecondary } = team;

	return (
		employees.length > 0 ? <section
			className='team'
			style={{ backgroundColor: colorSecondary }}>
			<h3
				style={{ borderColor: colorPrimary }}>
				{name}
			</h3>
			<div className="employees">
				{employees.map(employee => <Employee
					key={employee.name}
					employee={employee}
					headerColor={colorPrimary}
				/>)}
			</div>
		</section> : <></>
	)
}

export default Team;