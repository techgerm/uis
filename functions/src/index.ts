import * as functions from "firebase-functions";
import * as sgMail from "@sendgrid/mail";

const API_KEY = functions.config().sendgrid.key;
const CONFIRMATION_TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const contact = functions.https.onCall((data, context) => {
	// TODO: Uncomment this and include it in all promise call when the site is ready to go live
	// const uisNotification1 = sgMail.send({
	// 	to: "hello@unitedinternationalservices.com",
	// 	from: data.email,
	// 	subject: data.subject,
	// 	text: `${data.text} ${data.phone}`
	// });

	const uisNotification2 = sgMail.send({
		to: "support@unitedinternationalservices.com",
		from: data.email,
		subject: data.subject,
		text: `${data.text} ${data.phone}`
	});

	const clientNotification = sgMail.send({
		to: data.email,
		from: "hello@unitedinternationalservices.com",
		templateId: CONFIRMATION_TEMPLATE_ID,
		dynamicTemplateData: {
			name: data.name,
			subject: "United International Services",
			preheader: "[Confirmation]"
		}
	});

	Promise.all([uisNotification2, clientNotification])
		.then(() => true)
		.catch(error => {
			throw new functions.https.HttpsError(
				"internal",
				`ERROR in Promise All: ${error}`
			);
		});
});
