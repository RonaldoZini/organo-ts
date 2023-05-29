import './Banner.css';

interface BannerProps {
	imageUrl: string;
	imageAlt?: string;
}

const Banner = ({ imageUrl, imageAlt }: BannerProps) => {
	return (
		<header className='banner'>
			<img
				src={imageUrl}
				alt={imageAlt}
			/>
		</header>
	)
}

export default Banner