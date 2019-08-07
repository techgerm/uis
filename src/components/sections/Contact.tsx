import React from "react";
import { Link } from "react-router-dom";
import mapImg from "../../assets/images/map.png";
import * as firebase from "firebase/app";
import "firebase/functions";

export class Contact extends React.Component {
	state = {
		submitting: false,
		submitted: false,
		buttonState: "",
		formFields: {
			name: "",
			email: "",
			subject: "",
			phone: "",
			text: ""
		}
	};

	onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = this.state.formFields;
		const mailSend = firebase.functions().httpsCallable("contact");
		mailSend(data)
			.then(res => {
				// TODO: update or delete
				// if (res.status === 200) {
				// 	this.setState({ submitted: true });
				// }
				console.log(res);
				console.log(res.data);
				const formFields = Object.assign({}, this.state.formFields);
				formFields.name = "";
				formFields.email = "";
				formFields.phone = "";
				formFields.subject = "";
				formFields.text = "";
				this.setState({ formFields });
			})
			.catch(error => console.log(error));
	};

	nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formFields = Object.assign({}, this.state.formFields);
		formFields.name = e.target.value;
		this.setState({ formFields });
	};

	emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formFields = Object.assign({}, this.state.formFields);
		formFields.email = e.target.value;
		this.setState({ formFields });
	};

	phoneChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formFields = Object.assign({}, this.state.formFields);
		formFields.phone = e.target.value;
		this.setState({ formFields });
	};

	subjectChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formFields = Object.assign({}, this.state.formFields);
		formFields.subject = e.target.value;
		this.setState({ formFields });
	};

	textChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const formFields = Object.assign({}, this.state.formFields);
		formFields.text = e.target.value;
		this.setState({ formFields });
	};

	onHideSuccess = () => {
		this.setState({ submitted: false });
	};

	successMessage = () => {
		if (this.state.submitted) {
			return (
				<div className="alert-success" uk-alert-success>
					<Link
						to="#"
						onClick={this.onHideSuccess}
						className="uk-alert-close"
						uk-close="true"
					/>
					<h3>Thank you</h3>
					<p>We will connect you soon.</p>
				</div>
			);
		}
	};

	render() {
		return (
			<section id="contact" className="contact-area uk-contact uk-section">
				<div className="uk-container">
					<div className="uk-section-title section-title">
						<span>Let's Talk</span>
						<h2>Get in Touch</h2>
					</div>

					<div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
						<div className="item">
							<div className="map-img">
								<img src={mapImg} alt="map" />
								<div className="location uk-location1">
									<Link to="#" className="active">
										<div className="location-info">
											<h5>Los Angeles</h5>
											<span>20207 Saticoy St</span>
										</div>
									</Link>
								</div>
							</div>
						</div>

						<div className="item">
							<form id="contactForm" onSubmit={this.onSubmit}>
								<div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
									<div className="item uk-margin">
										<input
											type="text"
											className="uk-input"
											name="name"
											id="name"
											placeholder="Name"
											value={this.state.formFields.name}
											onChange={this.nameChangeHandler}
											required={true}
										/>
									</div>

									<div className="item uk-margin">
										<input
											type="email"
											className="uk-input"
											name="email"
											id="email"
											placeholder="Email"
											value={this.state.formFields.email}
											onChange={this.emailChangeHandler}
											required={true}
										/>
									</div>

									<div className="item uk-margin">
										<input
											type="text"
											className="uk-input"
											placeholder="Phone"
											value={this.state.formFields.phone}
											onChange={this.phoneChangeHandler}
											required={true}
										/>
									</div>

									<div className="item uk-margin">
										<input
											type="text"
											className="uk-input"
											name="subject"
											id="subject"
											placeholder="Subject"
											value={this.state.formFields.subject}
											onChange={this.subjectChangeHandler}
											required={true}
										/>
									</div>
								</div>

								<div className="item">
									<textarea
										name="message"
										className="uk-textarea"
										id="message"
										cols={30}
										rows={4}
										placeholder="Your Message"
										value={this.state.formFields.text}
										onChange={this.textChangeHandler}
										required={true}
									/>
								</div>

								<button type="submit" className="uk-button uk-button-default">
									Submit Message
								</button>
							</form>
							{this.successMessage()}
						</div>
					</div>
				</div>
			</section>
		);
	}
}
