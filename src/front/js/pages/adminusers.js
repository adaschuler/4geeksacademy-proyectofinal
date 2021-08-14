import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import logoImageUrl from "../../img/logo.png";

export const AdminUsers = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container justify-content-center">
			<h2>USUARIOS</h2>
			<img className="img-thumbnail rounded justify-content-center" src={logoImageUrl} width="50px" />
			ID1:
			<i className="far fa-user-circle fa-2x p-2" />
			<i className="fas fa-trash-alt fa-2x p-2" />
			<i className="fas fa-ban fa-2x p-2" />
		</div>
	);
};
