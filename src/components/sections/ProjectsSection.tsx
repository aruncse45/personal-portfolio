import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProjectModal } from '@/components/ui/ProjectModal';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { projects } from '@/data/projects';
import type { Project } from '@/types';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-zinc-50/50 py-24 dark:bg-zinc-900/30">
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="Architecture-driven work. Each one built to production standard."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} delay={index * 0.08}>
              <button
                onClick={() => setSelectedProject(project)}
                className="w-full text-left"
              >
                <Card className="flex h-full flex-col">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {project.title}
                    </h3>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="mt-1 flex-shrink-0 text-zinc-400"
                    >
                      <path d="M6 4l4 4-4 4" />
                    </svg>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                    {project.stack.length > 4 && (
                      <Badge variant="outline">
                        {`+${project.stack.length - 4}`}
                      </Badge>
                    )}
                  </div>

                  <div className="mt-auto rounded-lg bg-zinc-50 px-3 py-2 dark:bg-zinc-800/50">
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      Impact:{' '}
                    </span>
                    <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      {project.impact}
                    </span>
                  </div>
                </Card>
              </button>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
