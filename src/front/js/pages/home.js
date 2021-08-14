import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import imgApi from "../../img/logostech/api.png";
import imgBoostrap from "../../img/logostech/bootstrap.png";
import imgFlask from "../../img/logostech/flask.png";
import imgHtml5 from "../../img/logostech/html5.png";
import imgCss3 from "../../img/logostech/css3.png";
import imgJavascript from "../../img/logostech/javascript.png";
import imgNodeJs from "../../img/logostech/nodejs.png";
import imgPython from "../../img/logostech/python.png";
import imgReact from "../../img/logostech/react.png";
import logoImageUrl from "../../img/logo.png";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center">
			{/* <div className="jumbotron jumbotron-fluid">
				<div className="container pt-5">
					<h1 className="display-4 text-white text-uppercase">Lorem ipsum</h1>
					<p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					<div className="d-flex justify-content-center py-4">
						<Link to="/demo">
							<button className="btn btn-success px-5 py-2 mx-1">Log in</button>
						</Link>
						<Link to="/demo">
							<button className="btn btn-secondary px-5 py-2 mx-1">Sign up</button>
						</Link>
					</div>
				</div>
			</div> */}
			<div className="home">
				<div className="container pt-5">
					<div>
						<h1 className="display-4 text-white text-uppercase">PLANTIOT - CUIDADOS PARA PLANTAS</h1>
						<p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<br />
					<div>
						<h6 className="display-4 text-white text-uppercase">¿QUE ES PLANTIOT?</h6>
						<p className="lead text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<br />
					<div>
						<h6 className="display-4 text-white text-uppercase">FUNCIONALIDADES</h6>
						<p className="lead text-white">
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									<img src={logoImageUrl} />
									<img src={logoImageUrl} />
								</li>
							</ul>
						</p>
					</div>
					<br />
					<div>
						<h6 className="display-4 text-white text-uppercase">INDUSTRIAS FAVORECIDAS</h6>
					</div>
					<br />
					<div>
						<h6 className="display-4 text-white text-uppercase">LINEA DE DESARROLLO</h6>
					</div>
					<br />
					<div>
						<h6 className="display-4 text-white text-uppercase">TECNOLOGIAS DIGITALES UTILIZADAS</h6>
					</div>
				</div>
				<div className="row justify-content-center">
					<ul className="list-group list-group-flush">
						<li className="list-group-item">
							<img className="col-1" src={imgApi} />
							<img className="col-1" src={imgBoostrap} />
							<img className="col-1" src={imgFlask} />
							<img className="col-1" src={imgHtml5} />
							<img className="col-1" src={imgCss3} />
							<img className="col-1" src={imgJavascript} />
							<img className="col-1" src={imgNodeJs} />
							<img className="col-1" src={imgPython} />
							<img className="col-1" src={imgReact} />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};
