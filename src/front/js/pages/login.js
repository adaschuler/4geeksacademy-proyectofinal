import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import logo from "../../img/logo.png";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container d-flex justify-content-center">
			<div className="text-center mt-5">
				<img className="img-fluid w-50" src={logo} />
				<form>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Ingresa tu email"
						/>
						<small id="emailHelp" className="form-text text-muted">
							{/* We'll never share your email with anyone else. */}
						</small>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
						<a className="underlineHover text-secondary" href="#">
							¿Olvidaste tu clave?
						</a>
					</div>
					<button type="submit" className="btn btn-outline-success btn-block">
						Ingresar
					</button>
				</form>
				<p />
				<button type="submit" className="btn btn-outline-success btn-block">
					Registrarse
				</button>
			</div>
		</div>
	);
};
