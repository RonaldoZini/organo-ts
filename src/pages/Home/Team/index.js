import './Team.css';

const Team = (props) => {
	const { name } = props;
	return (
		<section className='time'>
			<h3>{name}</h3>
		</section>
	)
}

export default Team;