import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { techStack } from '@/data/tech-stack';
import { cn } from '@/lib/utils';

const levelColors = {
  expert: 'bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900',
  advanced: 'bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300',
  intermediate:
    'border border-zinc-300 text-zinc-500 dark:border-zinc-700 dark:text-zinc-400',
};

export function TechStackSection() {
  return (
    <section id="stack" className="py-24">
      <Container>
        <SectionHeading
          title="Tech Stack"
          subtitle="Tools I use to build production software."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {techStack.map((category, categoryIndex) => (
            <AnimateOnScroll
              key={category.category}
              delay={categoryIndex * 0.1}
            >
              <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="mb-5 text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-100">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item.name}
                      className={cn(
                        'inline-flex items-center rounded-md px-3 py-1.5 text-xs font-medium',
                        levelColors[item.level],
                      )}
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.3}>
          <div className="mt-8 flex items-center gap-6 text-xs text-zinc-400 dark:text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded bg-zinc-900 dark:bg-zinc-100" />
              Expert
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded bg-zinc-200 dark:bg-zinc-800" />
              Advanced
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded border border-zinc-300 dark:border-zinc-700" />
              Intermediate
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
