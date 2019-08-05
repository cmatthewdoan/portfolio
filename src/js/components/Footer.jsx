import React, { Component } from "react";

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
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
			</React.Fragment>
		);
	}
}

export default Footer;
