import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(to: string, verifyUrl: string) {
  if (!process.env.RESEND_FROM_EMAIL) return;
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to,
    subject: 'Verify your seller account',
    html: `<p>Complete your registration: <a href="${verifyUrl}">Verify email</a></p>`
  });
}
