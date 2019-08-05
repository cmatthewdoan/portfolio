import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Banner extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<header className="header">
					<div className="header__logo">
						<h1 className="header__logo__title">Charles Doan</h1>
						<h3 className="header__logo__sub-title">⬥ Full-stack Developer</h3>
					</div>

					<nav className="header__nav">
						<NavLink
							to="/home"
							className="header__nav__link"
							activeClassName="header__nav__link-active"
						>
							Home
						</NavLink>
						<NavLink
							to="/projects"
							className="header__nav__link"
							activeClassName="header__nav__link-active"
						>
							Projects
						</NavLink>
						<NavLink
							to="/about"
							className="header__nav__link"
							activeClassName="header__nav__link-active"
						>
							About
						</NavLink>
						<NavLink
							to="/contact"
							className="header__nav__link"
							activeClassName="header__nav__link-active"
						>
							Contact
						</NavLink>
					</nav>
				</header>

				<figure className="banner-image" />
			</React.Fragment>
		);
	}
}

export default Banner;
