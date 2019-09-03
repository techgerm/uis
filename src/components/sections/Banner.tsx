import React from "react";

export class Banner extends React.Component {
	state = {
		isOpen: false
	};

	openModal = () => {
		this.setState({ isOpen: true });
	};

	boldText = (text: string) => (
		<span style={{ fontWeight: "bold" }}>{text}</span>
	);

	render() {
		return (
			<div>
				<div id="home" className="uk-banner main-banner main-logo">
					<div className="d-table">
						<div className="d-table-cell">
							<div className="uk-container">
								<div className="main-banner-content">
									<h1>
										Quality service <br /> Any time, any place
									</h1>
									<p>
										We are a {this.boldText("mobile-first")} business that takes
										great pride in offering top-quality notary, live scan
										fingerprint, apostille, paralegal and translation services
										in over 7+ languages with honesty and transparency as the
										core principles of our business.
									</p>
									<p>
										Stop by our office for a {this.boldText("FREE")}{" "}
										consultation or give us a call and we'll come to you!
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
