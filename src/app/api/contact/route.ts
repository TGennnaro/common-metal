import config from '@/config/config';
import { sendMail } from '@/lib/mail';
import { NextResponse } from 'next/server';
import { ZodError, z } from 'zod';

const schema = z.object({
	firstName: z
		.string()
		.min(2, { message: 'First name is too short' })
		.max(50, { message: 'First name is too long' }),
	lastName: z
		.string()
		.min(2, { message: 'Last name is too short' })
		.max(50, { message: 'Last name is too long' }),
	email: z.string().email({ message: 'Invalid email' }),
	phone: z
		.string()
		.regex(
			/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
			{ message: 'Invalid phone number' }
		),
	message: z
		.string()
		.min(10, { message: 'Message is too short' })
		.max(config.maxEmailCharacters, { message: 'Message is too long' }),
});

export async function POST(req: Request) {
	const body = await req.json();
	try {
		const { firstName, lastName, email, phone, message } = schema.parse(body);
		// await new Promise((resolve) => setTimeout(resolve, 2000));
		await sendMail(
			`New message from ${firstName} ${lastName}`,
			`
			<html>
			<body>
				<p>
					<strong>Name:</strong> ${firstName} ${lastName}<br />
					<strong>Email:</strong> ${email}<br />
					<strong>Phone:</strong> ${phone}<br />
					<strong>Message:</strong> ${message}
				</p>
			</body>
			</html>
		`
		);
		return NextResponse.json({ status: 200, message: 'success' });
	} catch (err) {
		if (err instanceof ZodError) {
			return NextResponse.json({ status: 400, message: err.issues[0].message });
		} else {
			return NextResponse.json({ status: 500, message: err });
		}
	}
}
