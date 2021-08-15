import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import logoImageUrl from "../../img/logo.png";

export const AdminDashboard = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="d-flex justify-content-center">
				<div>
					<h4>PERFIL ADMINISTRADOR</h4>
					<p />
					<img className="img-thumbnail rounded" src={logoImageUrl} width="50px" />
					<p />
					Usuario: <p />
					Nombre: <p />
					Apellido: <p />
					email: <p />
					Rol: <p />
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<div className="m-2">
					<Link to="/adminusers">
						<button type="button" className="btn btn-success">
							<h6>USUARIOS</h6>
						</button>
					</Link>
				</div>
				<div className="m-2">
					<Link to="/adminplants">
						<button type="button" className="btn btn-success">
							<h6>PLANTAS</h6>
						</button>
					</Link>
				</div>
			</div>
			<div>
				<div className="col-12 m-2 d-flex justify-content-center">
					<h6>ESTADISTICAS GENERALES</h6>
				</div>
				<div className="d-flex justify-content-center">
					<p className="lead text-white">
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<img src={logoImageUrl} />
							</li>
							<li className="list-group-item">
								<img src={logoImageUrl} />
							</li>
						</ul>
					</p>
					{/* cantidad de usuarios / frecuencia de uso <p /> */}
				</div>
			</div>
		</div>
	);
};
