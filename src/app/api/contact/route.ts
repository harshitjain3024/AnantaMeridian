import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = 'harshitjain20of11@gmail.com';
const FROM_EMAIL = 'Ananta Meridian <onboarding@resend.dev>';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { fullName, companyName, email, phone, enquiryType, message } = body;

  if (!fullName || !companyName || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `[${enquiryType}] New enquiry from ${fullName} — ${companyName}`,
    html: `
      <table style="font-family:sans-serif;font-size:14px;color:#1a1a2e;max-width:560px;width:100%">
        <tr><td style="padding:24px 0 8px">
          <h2 style="margin:0;font-size:20px">New Enquiry — Ananta Meridian</h2>
        </td></tr>
        <tr><td style="border-top:2px solid #c9a84c;padding-top:16px">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px 0;color:#666;width:140px">Name</td><td style="padding:6px 0;font-weight:600">${fullName}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Company</td><td style="padding:6px 0;font-weight:600">${companyName}</td></tr>
            <tr><td style="padding:6px 0;color:#666">Email</td><td style="padding:6px 0"><a href="mailto:${email}" style="color:#c9a84c">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding:6px 0;color:#666">Phone</td><td style="padding:6px 0">${phone}</td></tr>` : ''}
            <tr><td style="padding:6px 0;color:#666">Enquiry Type</td><td style="padding:6px 0">${enquiryType}</td></tr>
          </table>
        </td></tr>
        <tr><td style="padding:16px 0 0">
          <p style="margin:0 0 8px;color:#666;font-size:12px;text-transform:uppercase;letter-spacing:.05em">Message</p>
          <p style="margin:0;white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:6px">${message}</p>
        </td></tr>
      </table>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
