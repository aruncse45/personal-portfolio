import type { NextApiRequest, NextApiResponse } from 'next';
import { contactFormSchema } from '@/lib/validators';
import { sendContactEmail } from '@/lib/mail';
import { rateLimit } from '@/lib/rate-limit';
import type { ApiResponse } from '@/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>,
) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' });
  }

  // Rate limiting by IP
  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket.remoteAddress ||
    'unknown';

  const { success: withinLimit } = rateLimit(ip);

  if (!withinLimit) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please try again later.',
    });
  }

  // Validate request body
  const parsed = contactFormSchema.safeParse(req.body);

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      if (!fieldErrors[key]) fieldErrors[key] = [];
      fieldErrors[key].push(issue.message);
    }

    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: fieldErrors,
    });
  }

  try {
    await sendContactEmail(parsed.data);

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully. I will get back to you soon.',
    });
  } catch (error) {
    console.error('Contact form error:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
}
