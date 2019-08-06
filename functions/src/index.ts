import * as functions from "firebase-functions";
// import { async } from "q";
// import * as admin from "firebase-admin";
// import { user } from "firebase-functions/lib/providers/auth";
// import { template } from "@babel/core";
// import * as sgMail from "@sendgrid/mail";
// import { EmailAddress } from "@sendgrid/helpers/classes";

// admin.initializeApp(functions.config().firebase);
// const API_KEY = functions.config().sendgrid.Key;
// const TEMPLATE_ID = functions.config().sendgrid.template;
// sgMail.setApiKey(API_KEY);

// export const contact = functions.https.onCall(async (data, context) => {
// 	const msg = {
// 		to: "contact@unitedinternationalservices.com",
// 		from: name,
// 		email: EmailAddress,
// 		templateId: TEMPLATE_ID
// 	};
// 	return sgMail.send(msg);
// });

export const Testing = functions.https.onRequest((req, res) => {
	res.json({ cat: "black" });
});

export const TestingTwo = functions.https.onCall((data, context) => {
	return { cat: "meow" };
});
