import React, { Component } from "react";

class ProjectsBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			projects: [
				{
					projectLink: "",
					cardTitle: "Not An Actual Project",
					imgURL: "images/Jesus_Squirrel.jpg",
					tools: "Bad Code, Embarassment",
					description:
						"If you're seeing this it's because something on my site broke. Look away, please."
				}
			]
		};
	}

	componentDidMount() {
		// Reference: https://reactjs.org/docs/faq-ajax.html
		// Reference: https://stackoverflow.com/questions/49481934/fetching-local-json
		fetch("/data/projects.json")
			.then(res => res.json())
			.then(
				result => {
					this.setState({
						isLoaded: true,
						projects: result
					});
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				error => {
					this.setState({
						isLoaded: true,
						error
					});
				}
			);
	}

	render() {
		// Reference: https://reactjs.org/docs/faq-ajax.html
		const { error, isLoaded, projects } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <div>Loading...</div>;
		} else {
			return (
				<React.Fragment>
					<div className="content-panel">
						<h3 className="content-panel__title">My Projects</h3>
						<div className="project-card-gallery">
							{projects.map((project, index) => (
								<a
									key={project.cardTitle + index}
									target="_blank"
									rel="noopener noreferrer"
									href={project.projectLink}
									className="project-card"
								>
									<h3 className="project-card__title">{project.cardTitle}</h3>

									<div className="project-card__body">
										<figure className="project-card__thumbnail">
											<img src={project.imgURL} alt="missing" />
										</figure>
										<h4 className="project-card__tools">
											Tools: {project.tools}
										</h4>
										<main className="project-card__description">
											{project.description}
										</main>
									</div>
								</a>
							))}
						</div>
					</div>
				</React.Fragment>
			);
		}
	}
}

export default ProjectsBlock;
