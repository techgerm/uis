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
								<button
									style={{
										backgroundColor: "white",
										border: "none",
										padding: 0
									}}
								>
									<a
										className="uk-button uk-button-default"
										style={{ borderRadius: 10 }}
										href="tel:+16619937968"
									>
										Mobile: (661) 993-7851
									</a>
								</button>
								<div style={{ display: "flex" }}>
									<div>
										<h3>Office Hours</h3>
										<p>
											Mon: 10:00 AM - 6:00 PM <br />
											Tue: 10:00 AM - 6:00 PM <br />
											Wed: 10:00 AM - 6:00 PM <br />
											Thur: 10:00 AM - 6:00 PM <br />
											Fri: 10:00 AM - 6:00 PM <br />
											Sat: 10:00 AM - 3:00 PM <br />
											Sun: Closed <br />
										</p>
									</div>
									<div className="location uk-location1">
										<a
											href="https://www.google.com/search?source=hp&ei=DXJtXfurL87Q-gTdko5g&q=united%20international%20services&oq=united+in&gs_l=psy-ab.3.0.35i39l2j0i131j0l7.1979.3128..3914...0.0..1.209.808.8j0j1......0....1..gws-wiz.......0i10.GULLZ1fClwg&npsic=0&rflfq=1&rlha=0&rllag=34115286,-118427551,16973&tbm=lcl&rldimm=12534831510451803968&lqi=Ch11bml0ZWQgaW50ZXJuYXRpb25hbCBzZXJ2aWNlc1ohCgAiHXVuaXRlZCBpbnRlcm5hdGlvbmFsIHNlcnZpY2Vz&ved=2ahUKEwiN-t2O9LLkAhWXu54KHettAHoQvS4wAHoECAsQJw&rldoc=1&tbs=lrf:!2m1!1e2!2m1!1e3!2m1!1e16!3sIAE,lf:1,lf_ui:2#rlfi=hd:;si:12534831510451803968,l,Ch11bml0ZWQgaW50ZXJuYXRpb25hbCBzZXJ2aWNlc1ohCgAiHXVuaXRlZCBpbnRlcm5hdGlvbmFsIHNlcnZpY2Vz;mv:!1m2!1d34.27158578084741!2d-118.33572380478182!2m2!1d34.03520454047421!2d-118.84487144882479!4m2!1d34.15347786097811!2d-118.5902976268033!5i12"
											target="_blank"
											rel="noopener noreferrer"
											className="active"
										>
											<div className="location-info">
												<h5>Los Angeles</h5>
												<span>20207 Saticoy St</span>
											</div>
										</a>
									</div>
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
						type="text"
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
				style={{ borderRadius: 10 }}
			>
				Submit Message
			</button>
		</form>
	);

	private onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		this.setSpinnerLocation();
		this.setState({ submitting: true });

		e.preventDefault();
		const data = this.state.formFields;
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
