import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import logo from "../../img/logo.png";

export const Recomendations = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="justify-content-center">
			<div className="text-center mt-5">
				<div className="card align-items-right">
					<div className="card-body">
						<h5 className="card-title">Recomendaciones</h5>
						<p className="card-text">XX Total reviews</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item bd-highlight mb-3">
							<br />
							<i className="fas fa-star p-2" />
							<i className="fas fa-star p-2" />
							<i className="fas fa-star p-2" />
							<i className="fas fa-star p-2" />
							<i className="fas fa-star p-2" />
							<br />
							<img className="img-thumbnail rounded" src={logo} width="50px" />
							User1
							<br />
							descripcion de recomendacion
							<br />
							Variedad:
							<br />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
