import React from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

class Banner extends React.Component {
	state = {
		isOpen: false
	};

	openModal = () => {
		this.setState({ isOpen: true });
	};

	render() {
		const modalStyles = { overlay: { zIndex: 100000000000000 } };
		return (
			<div>
				<div id="home" className="uk-banner main-banner item-bg1">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="uk-container">
								<div className="main-banner-content">
									<h1>
										Trusted Digital <br /> agency
									</h1>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Risus commodo viverra maecenas accumsan lacus vel
										facilisis.
									</p>
									<Link to="#" className="uk-button uk-button-default">
										Get Started
									</Link>
									<Link
										onClick={e => {
											e.preventDefault();
											this.openModal();
										}}
										to="#"
										className="video-btn popup-youtube"
									>
										<span uk-icon="play" /> Watch Video
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<ModalVideo
					style={modalStyles}
					channel="youtube"
					isOpen={this.state.isOpen}
					videoId="bk7McNUjWgw"
					onClose={() => this.setState({ isOpen: false })}
				/>
			</div>
		);
	}
}

export default Banner;
