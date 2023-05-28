import './Footer.css';

const Footer = () => {
	return (
		<footer>
			<div className='content'>
				<div className='contact'>
					<img src="/images/fb.png" alt="logo-fb" />
					<img src="/images/tw.png" alt="logo-twitter" />
					<img src="/images/ig.png" alt="logo-instagram" />
				</div>
				<div className='logo'>
					<img src="/images/logo.png" alt="logo-organo" />
				</div>
				<div className='developed'>
					<label>Desenvolvido por Ronaldo Zini.</label>
				</div>
			</div>
		</footer>
	)
}

export default Footer;