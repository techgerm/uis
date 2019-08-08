import * as functions from "firebase-functions";
// TODO: incorporate template for email styling
// import { template } from "@babel/core";
import * as sgMail from "@sendgrid/mail";

const API_KEY = functions.config().sendgrid.key;
// TODO: incorporate template for email styling
// const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const contact = functions.https.onCall((data, context) => {
	const uisNotification = sgMail.send({
		to: "support@unitedinternationalservices.com",
		from: data.email,
		subject: data.subject,
		text: `${data.text} ${data.phone}`
	});

	const clientNotification = sgMail.send({
		to: data.email,
		from: "support@unitedinternationalservices.com",
		subject: "Confirmation",
		text: "Thank for choosing UIS for your notary needs!"
	});

	Promise.all([uisNotification, clientNotification])
		.then(() => true)
		.catch(error => {
			throw new functions.https.HttpsError(
				"internal",
				`ERROR in Promise All: ${error}`
			);
		});
});
