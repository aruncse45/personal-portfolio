import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const leadership = [
  {
    title: 'Frontend Team Lead',
    description:
      'Led a team of 5 frontend engineers through a major CMS platform revamp. Established code review standards, introduced TypeScript strict mode, and implemented a component library with Storybook — resulting in a 26% reduction in production bugs.',
    metrics: [
      '5 engineers managed',
      '26% fewer bugs',
      'Component library built',
    ],
  },
  {
    title: 'Architecture & API Optimization',
    description:
      'Designed and implemented an intelligent caching layer with RTK Query that reduced redundant API calls by 34%. Introduced request deduplication, optimistic updates, and cache invalidation patterns across the application.',
    metrics: [
      '34% fewer API calls',
      'RTK Query migration',
      'Cache invalidation patterns',
    ],
  },
  {
    title: 'Process & Developer Experience',
    description:
      'Built CI/CD pipelines, enforced linting and formatting standards, and established PR review workflows. Mentored junior developers on React patterns, TypeScript best practices, and clean architecture principles.',
    metrics: [
      'CI/CD pipeline setup',
      'PR review workflow',
      'Junior developer mentoring',
    ],
  },
];

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-24">
      <Container>
        <SectionHeading
          title="Leadership"
          subtitle="Impact through technical decisions and team growth."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {leadership.map((item, index) => (
            <AnimateOnScroll key={item.title} delay={index * 0.1}>
              <div className="flex h-full flex-col rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="mb-3 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                  {item.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="inline-flex items-center rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
