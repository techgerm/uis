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
					<div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2@s uk-flex-between">
						<div className="item">
							<div className="single-footer-widget">
								<div className="logo">
									<a href="/">
										<img src={logo} alt="logo" />
									</a>
								</div>
								<p>
									Stop by our office for a FREE consultation or give us a call
									and we'll come to you!
								</p>
							</div>
						</div>
						<div className="item">
							<div className="single-footer-widget">
								<h3>Contact</h3>
								<div className="bar" />
								<ul className="contact-info">
									<li>
										<a href="tel:+16619937968">661-993-7968</a>
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
											href="https://www.google.com/maps/place/UNITED+INTERNATIONAL+SERVICES/@34.1906544,-118.5368966,11.25z/data=!4m5!3m4!1s0x80c29700ef3918b1:0xadf4aad8abda5740!8m2!3d34.2087555!4d-118.573472"
											target="_blank"
											rel="noopener noreferrer"
										>
											<GoogleIcon fill="#999999" width={16} />
										</a>
									</li>
									<li>
										<a
											href="https://www.yelp.com/biz/united-international-services-winnetka-2"
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
						<div className="item">
							<div className="single-footer-widget">
								<h3>Los Angeles</h3>
								<div className="bar" />

								<div className="location">
									<p>
										20207 Saticoy Street <br /> Second Floor <br /> Winnetka, CA
										91306 <br />
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
