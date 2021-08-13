import React, { useContext } from "react";
import { Context } from "../store/appContext";
import newPlant from "../../img/newplant.png";
import mintImageUrl from "../../img/plant/mint.png";
import "../../styles/addspecimen.scss";

export const AddSpecimen = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="justify-content-center">
			<div className="text-center mt-3">
				<div className="card mr-2" style={{ border: "none" }}>
					<div className="card-body d-flex flex-column justify-content-center mt-10">
						<img className="newplant card-img-top" src={newPlant} />
						<br />
						{/* img-thumbnail rounded card-img-top img-fluid img-fluid w-100 */}
						<i className="far fa-plus-square fa-9x" />
					</div>
				</div>
			</div>
		</div>
	);
};
