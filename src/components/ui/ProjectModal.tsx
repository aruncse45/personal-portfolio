import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import type { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-x-4 top-[5vh] z-50 mx-auto max-h-[90vh] max-w-3xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-8 shadow-2xl sm:inset-x-auto dark:border-zinc-800 dark:bg-zinc-950"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
              aria-label="Close modal"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="4" y1="4" x2="12" y2="12" />
                <line x1="12" y1="4" x2="4" y2="12" />
              </svg>
            </button>

            <div className="mb-2 text-sm font-medium tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
              {project.role}
            </div>

            <h3 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              {project.title}
            </h3>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>

            <div className="mb-6 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 dark:border-emerald-900 dark:bg-emerald-950/30">
              <span className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                Impact:{' '}
              </span>
              <span className="text-sm text-emerald-700 dark:text-emerald-400">
                {project.impact}
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-100">
                  Overview
                </h4>
                <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.details}
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-100">
                  Architecture
                </h4>
                <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.architecture}
                </p>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-100">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
