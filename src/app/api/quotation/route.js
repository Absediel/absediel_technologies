import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sendEmailNotification } from '@/lib/email';

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      company = '',
      email,
      phone,
      services,
      timeline,
      budget,
      features = '',
      description,
    } = body;

    if (!name || !email || !description) {
      return NextResponse.json(
        { error: 'Name, email, and project description are required.' },
        { status: 400 }
      );
    }

    const servicesStr = Array.isArray(services) ? services.join(', ') : String(services || '');
    const featuresStr = Array.isArray(features) ? features.join(', ') : String(features || '');

    // Save to Database
    const quotation = await prisma.quotationSubmission.create({
      data: {
        name: String(name).trim(),
        company: String(company).trim(),
        email: String(email).trim().toLowerCase(),
        phone: String(phone || '').trim(),
        services: servicesStr,
        timeline: String(timeline || 'Flexible').trim(),
        budget: String(budget || 'Undisclosed').trim(),
        features: featuresStr,
        description: String(description).trim(),
      },
    });

    // Send Email Notification
    const emailSubject = `New Project Quotation Request: ${name} (${company || 'Individual'})`;
    const emailBody = `New Quotation Proposal Submission received:
--------------------------------------------------
Client Name: ${name}
Company: ${company || 'Individual / Not specified'}
Email: ${email}
Phone: ${phone || 'Not provided'}
Services: ${servicesStr}
Timeline: ${timeline}
Budget: ${budget}
Features: ${featuresStr || 'None specified'}

Project Description:
${description}
--------------------------------------------------
Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`;

    sendEmailNotification(process.env.NOTIFICATION_EMAIL, emailSubject, emailBody).catch((err) =>
      console.error('[API Quotation] Email dispatch error:', err)
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Your quotation request has been received. Our team will contact you shortly.',
        data: quotation,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[API Quotation Error]:', error);
    return NextResponse.json(
      { error: 'Failed to process quotation request.' },
      { status: 500 }
    );
  }
}
