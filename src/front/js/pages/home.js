import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			<div className="jumbotron jumbotron-fluid">
				<div className="container pt-5">
					<h1 className="display-4 text-white text-uppercase">Lorem ipsum</h1>
					<p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<div className="d-flex justify-content-center py-4">
						<Link to="/demo">
							<button className="btn btn-success px-5 py-2 mx-1">Login</button>
						</Link>
						<Link to="/demo">
							<button className="btn btn-secondary px-5 py-2 mx-1">Sign up</button>
						</Link>
					</div>
				</div>
			</div>
			{/* 			<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div> */}
			{/* 			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p> */}
		</div>
	);
};
