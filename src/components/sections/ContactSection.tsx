import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { motion, AnimatePresence } from 'framer-motion';
import type { ContactFormData, ApiResponse } from '@/types';

const inputStyles =
  'w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500';

const errorStyles = 'mt-1.5 text-xs text-red-500 dark:text-red-400';

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [apiMessage, setApiMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  async function onSubmit(data: ContactFormData) {
    try {
      setStatus('idle');
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = (await res.json()) as ApiResponse;

      if (!res.ok) {
        setStatus('error');
        setApiMessage(json.message || 'Something went wrong.');
        return;
      }

      setStatus('success');
      setApiMessage(json.message);
      reset();
    } catch {
      setStatus('error');
      setApiMessage('Network error. Please try again.');
    }
  }

  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionHeading
          title="Contact"
          subtitle="Have a project in mind? Let's talk."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <AnimateOnScroll>
            <div className="space-y-6">
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                I&apos;m open to freelance projects, full-time roles, and
                interesting collaborations. Whether you need a frontend
                specialist or someone who can own the full stack — reach out.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  arun@example.com
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Kolkata, India
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <input
                  {...register('name', {
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Min 2 characters' },
                  })}
                  placeholder="Name"
                  className={inputStyles}
                />
                {errors.name && (
                  <p className={errorStyles}>{errors.name.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Invalid email',
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className={inputStyles}
                />
                {errors.email && (
                  <p className={errorStyles}>{errors.email.message}</p>
                )}
              </div>

              <div>
                <input
                  {...register('subject', {
                    required: 'Subject is required',
                    minLength: { value: 3, message: 'Min 3 characters' },
                  })}
                  placeholder="Subject"
                  className={inputStyles}
                />
                {errors.subject && (
                  <p className={errorStyles}>{errors.subject.message}</p>
                )}
              </div>

              <div>
                <textarea
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Min 10 characters' },
                  })}
                  placeholder="Message"
                  rows={5}
                  className={inputStyles + ' resize-none'}
                />
                {errors.message && (
                  <p className={errorStyles}>{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" isLoading={isSubmitting} size="lg">
                Send Message
              </Button>

              <AnimatePresence mode="wait">
                {status !== 'idle' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className={
                      status === 'success'
                        ? 'rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-400'
                        : 'rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-400'
                    }
                  >
                    {apiMessage}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
