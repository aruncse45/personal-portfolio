import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <Container>
        <SectionHeading
          title="About"
          subtitle="Engineer first. Architect by instinct."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <AnimateOnScroll>
            <div className="space-y-5 text-zinc-600 dark:text-zinc-400">
              <p className="leading-relaxed">
                I&apos;m a Fullstack Engineer with 6+ years of deep frontend
                experience and growing backend proficiency. My core strength
                lies in building complex, performant user interfaces with React
                and Next.js — but I think in systems, not just components.
              </p>
              <p className="leading-relaxed">
                I&apos;ve led frontend teams, driven architectural decisions
                that reduced API calls by 34%, and built fullstack applications
                from database schema to deployment pipeline. I approach every
                project with the mindset of an architect: considering
                scalability, maintainability, and developer experience from day
                one.
              </p>
              <p className="leading-relaxed">
                Currently exploring AI integrations with Google Gemini and
                pushing deeper into backend systems with NestJS and PostgreSQL.
                I believe the best frontend engineers understand the full stack.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.15}>
            <div className="space-y-6">
              <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="mb-4 text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-100">
                  What I Bring
                </h3>
                <ul className="space-y-3">
                  {[
                    'Deep React & Next.js expertise (SSR, SSG, ISR)',
                    'TypeScript-first development with strict configs',
                    'State management architecture (Redux, Zustand, React Query)',
                    'API design & backend integration patterns',
                    'Performance optimization & Core Web Vitals',
                    'Team leadership & code review culture',
                    'CI/CD pipeline setup & deployment strategies',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
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
