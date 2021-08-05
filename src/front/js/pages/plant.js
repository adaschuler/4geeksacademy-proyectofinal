import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Specimen } from "../component/specimen";

export const Plant = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row container-fluid d-flex justify-content-center">
			<Specimen />
		</div>
	);
};
