import React, { useState } from 'react';
import './NavbarStyles.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosFitness } from 'react-icons/io';
import Logo from '../../assets/fitness_active.png';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
	const [ nav, setNav ] = useState(false);
	const handleNav = () => setNav(!nav);
	return (
		<div className="navbar">
			<div className="container">
				<div className="logo">
					<IoIosFitness className="main-icon" />
					<h2>adrenaline</h2>
				</div>
				<ul className="nav-menu">
					<li>Home</li>
					<li>Benefits</li>
					<li>Clients</li>
					<li>Purchase</li>
					<li>Contact</li>
				</ul>
				<div className="hamburger" onClick={handleNav}>
					{nav ? <AiOutlineClose className="icon" /> : <GiHamburgerMenu className="icon" />}
				</div>
				<div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
					<ul className="mobile-nav">
						<li>Home</li>
						<li>Benefits</li>
						<li>Clients</li>
						<li>Purchase</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
