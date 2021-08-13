import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Specimen } from "../component/specimen";
import { ControlledCarousel } from "../component/carouselcomponent";
import { Recomendations } from "../component/recomendations";

export const Plant = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row justify-content-md-center">
				<div className="col-xs-10 col-sm-8 col-md-6">
					<Specimen />
					<ControlledCarousel />
					<Recomendations />
				</div>
			</div>
		</div>
	);
};
