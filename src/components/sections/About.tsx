import React, { CSSProperties } from "react";
import lax from "lax.js";
import about1 from "../../assets/images/about1.jpg";
import about2 from "../../assets/images/about2.jpg";
import one from "../../assets/images/blue-circle.png";
import { LaxButton } from "../common/LaxButton";

export class About extends React.Component {
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
	}
	render() {
		return (
			<section id="about" className="uk-about  about-area uk-section">
				<div className="uk-container">
					<div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
						<div className="item">
							<div className="about-content">
								<div className="uk-section-title section-title">
									<span>About Us</span>
									<h2>Leading the way in Creative Digital Agency</h2>
									<div className="bar" />
								</div>

								<div className="about-text">
									<div className="icon">
										<i className="flaticon-quality" />
									</div>
									<h3>Best Digital Agency in the World</h3>
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
								<div className="hablamos-espanol-container">
									<h3 className="hablamos-espanol">HABLAMOS ESPAÑOL</h3>
								</div>
							</div>
						</div>

						<div className="item">
							<div className="about-img">
								<img src={about1} className="about-img1" alt="about-img" />
								<img src={about2} className="about-img2" alt="about-img" />
								<img src={one} className="shape-img" alt="shape" />

								<LaxButton />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
