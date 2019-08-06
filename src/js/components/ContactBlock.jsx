import React, { Component } from "react";

class ContactBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<div className="content-panel contact-panel">
					<h3 className="content-panel__title">Contact Me</h3>

					<span className="content-panel__text-block">
						I'm currently training in full-stack development and studying data
						science on the side. My dream is to work on artificial general
						intelligence, but I'm eager for any coding that helps continue
						developing my skills. The way I see it, every time I bang my head on
						the desk in frustration I'm leveling up, so I can't wait to
						contribute to a team working on some big, complicated code monster!
					</span>
					<span className="content-panel__text-block">
						For phone contact please use my Google Voice number. Otherwise feel
						free to send me a text or email.
					</span>

					<nav className="contact__nav">
						<a href="tel:6142854701‬" className="contact__nav__link">
							<figure className="contact__nav-icon google-voice-icon" />
							<h4 className="contact__nav__text">(614) 285-4701‬</h4>
						</a>

						<a href="sms:3304325448‬" className="contact__nav__link">
							<figure className="contact__nav-icon sms-icon" />
							<h4 className="contact__nav__text">(330) 432-5448‬‬</h4>
						</a>

						<a
							href="mailto:cmatthewdoan@gmail.com"
							className="contact__nav__link"
						>
							<figure className="contact__nav-icon email-icon" />
							<h4 className="contact__nav__text">cmatthewdoan@gmail.com‬</h4>
						</a>
					</nav>
				</div>
			</React.Fragment>
		);
	}
}

export default ContactBlock;
