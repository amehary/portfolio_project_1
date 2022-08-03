import React from 'react';
import './FooterStyles.css';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="top">
					<h3>adrenaline</h3>
					<div className="social-icons">
						<FaFacebook className="icon" />
						<FaInstagram className="icon" />
						<FaTwitter className="icon" />
						<FaPinterest className="icon" />
						<FaYoutube className="icon" />
					</div>
				</div>
				<div className="bottom">
					<ul className="menu-left">
						<li>About</li>
						<li>Partnerships</li>
						<li>Careers</li>
						<li>Newsroom</li>
						<li>Advertising</li>
					</ul>
					<ul className="menu-right">
						<li>Contact</li>
						<li>Terms</li>
						<li>Policy</li>
						<li>Privacy</li>
						<li>Pricing</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
