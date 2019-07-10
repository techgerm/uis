import React from "react";
import hablmaos from "../../assets/images/hablamos-espanol.png";
import hablmaosMobile from "../../assets/images/hablamos-espanol-mobile.png";
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
				<div id="home" className="uk-banner main-banner">
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
									<picture>
										<source
											media={smallestMobileWidth}
											srcSet={hablmaosMobile}
										></source>
										<img src={hablmaos} alt="hablamos espanol"></img>
									</picture>
								</div>
							</div>
						</div>
						<picture>
							<source media={smallestMobileWidth} srcSet={logoMid}></source>
							<img id="logo" src={logoMain} alt="logo"></img>
						</picture>
					</div>
				</div>
			</div>
		);
	}
}
