import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/logo.png";
import "../../styles/navigation.scss";
import logoImageUrl from "../../img/logo.png";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

export const Navigation = () => {
	return (
		<Navbar sticky="top" bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img className="img-fluid w-50" src={logoImageUrl} />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link as={Link} to="/login">
							<Button
								variant="success"
								id="login-btn"
								size="sm"
								className="px-5 py-2 d-flex align-self-center"
								active>
								Login
							</Button>
						</Nav.Link>
						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

/* <nav className="navbar fixed-top navbar-dark bg-dark">
<div className="d-flex align-items-center px-3 flex-grow-1">
	<Link to="/">
		<span className="navbar-brand mb-0">
			<img className="img-fluid w-50" src={logo} />
		</span>
	</Link>
	<div className="ml-auto">
		<button
			className="navbar-toggler"
			type="button"
			data-target="#navbarToggler"
			aria-controls="navbarToggler"
			aria-expanded="false"
			aria-label="Toggle navigation">
			<span className="navbar-toggler-icon" />
		</button>
		<div className="navbar-collapse collapse" id="navbarToggler">
			<ul className="navbar-nav">
				<li className="nav-item">
					<Link to="/login">HOLA</Link>
				</li>
			</ul>
		</div>
		<Link to="/login">
			<button className="btn btn-success px-5" id="login-btn">
				Login
			</button>
		</Link>
	</div>
</div>
</nav> */
