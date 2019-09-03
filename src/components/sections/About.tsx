import React from "react";
import lax from "lax.js";
import { losAngeles, freeways, blueCircle } from "../../assets/images";

interface AboutState {
	hablamosLeftOffset: number;
}

export class About extends React.Component<any, AboutState> {
	// TODO: Pass in language property?
	constructor(props: any) {
		super(props);
		lax.setup();

		document.addEventListener(
			"scroll",
			x => {
				lax.update(window.scrollY);
			},
			false
		);

		lax.update(window.scrollY);

		// Set initial state
		this.state = {
			hablamosLeftOffset: 0
		};
	}

	componentDidMount() {
		this.setHablamosLeftOffset();
		window.addEventListener("resize", this.setHablamosLeftOffset.bind(this));
	}

	setHablamosLeftOffset = () => {
		const a: HTMLElement | null = document.getElementById(
			"hablamos-espanol-container"
		);

		let offset = 0;
		if (a != null) {
			offset = a.offsetLeft;
		}

		this.setState({ hablamosLeftOffset: offset });
	};

	render() {
		return (
			<section id="about" className="uk-about  about-area uk-section">
				<div className="uk-container">
					<div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
						<div className="item">
							<div className="about-content">
								<div className="uk-section-title section-title">
									<span>About Us</span>
									<h2>Leading the way in Mobile Services</h2>
									<div className="bar" />
								</div>

								<div className="about-text">
									<div className="icon">
										<i className="flaticon-quality" />
									</div>
									<h3>Proudly serving the Los Angeles Area</h3>
									<p>
										We provide marketing services to startups and small
										businesses to looking for a partner of their digital media,
										design & development, lead generation and communications
										requirements. We work with you, not for you. Although we
										have a great resources.
									</p>
									<p>
										We are an experienced and talented team of passionate
										consultants who live and breathe search engine marketing.
									</p>
								</div>
								<div id="hablamos-espanol-container">
									<h3
										id="hablamos-espanol"
										style={{
											paddingLeft: this.state.hablamosLeftOffset
										}}
									>
										HABLAMOS ESPAÑOL
									</h3>
								</div>
							</div>
						</div>

						<div className="item">
							<div className="about-img">
								<img
									src={losAngeles}
									className="about-img1"
									alt="Los Angeles"
								/>
								<img src={freeways} className="about-img2" alt="Portrait" />
								<img src={blueCircle} className="shape-img" alt="Blue Shape" />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
