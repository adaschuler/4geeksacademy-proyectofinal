import React, { useContext } from "react";
import { Context } from "../store/appContext";
import logoImageUrl from "../../img/logo.png";
import mintImageUrl from "../../img/mint.png";
import "../../styles/home.scss";

export const Specimen = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="d-flex justify-content-center row">
			<div className="col-6 text-center mt-5">
				<div className="card">
					<img className="card-img-top img-fluid" src={mintImageUrl} />
					<div className="card-body">
						{/* <h5 className="card-title">Card title</h5> */}
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item d-flex flex-row-reverse">
							<i className="far fa-smile fa-2x p-2" />
							<i className="far fa-sun fa-2x p-2" />
							<i className="fas fa-tint fa-2x p-2" />
							<i className="fas fa-thermometer-half fa-2x p-2" />
						</li>
						<li className="list-group-item">
							Nombre:
							<br />
							ID:
							<br />
							Variedad:
							<br />
						</li>
						<li className="list-group-item">
							<img src={logoImageUrl} />
							<img src={logoImageUrl} />
						</li>
					</ul>
					<div className="card-body">
						<a href="#" className="card-link">
							Card link
						</a>
						<a href="#" className="card-link">
							Another link
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
