import nodemailer from 'nodemailer';

interface MailOptions {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(options: MailOptions): Promise<void> {
  const { name, email, subject, message } = options;

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: process.env.CONTACT_EMAIL,
    replyTo: email,
    subject: `[Portfolio] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family: system-ui, sans-serif; max-width: 600px;">
        <h2 style="color: #18181b;">New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr style="border: 1px solid #e4e4e7;" />
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
  });
}
