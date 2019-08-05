import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Banner from "./js/components/Banner";
import Footer from "./js/components/Footer";

import HomeBlock from "./js/components/HomeBlock";
import ProjectsBlock from "./js/components/ProjectsBlock";
import AboutBlock from "./js/components/AboutBlock";
import ContactBlock from "./js/components/ContactBlock";

//Styling
import "./css/base/common.css";
import "./css/components/components.css";
import "./css/responsive/responsive.css";

function App() {
	return (
		<Router>
			<div className="wrapper">
				<Banner />
				<main className="main">
					<Switch>
						<Route exact path="/" render={props => <HomeBlock {...props} />} />
						<Route
							exact
							path="/home"
							render={props => <HomeBlock {...props} />}
						/>
						<Route
							exact
							path="/projects"
							render={props => <ProjectsBlock {...props} />}
						/>
						<Route
							exact
							path="/about"
							render={props => <AboutBlock {...props} />}
						/>
						<Route
							exact
							path="/contact"
							render={props => <ContactBlock {...props} />}
						/>
					</Switch>
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
