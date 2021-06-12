import React, { Component } from "react";
import { renderToString } from "react-dom/server";
import * as UIkit from "uikit";
import * as firebase from "firebase/app";
import "firebase/functions";

interface Location {
	left: number;
	top: number;
}

interface ContactFormFields {
	name: string;
	email: string;
	subject: string;
	phone: string;
	text: string;
}

interface ContactState {
	submitting: boolean;
	buttonState: string;
	formFields: ContactFormFields;
	spinnerLocation: Location;
}

export class Contact extends Component<any, ContactState> {
	state: ContactState = {
		submitting: false,
		buttonState: "",
		spinnerLocation: {
			left: 0,
			top: 0
		},
		formFields: {
			name: "",
			email: "",
			subject: "",
			phone: "",
			text: ""
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
								<div>
									<div>
										<h3>Office Hours</h3>
										<p>
											Mon - Sat: Appointment Only <br />
											Sun: Closed <br />
										</p>
									</div>
									{/* No location at this time */}
									{/* <div className="location uk-location1">
										<a
											href="https://www.google.com/maps/place/UNITED+INTERNATIONAL+SERVICES/@34.2338748,-118.5517089,15z/data=!4m5!3m4!1s0x0:0xadf4aad8abda5740!8m2!3d34.2338748!4d-118.5517089"
											target="_blank"
											rel="noopener noreferrer"
											className="active"
										>
											<div className="location-info">
												<h5>Northridge</h5>
												<span>19200 Nordhoff St</span>
											</div>
										</a>
									</div> */}
									<button
										style={{
											backgroundColor: "white",
											border: "none",
											padding: 0,
											marginTop: 25
										}}
									>
										<a
											className="uk-button uk-button-default"
											href="tel:+14249995827"
										>
											Mobile: (424) 999-5827
										</a>
									</button>
								</div>
							</div>
						</div>
						<div className="item">
							{this.state.submitting ? (
								<div
									className="spinner"
									uk-spinner="ratio: 2"
									style={{
										position: "absolute",
										maxWidth: 100,
										left: this.state.spinnerLocation.left,
										top: this.state.spinnerLocation.top
									}}
								></div>
							) : (
								""
							)}
							{this.renderContactForm()}
						</div>
					</div>
				</div>
			</section>
		);
	}

	private renderContactForm = () => (
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
						disabled={this.state.submitting}
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
						disabled={this.state.submitting}
						required={true}
					/>
				</div>
				<div className="item uk-margin">
					<input
						type="tel"
						className="uk-input"
						placeholder="Phone"
						value={this.state.formFields.phone}
						onChange={this.phoneChangeHandler}
						disabled={this.state.submitting}
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
						disabled={this.state.submitting}
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
					disabled={this.state.submitting}
					required={true}
				/>
			</div>
			<button
				type="submit"
				className="uk-button uk-button-default"
				disabled={this.state.submitting}
			>
				Submit Message
			</button>
		</form>
	);

	private onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const data = this.state.formFields;
		const phone = data.phone
			.replaceAll("(", "")
			.replaceAll(")", "")
			.replaceAll("-", "")
			.replaceAll(" ", "");
		if (phone.length !== 10 || /\D/.test(phone)) {
			alert("Please enter a valid phone number");
			return;
		}

		this.setSpinnerLocation();
		this.setState({ submitting: true });
		const mailSend = firebase.functions().httpsCallable("contact");
		mailSend(data)
			.then(() => {
				const formFields = Object.assign({}, this.state.formFields);
				formFields.name = "";
				formFields.email = "";
				formFields.phone = "";
				formFields.subject = "";
				formFields.text = "";
				this.setState({ formFields, submitting: false });
				this.showResponseMessage(true);
			})
			.catch(error => {
				this.setState({ submitting: false });
				this.showResponseMessage(false);
				console.log(error);
			});
	};

	private showResponseMessage = (success: boolean) => {
		const message = (
			<div>
				<span
					uk-icon={success ? "icon: check" : "icon: warning"}
					style={{ paddingRight: 10 }}
				></span>
				{success ? (
					"Your message was sent!"
				) : (
					<span>
						Failure to send!
						<br />
						Please call us at the number listed below.
					</span>
				)}
			</div>
		);

		UIkit.notification({
			message: renderToString(message),
			status: success ? "primary" : "danger",
			pos: "bottom-center",
			timeout: 5000
		});
	};

	private setSpinnerLocation = () => {
		const e: HTMLElement | null = document.getElementById("contactForm");
		if (e != null) {
			this.setState({
				spinnerLocation: {
					left: e.offsetLeft - 30 + e.offsetWidth / 2,
					top: e.offsetTop - 55 + e.offsetHeight / 2
				}
			});
		}
	};

	private nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formFields = Object.assign({}, this.state.formFields);
		formFields.name = e.target.value;
		this.setState({ formFields });
	};

	private emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formFields = Object.assign({}, this.state.formFields);
		formFields.email = e.target.value;
		this.setState({ formFields });
	};

	private phoneChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formFields = Object.assign({}, this.state.formFields);
		formFields.phone = e.target.value;
		this.setState({ formFields });
	};

	private subjectChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const formFields = Object.assign({}, this.state.formFields);
		formFields.subject = e.target.value;
		this.setState({ formFields });
	};

	private textChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const formFields = Object.assign({}, this.state.formFields);
		formFields.text = e.target.value;
		this.setState({ formFields });
	};
}
