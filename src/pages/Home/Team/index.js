import Employee from '../Employee';
import './Team.css';

const Team = (props) => {
	const { employees } = props;
	const { name, colorPrimary, colorSecondary } = props.team;

	return (
		props.employees.length > 0 && <section
			className='team'
			style={{ backgroundColor: colorSecondary }}>
			<h3
				style={{ borderColor: colorPrimary }}>
				{name}
			</h3>
			<div class="employees">
				{employees.map(employee => <Employee
					key={employee.name}
					employee={employee}
					headerColor={colorPrimary}
				/>)}
			</div>
		</section>
	)
}

export default Team;