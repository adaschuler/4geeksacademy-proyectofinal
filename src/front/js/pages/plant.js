import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Specimen } from "../component/specimen";
/* import { Carouselcomponent } from "../component/carouselcomponent"; */
import { ControlledCarousel } from "../component/carouselcomponent";
import { Recomendations } from "../component/recomendations";

export const Plant = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="">
				<Specimen />
				{/* <Carouselcomponent /> */}
				<ControlledCarousel />
				<Recomendations />
			</div>
		</div>
	);
};
