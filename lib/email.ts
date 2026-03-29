import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(email: string, token: string) {
  if (!process.env.FROM_EMAIL || !process.env.PLATFORM_BASE_URL) return;

  await resend.emails.send({
    from: process.env.FROM_EMAIL,
    to: email,
    subject: 'Verify your seller account',
    html: `<p>Click <a href="${process.env.PLATFORM_BASE_URL}/verify?token=${token}">here</a> to verify.</p>`
  });
}
