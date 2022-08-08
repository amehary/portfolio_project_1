import React, { useState } from 'react';
import './NavbarStyles.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosFitness } from 'react-icons/io';
import Logo from '../../assets/fitness_active.png';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [ nav, setNav ] = useState(false);
	const handleNav = () => setNav(!nav);

	const closeNav = () => setNav(false);

	return (
		<div className="navbar">
			<div className="container">
				<div className="logo">
					<IoIosFitness className="main-icon" />
					<h2>adrenaline</h2>
				</div>
				<ul className="nav-menu">
					<Link to="home" smooth={true} duration={500}>
						<li>Home</li>
					</Link>
					<Link to="benefits" smooth={true} duration={500}>
						<li>Benefits</li>
					</Link>
					<Link to="personal" smooth={true} duration={500}>
						<li>Clients</li>
					</Link>
					<Link to="footer" smooth={true} duration={500}>
						<li>Contact</li>
					</Link>
				</ul>
				<div className="hamburger" onClick={handleNav}>
					{nav ? <AiOutlineClose className="icon" /> : <GiHamburgerMenu className="icon" />}
				</div>
				<div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
					<ul className="mobile-nav">
						<Link to="home" onClick={closeNav} smooth={true} duration={500}>
							<li>Home</li>
						</Link>
						<Link to="benefits" onClick={closeNav} smooth={true} duration={500}>
							<li>Benefits</li>
						</Link>
						<Link to="personal" onClick={closeNav} smooth={true} duration={500}>
							<li>Clients</li>
						</Link>
						<Link to="footer" onClick={closeNav} smooth={true} duration={500}>
							<li>Contact</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
