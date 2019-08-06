import React, { Component } from "react";

class ProjectsBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			projects: [
				{
					projectLink:
						"https://github.com/charles-m-doan/university-clinic-hospital",
					cardTitle: "University Hospital Clinic",
					imgURL: "images/project_UniversityHospitalClinic.jpg",
					tools:
						"Java 8, Eclipse, Github, Git Bash, JUnit, TDD, Pair-Programming",
					description:
						"A simple command-line program that simulates managing and interacting with employees and patients in a hospital setting, including actions like 'hire', 'fire', 'pay salary', and 'draw blood'."
				},
				{
					projectLink: "https://github.com/charles-m-doan/virtual-pet",
					cardTitle: "Virtual Pet",
					imgURL: "images/project_VirtualPet.jpg",
					tools:
						"Java 8, Eclipse, Visual Studio, Github, Git Bash, JUnit, TDD, Agile/Scrum",
					description:
						"A command-line simulation for managing a 'shelter' of virtual pets. The virtual pets come in various types and have different preferences and internal values that affect things like 'health', 'hunger', and 'boredom'."
				}
			]
		};
	}
	render() {
		const { error, isLoaded, projects } = this.state;
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

export default ProjectsBlock;
