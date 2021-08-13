import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logoImageUrl from "../../img/logo.png";
import mintImageUrl from "../../img/plant/mint.png";
import "../../styles/home.scss";

export const Specimen = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="justify-content-sm-center">
			<div className="text-center mt-3">
				<div className="card mr-2">
					<img className="card-img-top img-fluid" src={mintImageUrl} alt="Card image cap" />
					<div className="card-body">
						{/* <h5 className="card-title">Card title</h5> */}
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item d-flex bd-highlight mb-3">
							<div className="p-2 bd-highlight">
								<i className="fas fa-trash-alt fa-2x p-2" />
							</div>
							<div className="ml-auto p-2 bd-highlight">
								<i className="far fa-smile fa-2x p-2" />
								<i className="far fa-sun fa-2x p-2" />
								<i className="fas fa-tint fa-2x p-2" />
								<i className="fas fa-thermometer-half fa-2x p-2" />
							</div>
						</li>
						<li className="list-group-item d-flex justify-content-start">
							Nombre:
							<br />
							ID:
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
