import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import logoImageUrl from "../../img/logo.png";

export const AdminPlants = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="d-flex justify-content-center">
				<ul className="list-group">
					<h4>MANAGE PLANTAS</h4>
					<li className="list-group-item">
						<tr>
							<td scope="col">
								<img className="img-thumbnail rounded" src={logoImageUrl} width="50px" />
							</td>
							<td scope="col">ID1:blabla</td>
							<td scope="col">
								<i className="fas fa-seedling fa-2x p-2" />
							</td>
							<td scope="col">
								<i className="fas fa-trash-alt fa-2x p-2" />
							</td>
						</tr>
					</li>
				</ul>
			</div>
		</div>
	);
};
