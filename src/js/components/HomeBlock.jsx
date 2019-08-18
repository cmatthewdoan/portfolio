import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<div className="content-panel avatar-panel">
					<h3 className="content-panel__title avatar-panel__title">
						Hi, I build stuff with code.
					</h3>
					<figure className="avatar" />
					<span className="content-panel__text-block">
						Welcome! My name is Charles and I live in Columbus Ohio where I
						develop software and study data analytics. When I'm not coding I
						juggle a long list of hobbies, most of which would bore you. What
						won't bore you (I hope) are my awesome projects, so be sure to{" "}
						<Link to="/projects">
							<span className="emphasis__link">check 'em out!</span>
						</Link>
					</span>
				</div>
			</React.Fragment>
		);
	}
}

export default HomeBlock;
