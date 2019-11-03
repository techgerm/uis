import * as functions from "firebase-functions";
import * as sgMail from "@sendgrid/mail";

const sendGridConfig = functions.config().sendgrid;
const SEND_GRID_API_KEY = sendGridConfig.key;
const CONFIRMATION_TEMPLATE_ID = sendGridConfig.confirmation_template;
const CLIENT_TEMPLATE_ID = sendGridConfig.client_template;

sgMail.setApiKey(SEND_GRID_API_KEY);

export const contact = functions.https.onCall((data, context) => {
	const uisNotificationTemplate = {
		from: data.email,
		templateId: CLIENT_TEMPLATE_ID,
		dynamicTemplateData: {
			name: data.name,
			message: data.text,
			phone: data.phone,
			subject: data.subject,
			preheader: "[Website Inquiry]"
		}
	};

	const uisNotification1 = sgMail.send({
		to: "hello@unitedinternationalservices.com",
		...uisNotificationTemplate
	});

	const uisNotification2 = sgMail.send({
		to: "support@unitedinternationalservices.com",
		...uisNotificationTemplate
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

	Promise.all([uisNotification1, uisNotification2, clientNotification])
		.then(() => true)
		.catch(error => {
			throw new functions.https.HttpsError(
				"internal",
				`ERROR in Promise All: ${error}`
			);
		});
});
