import React from 'react';
import './HomeStyles.css';
import GymFloor from '../../assets/luis-vidal-FodEsaNZs48-unsplash.jpg';

const Home = () => {
	return (
		<div name="home" className="home">
			<img src={GymFloor} alt="" />
			<div className="container">
				<div className="content">
					<div>
						<h4>Get Your First Month For</h4>
						<h1>Only £10</h1>
						<p>No Joining Fee | Limited Time Only</p>
						<button>Join Now</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
