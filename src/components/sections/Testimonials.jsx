import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel3";
import ModalVideo from "react-modal-video";
import woman from "../../assets/images/women.jpg";
import shapeImg from "../../assets/images/1.png";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

const options = {
	items: 1,
	loop: true,
	nav: true,
	dots: true,
	smartSpeed: 2000,
	margin: 30,
	autoplayHoverPause: true,
	autoplay: true,
	navText: ["<i class='flaticon-back'></i>", "<i class='flaticon-right'></i>"]
};

class Testimonials extends React.Component {
	state = {
		isOpen: false
	};

	openModal = () => {
		this.setState({ isOpen: true });
	};

	render() {
		return (
			<section id="clients" className="feedback-area  uk-section uk-feedback">
				<div className="uk-container">
					<div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
						<div className="item">
							<div className="feedback-img">
								<img src={woman} alt="Testimonials" />

								<img src={shapeImg} className="shape-img" alt="Testimonials" />

								<Link
									onClick={e => {
										e.preventDefault();
										this.openModal();
									}}
									to="#"
									className="video-btn popup-youtube"
								>
									<i className="flaticon-multimedia" /> Watch Video
								</Link>
							</div>
						</div>

						<ModalVideo
							channel="youtube"
							isOpen={this.state.isOpen}
							videoId="bk7McNUjWgw"
							onClose={() => this.setState({ isOpen: false })}
						/>

						<div className="item">
							<div className="feedback-inner">
								<div className="uk-section-title section-title">
									<span>What Client Says About US</span>
									<h2>Our Testimonials</h2>
									<div className="bar" />
								</div>

								<OwlCarousel
									className="feedback-slides owl-carousel owl-theme"
									{...options}
								>
									<div className="single-feedback">
										<i className="flaticon-quote" />
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Quis ipsum suspendisse ultrices gravida. Risus
											commodo viverra maecenas accumsan lacus vel facilisis.
										</p>

										<div className="client">
											<h3>Jason Statham</h3>
											<span>Founder at Envato</span>
										</div>
									</div>

									<div className="single-feedback">
										<i className="flaticon-quote" />
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Quis ipsum suspendisse ultrices gravida. Risus
											commodo viverra maecenas accumsan lacus vel facilisis.
										</p>

										<div className="client">
											<h3>Jason Statham</h3>
											<span>Founder at Envato</span>
										</div>
									</div>

									<div className="single-feedback">
										<i className="flaticon-quote" />
										<p>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit,
											sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua. Quis ipsum suspendisse ultrices gravida. Risus
											commodo viverra maecenas accumsan lacus vel facilisis.
										</p>

										<div className="client">
											<h3>Jason Statham</h3>
											<span>Founder at Envato</span>
										</div>
									</div>
								</OwlCarousel>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Testimonials;
