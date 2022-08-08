import React from 'react';
import './BenefitsStyles.css';
import { BiWorld, BiPound } from 'react-icons/bi';
import { GrDocumentStore } from 'react-icons/gr';
import { FiClock } from 'react-icons/fi';
import { FaFileContract } from 'react-icons/fa';
import backGround from '../../assets/pexels-estudio-polaroid-3112004.jpg';

const Benefits = () => {
	return (
		<div name="benefits" className="benefits">
			<img src={backGround} alt="" />
			<div className="content">
				<h2>Benefits</h2>
				<div className="container">
					<div className="grid">
						<div className="top-card">
							<p>
								We're committed to bringing high quality, affordable gyms to everyone, everywhere. We do
								this by keeping our prices,low, making it easy to leave as it is to join, opening our
								gyms night and day and providing our members with the support and inspiration they need
								where and when they need it.
							</p>
						</div>
						<div className="card">
							<BiWorld className="icon" />
							<h4>Largest networks of gyms</h4>
							<p>Over 500+ gyms worldwide. More gyms, in more places than anyone.</p>
							<a href="" className="btn">
								Find your Gym
							</a>
						</div>
						<div className="card">
							<FaFileContract className="icon" />
							<h4>No contract, leave when you like</h4>
							<p>
								No contract means you can leave or freeze online whenever it suits you and rejoin when
								you're ready.
							</p>
							<a href="" className="btn">
								Join now
							</a>
						</div>
						<div className="card">
							<BiPound className="icon" />
							<h4>Always low prices and affordable</h4>
							<p>
								By keeping prices low we can help more people get and stay healthy. There's a range of
								membership options to choose from.
							</p>
							<a href="" className="btn">
								Membership
							</a>
						</div>
						<div className="card">
							<FiClock className="icon" />
							<h4>
								24/7<br />Access
							</h4>
							<p>
								The majority of our gyms are open 24 hours a day, so you can train day or night, making
								it easier to fit a gym session in around your lifestyle.
							</p>
							<a href="" className="btn">
								Join now
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
