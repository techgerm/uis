import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/images/official-logo-web-footer.png";
import footerShapeOne from "../../assets/images/footer-shape1.png";
import footerShapeTwo from "../../assets/images/footer-shape2.png";
import { GoTop } from "./GoTop";

export class Footer extends React.Component {
	render() {
		return (
			<footer className="footer-area uk-dark uk-footer">
				{/* original: <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2@s">*/}
				<div className="uk-container">
					<div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2@s uk-flex-between">
						<div className="item">
							<div className="single-footer-widget">
								<div className="logo">
									<Link to="/">{/* <img src={logo} alt="logo" /> */}</Link>
								</div>
								{/* TODO: Add short description */}
								<p>
									Lorem ipsum dolor consectetur adipiscing elit, eiusmod tempor
									ut labore et dolore magna aliqua.
								</p>
							</div>
						</div>
						<div className="item">
							<div className="single-footer-widget">
								<h3>Contact</h3>
								<div className="bar" />
								<ul className="contact-info">
									<li>
										<Link to="#">contact@unitedinternationalservices.com</Link>
									</li>
									<li>
										<Link to="#">support@unitedinternationalservices.com</Link>
									</li>
									<li>
										<Link to="#">661-993-7968</Link>
									</li>
								</ul>
								<ul className="social">
									<li>
										{/* TODO: Add facebook link */}
										<Link to="#">
											<i className="flaticon-facebook" />
										</Link>
									</li>
									{/* TODO: Yelp icon */}
									{/* <li>
										<Link to="#">
											<i className="flaticon-twitter" />
										</Link>
									</li> */}
									<li>
										<Link to="#">
											<i className="flaticon-linkedin" />
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="flaticon-logo-1" />
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="item">
							<div className="single-footer-widget">
								<h3>Los Angeles</h3>
								<div className="bar" />

								<div className="location">
									<p>
										20207 Saticoy Street <br /> Second Floor <br /> Winnetka CA
										91306 <br /> United States
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="copyright-area">
						<div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
							<div className="item">
								<p>
									© United International Services LLC All Rights Reserved, 2019
								</p>
							</div>

							<div className="item">
								<ul>
									<li>
										<Link to="#">Terms & Conditions</Link>
									</li>
									<li>
										<Link to="#">Privacy Policy</Link>
									</li>
								</ul>
							</div>
						</div>
						<GoTop scrollStepInPx={50} delayInMs={16.66} />
					</div>
				</div>

				<div className="br-line" />
				<div className="footer-shape1">
					<img src={footerShapeOne} alt="shape" />
				</div>
				<div className="footer-shape2">
					<img src={footerShapeTwo} alt="shape" />
				</div>
			</footer>
		);
	}
}
