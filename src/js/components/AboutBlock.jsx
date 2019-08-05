import React, { Component } from "react";

class AboutBlock extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<div className="content-panel">
					<h3 className="content-panel__title">About Me</h3>
					<div className="panel-grid">
						<div className="content-panel__section">
							<h4 className="section__title">Professional Summary</h4>
							<span className="content-panel__text-block">
								I'm a former U.S. sailor from the
								<a
									className="content-panel__link"
									target="_blank"
									rel="noopener noreferrer"
									href="https://en.wikipedia.org/wiki/USS_George_H.W._Bush"
								>
									&nbsp;CVN 77&nbsp;
								</a>
								aircraft carrier stationed in Norfolk Virginia where I served
								for approximately 4 years as a
								<a
									className="content-panel__link"
									target="_blank"
									rel="noopener noreferrer"
									href="https://en.wikipedia.org/wiki/Information_systems_technician_(United_States_Navy)"
								>
									&nbsp;Naval IT.
								</a>
								&nbsp;My period of service included a 9 month deployment to
								the&nbsp; Persian Gulf in
								<a
									className="content-panel__link"
									target="_blank"
									rel="noopener noreferrer"
									href="https://en.wikipedia.org/wiki/Carrier_Strike_Group_2#2014_deployment"
								>
									&nbsp;2014&nbsp;
								</a>
								with Carrier Strike Group 2 and several dozen "underways". As an
								IT my job involved a wide range of technical troubleshooting and
								customer service both in-port and out at sea.{" "}
							</span>
							<span className="content-panel__text-block">
								My "customers" were officers, contractors, and fellow enlisted
								personnel on a ship of roughly 7000 people. Naval IT duties are
								similar to those of a civilian IT, but combine areas such as
								helpdesk tech, sys admin, network tech, security analyst, and
								radio tech. Included are also navy-specific work such as ship
								maintenance, watch standing, and training for emergencies and
								damage control. (Civilian ITs don't learn how to extinguish fuel
								fires.)
							</span>
						</div>

						<div className="content-panel__section">
							<h4 className="section__title">Skills</h4>
							<ul className="content-panel__skills-grid">
								<li>• Java</li>
								<li>• Spring</li>
								<li>• Hibernate</li>
								<li>• JPA</li>
								<li>• JavaScript</li>
								<li>• MVC</li>
								<li>• HTML</li>
								<li>• CSS</li>
								<li>• Flexbox</li>
								<li>• Grid</li>
								<li>• TDD</li>
								<li>• Agile</li>
								<li>• AJAX</li>
								<li>• JSON</li>
								<li>• Restful APIs</li>
								<li>• Responsive Design</li>
								<li>• SQL</li>
								<li>• Relational Databases</li>
								<li>• Source Control / Git</li>
								<li>• Data Structures</li>
								<li>• Algorithms</li>
								<li>• R</li>
								<li>• .Net</li>
								<li>• Active Directory</li>
								<li>• Adobe Photoshop</li>
								<li>• Host-based Security</li>
								<li>• Information Security</li>
								<li>• Statistics</li>
								<li>• Customer Service</li>
								<li>• Troubleshooting</li>
							</ul>
						</div>

						<div className="content-panel__section">
							<h4 className="section__title">Education</h4>
							<span className="content-panel__text-block">
								Prior to the Navy I studied at
								<a
									className="content-panel__link"
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.muskingum.edu/"
								>
									&nbsp;Muskingum University
								</a>
								, earning a B.S. in computer science. The curriculum focused on
								software engineering and mathematics. I loved it, and I
								developed a deep fascination with artificial intelligence.
							</span>
							<span className="content-panel__text-block">
								Most recently I attended several semesters at The Ohio State
								University studying statistics, chemistry, and biology. My
								purpose in doing so was to get a better sense for the
								data-analytics side of computer science and investigate the
								field of bioinformatics. I found statistics fascinating, and I'm
								now eager to pursue a career that combines software engineering
								and data science.
							</span>
						</div>

						<div className="content-panel__section">
							<h4 className="section__title">Hobbies/Interests</h4>
							<span className="content-panel__text-block">
								I'm a nerd. When I'm not coding I read a lot of sci-fi and
								fantasy, and I annoy my neighbors by playing the piano too
								loudly. I love traveling, computer games, playing tennis, and
								running outside (most days on the
								<a
									className="content-panel__link"
									target="_blank"
									rel="noopener noreferrer"
									href="https://www.columbus.gov/recreationandparks/trails/Olentangy-Trail/"
								>
									&nbsp;Olentangy Trail
								</a>
								). Sometimes I host board game nights for my fellow nerds and
								sometimes I make
								<a
									className="content-panel__link"
									target="_blank"
									rel="noopener noreferrer"
									href="../images/Jesus_Squirrel.jpg"
								>
									&nbsp;silly images&nbsp;
								</a>
								in photoshop. Intellectually I have endless curiosity. Beyond
								fiction, my typical reading ranges from cosmology, biology, and
								neuroscience to philosophy, politics, and history. The public
								intellectual I admire most is
								<a
									className="content-panel__link"
									target="_blank"
									rel="noopener noreferrer"
									href="https://en.wikipedia.org/wiki/Carl_Sagan"
								>
									&nbsp;Carl Sagan
								</a>
								, and the most profound book I've read recently is
								<a
									className="content-panel__link"
									target="_blank"
									rel="noopener noreferrer"
									href="https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies"
								>
									&nbsp;Superintelligence&nbsp;
								</a>
								by Nick Bostrom.
							</span>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default AboutBlock;
