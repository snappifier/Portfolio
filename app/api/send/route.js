import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
	try {
		const { email, message } = await request.json();

		const { data, error } = await resend.emails.send({
			from: 'Portfolio Contact <onboarding@resend.dev>',
			to: ['matwiejkrystian@gmail.com'],
			replyTo: email,
			subject: `Nowa wiadomość od ${email}`,
			html: `
        <div>
          <p><strong>Nadawca:</strong> ${email}</p>
          <p><strong>Treść wiadomości:</strong></p>
          <p>${message}</p>
        </div>
      `,
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json(data);
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}