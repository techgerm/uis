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
											href="https://www.google.com/search?source=hp&ei=DXJtXfurL87Q-gTdko5g&q=united%20international%20services&oq=united+in&gs_l=psy-ab.3.0.35i39l2j0i131j0l7.1979.3128..3914...0.0..1.209.808.8j0j1......0....1..gws-wiz.......0i10.GULLZ1fClwg&npsic=0&rflfq=1&rlha=0&rllag=34115286,-118427551,16973&tbm=lcl&rldimm=12534831510451803968&lqi=Ch11bml0ZWQgaW50ZXJuYXRpb25hbCBzZXJ2aWNlc1ohCgAiHXVuaXRlZCBpbnRlcm5hdGlvbmFsIHNlcnZpY2Vz&ved=2ahUKEwiN-t2O9LLkAhWXu54KHettAHoQvS4wAHoECAsQJw&rldoc=1&tbs=lrf:!2m1!1e2!2m1!1e3!2m1!1e16!3sIAE,lf:1,lf_ui:2#rlfi=hd:;si:12534831510451803968,l,Ch11bml0ZWQgaW50ZXJuYXRpb25hbCBzZXJ2aWNlc1ohCgAiHXVuaXRlZCBpbnRlcm5hdGlvbmFsIHNlcnZpY2Vz;mv:!1m2!1d34.27158578084741!2d-118.33572380478182!2m2!1d34.03520454047421!2d-118.84487144882479!4m2!1d34.15347786097811!2d-118.5902976268033!5i12"
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
