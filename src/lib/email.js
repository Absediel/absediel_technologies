import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendEmailNotification(toEmail, subject, textBody) {
  if (!resend) {
    console.warn('[EMAIL] RESEND_API_KEY is not set. Skipping email dispatch.');
    return false;
  }

  try {
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const targetEmail = toEmail || process.env.NOTIFICATION_EMAIL || 'ankitdeshmukhpawar@gmail.com';

    const response = await resend.emails.send({
      from: fromEmail,
      to: [targetEmail],
      subject: subject,
      text: textBody,
    });

    console.log('[EMAIL] Successfully dispatched email:', response);
    return true;
  } catch (error) {
    console.error('[EMAIL] Failed to send email via Resend:', error);
    return false;
  }
}
