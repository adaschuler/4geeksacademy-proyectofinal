import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/plantdashboard.scss";
import logoImageUrl from "../../img/logo.png";
import { Specimen } from "../component/specimen";
import { AddSpecimen } from "../component/addspecimen";

export const PlantDashboard = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div className="row no-gutters">
				<div className="h-100 col-xs-12 col-sm-6 col-md-4">
					<div className="footer-widget">
						<AddSpecimen />
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-4">
					<div className="footer-widget">
						<Specimen />
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-4">
					<div className="footer-widget">
						<Specimen />
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-4">
					<div className="footer-widget">
						<Specimen />
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-4">
					<div className="footer-widget">
						<Specimen />
					</div>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-4">
					<div className="footer-widget">
						<Specimen />
					</div>
				</div>
			</div>
		</div>
	);
};
