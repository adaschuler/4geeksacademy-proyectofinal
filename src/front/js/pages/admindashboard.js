import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import logoImageUrl from "../../img/logo.png";

export const AdminDashboard = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-6">
					PERFIL
					<p />
					<img className="img-thumbnail rounded justify-content-center" src={logoImageUrl} width="50px" />
					<p />
					Usuario: <p />
					Nombre: <p />
					Apellido: <p />
					email: <p />
					Rol: <p />
				</div>
			</div>
			<div className="row">
				<div className="col-6 mr-2">
					<button type="button" className="btn btn-success">
						USUARIOS
					</button>
				</div>
				<div className="col-6 mr-2">
					<button type="button" className="btn btn-success">
						PLANTAS
					</button>
				</div>
				<div className="col-12 mr-2">
					<button type="button" className="btn btn-success">
						ESTADISTICAS GENERALES
					</button>
					<p className="lead text-white">
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<img src={logoImageUrl} />
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
