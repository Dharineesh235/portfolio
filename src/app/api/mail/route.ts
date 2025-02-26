// src/app/api/mail/route.js

import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello, world!' });
}

export async function POST(request: NextRequest) {
  const { name, subject, message, email } = await request.json();
  const to = process.env.MAIN_EMAIL;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Sender address
    to, // List of receivers
    subject: `PORTFOLIO ${subject}`, // Subject line
    message:`${name}\n${message}\nSender Email :- ${email}`, // Plain text body
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent', info });
  } catch (error) {
    return NextResponse.json({ message: 'Error sending email', error });
  }
}

