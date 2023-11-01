import nodemailer from 'nodemailer';

export async function sendMail(subject: string, message: string) {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.NODEMAILER_EMAIL,
			pass: process.env.NODEMAILER_PW,
		},
	});

	const mailOptions = {
		from: `Commonwealth Contact Form <${process.env.NODEMAILER_EMAIL}>`,
		to: process.env.NODEMAILER_RECEIVER,
		subject,
		text: message,
		html: message,
	};

	await new Promise((res, rej) => {
		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				rej(err);
				throw new Error(err.message);
			} else {
				res(info);
			}
		});
	});
}
