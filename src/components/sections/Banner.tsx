import React from "react";
import hablamos from "../../assets/images/hablamos-espanol.png";
import hablamosMobile from "../../assets/images/hablamos-espanol-mobile.png";
import logoMain from "../../assets/images/official-logo.png";
import logoMid from "../../assets/images/official-logo-mobile-mid.png";
const smallestMobileWidth = "(max-width: 767px)";

export class Banner extends React.Component {
	state = {
		isOpen: false
	};

	openModal = () => {
		this.setState({ isOpen: true });
	};

	render() {
		return (
			<div>
				<div id="home" className="uk-banner main-banner main-logo">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="uk-container">
								<div className="main-banner-content">
									<h1>
										United International <br /> Services
									</h1>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Risus commodo viverra maecenas accumsan lacus vel
										facilisis.
									</p>
									<picture>
										<source
											media={smallestMobileWidth}
											srcSet={hablamosMobile}
										></source>
										<img src={hablamos} alt="hablamos espanol"></img>
									</picture>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
