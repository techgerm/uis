import * as functions from "firebase-functions";
// TODO: incorporate template for email styling
// import { template } from "@babel/core";
import * as sgMail from "@sendgrid/mail";

const API_KEY = functions.config().sendgrid.key;
// TODO: incorporate template for email styling
// const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const contact = functions.https.onCall(async (data, context) => {
	const msg = {
		to: "contact@unitedinternationalservices.com",
		from: data.email,
		phone: data.phone,
		subject: data.subject,
		text: data.text
	};
	await sgMail.send(msg);
	return { success: true };
});
