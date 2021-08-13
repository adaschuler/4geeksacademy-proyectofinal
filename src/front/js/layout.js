import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Plant } from "./pages/plant";
import { PlantDashboard } from "./pages/plantdashboard";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Navigation } from "./component/navigation";
import { Footer } from "./component/footer";
import Auth0ProviderWithHistory from "../../auth/auth0-provider-with-history";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Auth0ProviderWithHistory>
					<ScrollToTop>
						<Navigation />
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exact path="/login">
								<Login />
							</Route>
							<Route exact path="/plant">
								<Plant />
							</Route>
							<Route exact path="/plantdashboard">
								<PlantDashboard />
							</Route>
							<Route exact path="/single/:theid">
								<Single />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
						<Footer />
					</ScrollToTop>
				</Auth0ProviderWithHistory>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
