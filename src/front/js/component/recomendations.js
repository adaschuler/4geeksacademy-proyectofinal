import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Recomendations = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="justify-content-sm-center">
			<div className="text-center mt-5">
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Recomendaciones</h5>
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item d-flex bd-highlight mb-3">
							User1
							<br />
							descripcion de recomendacion
							<br />
							Variedad:
							<br />
						</li>
						<li className="list-group-item d-flex bd-highlight mb-3">
							<div className="p-2 bd-highlight">
								<i className="fas fa-star p-2" />
								<i className="fas fa-star p-2" />
								<i className="fas fa-star p-2" />
								<i className="fas fa-star p-2" />
								<i className="fas fa-star p-2" />
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
