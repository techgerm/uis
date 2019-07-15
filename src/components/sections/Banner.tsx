import React from "react";

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
										Some awesome <br /> Tag line
									</h1>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Risus commodo viverra maecenas accumsan lacus vel
										facilisis.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
