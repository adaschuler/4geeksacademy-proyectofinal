import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/navbar.scss";

export const Navbar = () => {
	return (
		<nav className="navbar fixed-top navbar-light bg-dark px-3">
			<Link to="/">
				<span className="navbar-brand mb-0">
					<img className="img-fluid w-50" src={logo} />
				</span>
			</Link>
			<div className="ml-auto">
				<Link to="/login">
					<button className="btn btn-success px-5">Login</button>
				</Link>
			</div>
		</nav>
	);
};
