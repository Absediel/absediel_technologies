import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendEmailNotification } from '@/lib/email';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, serviceInterest, service_interest, message } = body;

    const selectedService = serviceInterest || service_interest || 'General Inquiry';

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields.' },
        { status: 400 }
      );
    }

    // Save to Database
    const submission = await prisma.contactSubmission.create({
      data: {
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        phone: String(phone || '').trim(),
        serviceInterest: String(selectedService).trim(),
        message: String(message).trim(),
      },
    });

    // Send Email Notification
    const emailSubject = `New Contact Inquiry: ${name} (${selectedService})`;
    const emailBody = `You received a new contact inquiry from Absediel Technologies website:
--------------------------------------------------
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service Interest: ${selectedService}
Message:
${message}
--------------------------------------------------
Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

    // Background email trigger (doesn't block client response)
    sendEmailNotification(process.env.NOTIFICATION_EMAIL, emailSubject, emailBody).catch((err) =>
      console.error('[API Contact] Email dispatch error:', err)
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Your inquiry has been submitted successfully!',
        data: submission,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[API Contact Error]:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while saving your inquiry.' },
      { status: 500 }
    );
  }
}
