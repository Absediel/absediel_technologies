import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendContactEmails } from '@/lib/email';

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

    // Send Email Notifications (Admin + Client Confirmation)
    sendContactEmails({
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone || '').trim(),
      serviceInterest: String(selectedService).trim(),
      message: String(message).trim(),
    }).catch((err) =>
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
