import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const ADMIN_EMAIL = process.env.NOTIFICATION_EMAIL || 'ankitdeshmukhpawar@gmail.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'Absediel Technologies <onboarding@resend.dev>';

/**
 * Helper to dispatch an email via Resend
 */
export async function sendEmail({ to, subject, html, text }) {
  if (!resend) {
    console.warn('[EMAIL] RESEND_API_KEY is not set. Skipping email dispatch.');
    return false;
  }

  try {
    const response = await resend.emails.send({
      from: FROM_EMAIL,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      text,
    });

    console.log('[EMAIL] Successfully dispatched email to', to, response);
    return true;
  } catch (error) {
    console.error('[EMAIL] Failed to send email via Resend to', to, error);
    return false;
  }
}

/**
 * Handle Contact Form submission emails (Sends to Admin + Sends confirmation to Client)
 */
export async function sendContactEmails({ name, email, phone, serviceInterest, message }) {
  const timeString = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  // 1. Email to Admin
  const adminSubject = `⚡ New Contact Inquiry: ${name} (${serviceInterest})`;
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #1e293b;">
      <div style="border-bottom: 2px solid #3b82f6; padding-bottom: 12px; margin-bottom: 20px;">
        <h2 style="color: #60a5fa; margin: 0;">New Contact Form Submission</h2>
        <p style="color: #94a3b8; margin: 5px 0 0 0; font-size: 14px;">Absediel Technologies Website</p>
      </div>

      <div style="background-color: #1e293b; padding: 18px; border-radius: 8px; margin-bottom: 18px;">
        <p style="margin: 8px 0;"><strong style="color: #93c5fd;">Client Name:</strong> ${name}</p>
        <p style="margin: 8px 0;"><strong style="color: #93c5fd;">Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
        <p style="margin: 8px 0;"><strong style="color: #93c5fd;">Phone:</strong> ${phone || 'Not provided'}</p>
        <p style="margin: 8px 0;"><strong style="color: #93c5fd;">Service Interest:</strong> <span style="background: #2563eb; color: #fff; padding: 3px 8px; border-radius: 4px; font-size: 13px;">${serviceInterest}</span></p>
      </div>

      <div style="background-color: #1e293b; padding: 18px; border-radius: 8px;">
        <strong style="color: #93c5fd; display: block; margin-bottom: 8px;">Message:</strong>
        <p style="white-space: pre-wrap; line-height: 1.6; color: #e2e8f0; margin: 0;">${message}</p>
      </div>

      <p style="color: #64748b; font-size: 12px; margin-top: 20px; text-align: center;">
        Submitted at: ${timeString} | Absediel Technologies
      </p>
    </div>
  `;

  // 2. Confirmation Email to Client / User
  const userSubject = `Thank you for contacting Absediel Technologies, ${name}!`;
  const userHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; color: #1e293b; border-radius: 12px; border: 1px solid #e2e8f0;">
      <div style="text-align: center; border-bottom: 2px solid #0284c7; padding-bottom: 16px; margin-bottom: 24px;">
        <h2 style="color: #0369a1; margin: 0;">Absediel Technologies</h2>
        <p style="color: #64748b; font-size: 14px; margin: 6px 0 0 0;">Empowering Digital Innovation</p>
      </div>

      <p style="font-size: 16px; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
      <p style="font-size: 15px; line-height: 1.6; color: #334155;">
        Thank you for reaching out to us regarding <strong>${serviceInterest}</strong>. We have received your inquiry and our team is already reviewing your details.
      </p>

      <div style="background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 14px 18px; margin: 20px 0; border-radius: 4px;">
        <p style="margin: 0; font-size: 14px; color: #475569;">
          <strong>Your Message:</strong><br />
          <em>"${message}"</em>
        </p>
      </div>

      <p style="font-size: 15px; line-height: 1.6; color: #334155;">
        Our team will get in touch with you within <strong>24 business hours</strong>. If your inquiry is urgent, feel free to reply directly to this email or reach us on WhatsApp.
      </p>

      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
      <div style="text-align: center; color: #64748b; font-size: 13px;">
        <p style="margin: 4px 0;"><strong>Absediel Technologies</strong></p>
        <p style="margin: 4px 0;">Email: <a href="mailto:absedieltechnologies@gmail.com" style="color: #0284c7;">absedieltechnologies@gmail.com</a></p>
        <p style="margin: 4px 0;">Website: <a href="https://absediel-technologies.vercel.app" style="color: #0284c7;">absediel-technologies.vercel.app</a></p>
      </div>
    </div>
  `;

  // Send to Admin
  await sendEmail({
    to: ADMIN_EMAIL,
    subject: adminSubject,
    html: adminHtml,
    text: `New Inquiry from ${name} (${email}, ${phone || 'No phone'}):\n\nService: ${serviceInterest}\nMessage:\n${message}`,
  });

  // Send to User
  if (email && email.includes('@')) {
    await sendEmail({
      to: email,
      subject: userSubject,
      html: userHtml,
      text: `Hi ${name},\n\nThank you for reaching out to Absediel Technologies regarding ${serviceInterest}. We have received your inquiry and will contact you within 24 hours.\n\nBest regards,\nAbsediel Technologies Team`,
    });
  }
}

/**
 * Handle Quotation Form submission emails (Sends to Admin + Sends confirmation to Client)
 */
