import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const highlights = [
  'Lead a 2-developer pod at Shikho — Student Portal revamp shipped with 20% faster initial load.',
  'Built Shikho AI on top of Gemini 2.0 Flash with subject-specific context for students.',
  'Drove a CMS revamp with multi-timezone support that cut redundant API calls by ~34%.',
  'Shipped 20+ reusable components across Monstarlab projects — ~25% faster delivery.',
  'Comfortable across the stack: Node/Express/Nest, Java/Spring Boot, PostgreSQL & MongoDB.',
  'Recent pet projects in microservices (RabbitMQ, Redis) and Next.js + Postgres + Drizzle.',
];

const facts = [
  { label: 'Based in', value: 'Dhaka, Bangladesh' },
  { label: 'Experience', value: '6+ years' },
  { label: 'Currently', value: 'Sr. FE Engineer @ Shikho' },
  { label: 'Focus', value: 'Full-Stack JS / TS' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading
          title="About"
          subtitle="Frontend depth, full-stack ownership, team-first mindset."
        />

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <AnimateOnScroll>
            <div className="space-y-5 text-zinc-600 dark:text-zinc-400">
              <p className="leading-relaxed">
                I&apos;m{' '}
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  Arun Kundu
                </span>
                , a senior software engineer based in Dhaka. The last five years
                of my career have been spent building frontend-heavy products in
                the React and Next.js ecosystem, working alongside backend teams
                and shipping at production scale.
              </p>
              <p className="leading-relaxed">
                Before that, I built backend systems in Java and Spring Boot.
                Today I&apos;m investing back in that side of the stack —
                Node/Nest, Postgres, microservices — because I want to keep
                growing into a full-stack engineer who can own a feature from
                schema to UI.
              </p>
              <p className="leading-relaxed">
                Currently at{' '}
                <a
                  href="https://shikho.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 underline-offset-4 hover:underline dark:text-blue-400"
                >
                  Shikho
                </a>
                , I lead a team of two developers and own initiatives like{' '}
                <span className="font-medium text-zinc-900 dark:text-zinc-100">
                  Shikho AI
                </span>{' '}
                and the Student Portal revamp. Before that, I worked at
                Monstarlab with borderless teams on international client
                projects in Saudi Arabia, Japan, and Europe.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-3">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <p className="text-[11px] font-medium tracking-wider text-zinc-400 uppercase dark:text-zinc-500">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-6 dark:border-zinc-800 dark:from-zinc-950 dark:to-zinc-900/60">
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-100">
                  Highlights
                </h3>
                <ul className="space-y-3">
                  {highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-1 flex-shrink-0 text-blue-600 dark:text-blue-400"
                      >
                        <path d="M3 8l3 3 7-7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
