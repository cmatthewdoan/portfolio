import React, { Component } from "react";
// import "../../css/base/common.css";
// import "../../css/responsive/responsive.css";

class Skeleton extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<div className="wrapper">
					<header className="header">
						<div className="header__logo">
							<h1 className="header__logo__title">Charles Doan</h1>
							<h3 className="header__logo__sub-title">
								⬥ Full-stack Developer
							</h3>
						</div>

						<ul className="header__nav">
							<li id="home-button" className="header__nav__link">
								Home
							</li>
							<li id="projects-button" className="header__nav__link">
								Projects
							</li>
							<li id="about-button" className="header__nav__link">
								About
							</li>
							<li id="contact-button" className="header__nav__link">
								Contact
							</li>
						</ul>
					</header>

					<figure className="banner-image" />

					<main className="main" id="mainContentBlock">
						{this.props.contentBlock}
					</main>

					<footer className="footer">
						<nav className="footer__social-nav">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="http://www.linkedin.com/in/charles-m-doan"
								className="social-nav__link linkedin-link"
							>
								{null}
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/charles-m-doan"
								className="social-nav__link github-link"
							>
								{null}
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.facebook.com/Doanage"
								className="social-nav__link facebook-link"
							>
								{null}
							</a>
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="http://twitter.com/intent/tweet?screen_name=Doanage"
								className="social-nav__link twitter-link"
							>
								{null}
							</a>
						</nav>
						<h3 className="footer__copyright">
							&copy; 2019 Charles Matthew Doan
						</h3>
					</footer>
				</div>
			</React.Fragment>
		);
	}
}

export default Skeleton;
