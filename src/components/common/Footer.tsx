import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/official-logo-web-footer.png";
import footerShapeOne from "../../assets/images/footer-shape1.png";
import footerShapeTwo from "../../assets/images/footer-shape2.png";
import { GoTop } from "./GoTop";
import { YelpIcon, GoogleIcon } from "../../assets/icons";

export class Footer extends React.Component {
	render() {
		return (
			<footer className="footer-area uk-dark uk-footer">
				<div className="uk-container">
					<div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s uk-flex-between">
						<div className="item">
							<div className="single-footer-widget">
								<div className="logo">
									<a href="/">
										<img src={logo} alt="logo" />
									</a>
								</div>
								<p>Give us a call and schedule a FREE consultation!</p>
							</div>
						</div>
						<div className="item">
							<div className="single-footer-widget">
								<h3>Contact</h3>
								<div className="bar" />
								<ul className="contact-info">
									<li>
										<a href="tel:+14249995827">424-999-5827</a>
									</li>
									<li>
										<a href="mailto:hello@unitedinternationalservices.com">
											hello@unitedinternationalservices.com
										</a>
									</li>
								</ul>
								<ul className="social">
									{/* <li>
										<Link to="#">
											<i className="flaticon-facebook" />
										</Link>
									</li> */}
									<li>
										<a
											href="https://www.google.com/maps/place/UNITED+INTERNATIONAL+SERVICES/@34.0204989,-118.4117325,10z/data=!4m5!3m4!1s0x0:0xadf4aad8abda5740!8m2!3d34.0204989!4d-118.4117325"
											target="_blank"
											rel="noopener noreferrer"
										>
											<GoogleIcon fill="#999999" width={16} />
										</a>
									</li>
									<li>
										<a
											href="https://www.yelp.com/biz/united-international-services-torrance-2"
											target="_blank"
											rel="noopener noreferrer"
										>
											<YelpIcon fill="#999999" width={16} />
										</a>
									</li>
									{/* <li>
										<Link to="#">
											<i className="flaticon-linkedin" />
										</Link>
									</li> */}
									{/* Instagram */}
									{/* <li>
										<Link to="#">
											<i className="flaticon-logo-1" />
										</Link>
									</li> */}
								</ul>
							</div>
						</div>
						{/* Removing location for now */}
						{/* <div className="item">
							<div className="single-footer-widget">
								<h3>Northridge</h3>
								<div className="bar" />

								<div className="location">
									<p>
										19200 Nordhoff St <br /> Northridge, CA 91324 <br />
									</p>
								</div>
							</div>
						</div> */}
					</div>

					<div className="copyright-area">
						<div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
							<div className="item">
								<p>
									© United International Services LLC All Rights Reserved, 2020
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
