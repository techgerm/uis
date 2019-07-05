import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo2.png";
import footerShapeOne from "../../assets/images/footer-shape1.png";
import footerShapeTwo from "../../assets/images/footer-shape2.png";
import { GoTop } from "./GoTop";

export class Footer extends React.Component {
	render() {
		return (
			<footer className="footer-area uk-dark uk-footer">
				<div className="uk-container">
					<div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2@s">
						<div className="item">
							<div className="single-footer-widget">
								<div className="logo">
									<Link to="index.html">
										<img src={logo} alt="logo" />
									</Link>
								</div>
								<p>
									Lorem ipsum dolor consectetur adipiscing elit, eiusmod tempor
									ut labore et dolore magna aliqua.
								</p>
							</div>
						</div>

						<div className="item">
							<div className="single-footer-widget">
								<h3>New York</h3>
								<div className="bar" />

								<div className="location">
									<p>
										198 Collective Street <br /> Manhattan <br /> Kingston{" "}
										<br /> United State
									</p>
								</div>
							</div>
						</div>

						<div className="item">
							<div className="single-footer-widget">
								<h3>London</h3>
								<div className="bar" />

								<div className="location">
									<p>
										352/71 Second Street <br /> King Street <br /> Kingston{" "}
										<br /> United Kingdom
									</p>
								</div>
							</div>
						</div>

						<div className="item">
							<div className="single-footer-widget">
								<h3>Contact</h3>
								<div className="bar" />

								<ul className="contact-info">
									<li>
										<Link to="#">info@gunter.com</Link>
									</li>
									<li>
										<Link to="#">fax@gunter.com</Link>
									</li>
									<li>
										<Link to="#">+44 478 541 7452</Link>
									</li>
								</ul>
								<ul className="social">
									<li>
										<Link to="#">
											<i className="flaticon-logo" />
										</Link>
									</li>
									<li>
										<Link to="#">
											<i className="flaticon-twitter" />
										</Link>
									</li>
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
					</div>

					<div className="copyright-area">
						<div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
							<div className="item">
								<p>© EnvyTheme. All Rights Reserved, 2019</p>
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