export async function sendQuotationEmails({
  name,
  company,
  email,
  phone,
  services,
  timeline,
  budget,
  features,
  description,
}) {
  const timeString = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

  // 1. Email to Admin
  const adminSubject = `💼 New Quotation Request: ${name} (${company || 'Individual'})`;
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0f172a; color: #f8fafc; border-radius: 12px; border: 1px solid #1e293b;">
      <div style="border-bottom: 2px solid #eab308; padding-bottom: 12px; margin-bottom: 20px;">
        <h2 style="color: #facc15; margin: 0;">New Project Quotation Request</h2>
        <p style="color: #94a3b8; margin: 5px 0 0 0; font-size: 14px;">Absediel Technologies Website</p>
      </div>

      <div style="background-color: #1e293b; padding: 18px; border-radius: 8px; margin-bottom: 18px;">
        <p style="margin: 8px 0;"><strong style="color: #fde047;">Client Name:</strong> ${name}</p>
        <p style="margin: 8px 0;"><strong style="color: #fde047;">Company:</strong> ${company || 'Individual / Not specified'}</p>
        <p style="margin: 8px 0;"><strong style="color: #fde047;">Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
        <p style="margin: 8px 0;"><strong style="color: #fde047;">Phone:</strong> ${phone || 'Not provided'}</p>
        <p style="margin: 8px 0;"><strong style="color: #fde047;">Services Needed:</strong> ${services}</p>
        <p style="margin: 8px 0;"><strong style="color: #fde047;">Timeline:</strong> ${timeline}</p>
        <p style="margin: 8px 0;"><strong style="color: #fde047;">Budget:</strong> ${budget}</p>
        ${features ? `<p style="margin: 8px 0;"><strong style="color: #fde047;">Features:</strong> ${features}</p>` : ''}
      </div>

      <div style="background-color: #1e293b; padding: 18px; border-radius: 8px;">
        <strong style="color: #fde047; display: block; margin-bottom: 8px;">Project Description:</strong>
        <p style="white-space: pre-wrap; line-height: 1.6; color: #e2e8f0; margin: 0;">${description}</p>
      </div>

      <p style="color: #64748b; font-size: 12px; margin-top: 20px; text-align: center;">
        Submitted at: ${timeString} | Absediel Technologies
      </p>
    </div>
  `;

  // 2. Confirmation Email to Client / User
  const userSubject = `We have received your quotation request, ${name}! - Absediel Technologies`;
  const userHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #ffffff; color: #1e293b; border-radius: 12px; border: 1px solid #e2e8f0;">
      <div style="text-align: center; border-bottom: 2px solid #eab308; padding-bottom: 16px; margin-bottom: 24px;">
        <h2 style="color: #0369a1; margin: 0;">Absediel Technologies</h2>
        <p style="color: #64748b; font-size: 14px; margin: 6px 0 0 0;">Custom Software & Digital Solutions</p>
      </div>

      <p style="font-size: 16px; line-height: 1.6;">Dear <strong>${name}</strong>,</p>
      <p style="font-size: 15px; line-height: 1.6; color: #334155;">
        Thank you for requesting a project proposal from <strong>Absediel Technologies</strong>. We are excited about the prospect of partnering with you!
      </p>

      <div style="background-color: #f8fafc; border-left: 4px solid #eab308; padding: 14px 18px; margin: 20px 0; border-radius: 4px;">
        <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>Services Requested:</strong> ${services}</p>
        <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>Estimated Timeline:</strong> ${timeline}</p>
        <p style="margin: 6px 0; font-size: 14px; color: #334155;"><strong>Budget Range:</strong> ${budget}</p>
      </div>

      <p style="font-size: 15px; line-height: 1.6; color: #334155;">
        Our engineering and solution architecture team is reviewing your requirements. We will prepare an estimated timeline and quotation, and get back to you shortly.
      </p>

      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
      <div style="text-align: center; color: #64748b; font-size: 13px;">
        <p style="margin: 4px 0;"><strong>Absediel Technologies</strong></p>
        <p style="margin: 4px 0;">Email: <a href="mailto:absedieltechnologies@gmail.com" style="color: #0284c7;">absedieltechnologies@gmail.com</a></p>
        <p style="margin: 4px 0;">Website: <a href="https://absediel-technologies.vercel.app" style="color: #0284c7;">absediel-technologies.vercel.app</a></p>
      </div>
    </div>
  `;

  // Send to Admin
  await sendEmail({
    to: ADMIN_EMAIL,
    subject: adminSubject,
    html: adminHtml,
    text: `New Quotation Request from ${name} (${email}, ${phone || 'No phone'}):\nCompany: ${company}\nServices: ${services}\nTimeline: ${timeline}\nBudget: ${budget}\n\nDescription:\n${description}`,
  });

  // Send to User
  if (email && email.includes('@')) {
    await sendEmail({
      to: email,
      subject: userSubject,
      html: userHtml,
      text: `Dear ${name},\n\nThank you for requesting a quotation from Absediel Technologies for ${services}. Our team is reviewing your requirements and will share an estimate shortly.\n\nBest regards,\nAbsediel Technologies Team`,
    });
  }
}

// Backward compatibility export
export async function sendEmailNotification(toEmail, subject, textBody) {
  return sendEmail({ to: toEmail, subject, text: textBody });
}
