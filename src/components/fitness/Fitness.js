import React from 'react';
import './FitnessStyles.css';
import Gold from '../../assets/samuel-girven-RrCvrrYtlqQ-unsplash.jpg';

const Fitness = () => {
	return (
		<div className="fitness">
			<div className="container">
				<div className="col-1">
					<ul>
						<li>Set Targets</li>
						<li>Love Training</li>
						<li>Get Results</li>
					</ul>
					<h4>Put Your Fitness First</h4>
					<p>
						With our flexible FFX membership, get access to up to 45 clubs nationwide, over 1,000 classes a
						week to choose from – all bookable in advance, train with the latest and greatest equipment and
						get the coaching and support you need for your specific goals with our personal trainers.
					</p>
				</div>
				<div className="col-2">
					<div>
						<img src={Gold} alt="/" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fitness;
