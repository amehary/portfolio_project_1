import React from 'react';
import './PersonalStyles.css';
import Trainer from '../../assets/pexels-pixabay-414029.jpg';

const Personal = () => {
	return (
		<div className="personal">
			<div className="container">
				<div className="col-1">
					<div>
						<img src={Trainer} alt="/" />
					</div>
				</div>
				<div className="col-2">
					<h4>Maximise your results with our expert personal trainers</h4>
					<p>
						There are so many reasons why a personal trainer is essential to achieving your fitness goals,
						whether they be weight loss-based, sports-driven or for athletic purposes. Here, we’ve put
						together the most critical reasons why you should have a personal trainer, as well as the
						benefits that you are likely to achieve by working with one.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Personal;
