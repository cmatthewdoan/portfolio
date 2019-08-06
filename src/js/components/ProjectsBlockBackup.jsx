import React, { Component } from "react";

class ProjectsBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<div className="content-panel">
					<h3 className="content-panel__title">My Projects</h3>
					<div className="project-card-gallery">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/charles-m-doan/university-clinic-hospital"
							className="project-card"
						>
							<h3 className="project-card__title">
								University Hospital Clinic
							</h3>

							<div className="project-card__body">
								<figure className="project-card__thumbnail">
									<img
										src="images/project_UniversityHospitalClinic.jpg"
										alt="missing"
									/>
								</figure>
								<h4 className="project-card__tools">
									Tools: Java 8, Eclipse, Github, Git Bash, JUnit, TDD, Pair
									Programming
								</h4>
								<main className="project-card__description">
									A simple command-line program that simulates managing and
									interacting with employees and patients in a hospital setting,
									including actions like “hire”, “fire”, “pay salary”, and “draw
									blood”.
								</main>
							</div>
						</a>

						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/charles-m-doan/virtual-pet"
							className="project-card"
						>
							<h3 className="project-card__title">Virtual Pet</h3>

							<div className="project-card__body">
								<figure className="project-card__thumbnail">
									<img src="images/project_VirtualPet.jpg" alt="missing" />
								</figure>
								<h4 className="project-card__tools">
									Tools: Java 8, Eclipse, Visual Studio, Github, Git Bash,
									JUnit, TDD, Agile/Scrum
								</h4>
								<main className="project-card__description">
									A command-line simulation for managing a “shelter” of virtual
									pets. The virtual pets come in various types and have
									different preferences and internal values that affect things
									like “health”, “hunger”, and “boredom”.
								</main>
							</div>
						</a>

						<a
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/charles-m-doan/airline-on-time-performance"
							className="project-card"
						>
							<h3 className="project-card__title">
								Airline On-Time Performance
							</h3>

							<div className="project-card__body">
								<figure className="project-card__thumbnail">
									<img src="images/project_AirlineOnTime.jpg" alt="missing" />
								</figure>
								<h4 className="project-card__tools">
									Tools: R Markdown, RStudio, SQlite, Google Drive, Teamwork,
									Statistics
								</h4>
								<main className="project-card__description">
									An R Markdown report analyzing international flight
									cancellations and delays using a custom-built database with
									data from the Bureau of Transportation Statistics. Utilized
									statistical techniques like ANOVA and post-hoc error
									correction.
								</main>
							</div>
						</a>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default ProjectsBlock;
