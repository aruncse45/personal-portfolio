import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] dark:opacity-20" />

      {/* Soft accent glow */}
      <div className="pointer-events-none absolute top-1/3 -left-32 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-500/10" />
      <div className="pointer-events-none absolute -top-32 right-0 h-[24rem] w-[24rem] rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/10" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/60 px-3 py-1.5 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">
                Open to senior full-stack roles
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: 'easeOut' }}
              className="mb-4 text-sm font-medium tracking-widest text-blue-600 uppercase dark:text-blue-400"
            >
              Senior Frontend Engineer · Full-Stack JS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-5xl leading-[1.05] font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl dark:text-zinc-100"
            >
              Arun{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                Kundu
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400"
            >
              I&apos;m a software engineer with{' '}
              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                6+ years
              </span>{' '}
              of industry experience — five spent building frontend-heavy
              products in React, Next.js, and TypeScript, and the rest in
              backend systems with Node.js, Java, and Spring Boot. I lead teams,
              ship production systems, and care deeply about architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-zinc-800 hover:shadow-md dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                View Projects
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/aruncse45"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-3 py-3 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
              className="mt-14 grid max-w-lg grid-cols-3 gap-4"
            >
              <Stat value="6+" label="Years Experience" />
              <Stat value="~34%" label="API Calls Reduced" />
              <Stat value="20+" label="Reusable Components" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            <CodeCard />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-l-2 border-zinc-200 pl-4 dark:border-zinc-800">
      <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {value}
      </div>
      <div className="mt-1 text-xs leading-tight text-zinc-500 dark:text-zinc-400">
        {label}
      </div>
    </div>
  );
}

function CodeCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-lg" />
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900/60">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
          <span className="ml-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            arun.profile.ts
          </span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-zinc-700 dark:text-zinc-300">
          <code>
            <span className="text-purple-500">const</span>{' '}
            <span className="text-blue-500">arun</span> = {'{'}
            {'\n'}
            {'  '}role:{' '}
            <span className="text-emerald-500">
              &apos;Senior Frontend Engineer&apos;
            </span>
            ,{'\n'}
            {'  '}company:{' '}
            <span className="text-emerald-500">&apos;Shikho&apos;</span>,{'\n'}
            {'  '}location:{' '}
            <span className="text-emerald-500">
              &apos;Dhaka, Bangladesh&apos;
            </span>
            ,{'\n'}
            {'  '}stack: [{'\n'}
            {'    '}
            <span className="text-emerald-500">
              &apos;TypeScript&apos;
            </span>, <span className="text-emerald-500">&apos;React&apos;</span>
            ,{'\n'}
            {'    '}
            <span className="text-emerald-500">&apos;Next.js&apos;</span>,{' '}
            <span className="text-emerald-500">&apos;Node.js&apos;</span>,{'\n'}
            {'    '}
            <span className="text-emerald-500">
              &apos;PostgreSQL&apos;
            </span>,{' '}
            <span className="text-emerald-500">&apos;GraphQL&apos;</span>,{'\n'}
            {'  '}],{'\n'}
            {'  '}currentlyBuilding:{' '}
            <span className="text-emerald-500">&apos;Shikho AI&apos;</span>,
            {'\n'}
            {'  '}openTo:{' '}
            <span className="text-amber-500">&apos;Full-Stack roles&apos;</span>
            ,{'\n'}
            {'}'};{'\n'}
          </code>
        </pre>
      </div>
    </div>
  );
}
