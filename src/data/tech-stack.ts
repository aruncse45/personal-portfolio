import type { TechCategory } from '@/types';

export const techStack: TechCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 'expert' },
      { name: 'Next.js', level: 'expert' },
      { name: 'TypeScript', level: 'expert' },
      { name: 'Tailwind CSS', level: 'expert' },
      { name: 'Redux Toolkit', level: 'advanced' },
      { name: 'React Query', level: 'advanced' },
      { name: 'Framer Motion', level: 'advanced' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', level: 'advanced' },
      { name: 'Express.js', level: 'advanced' },
      { name: 'NestJS', level: 'intermediate' },
      { name: 'REST APIs', level: 'advanced' },
      { name: 'WebSocket', level: 'intermediate' },
    ],
  },
  {
    category: 'Database & Infra',
    items: [
      { name: 'MongoDB', level: 'advanced' },
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'Prisma', level: 'intermediate' },
      { name: 'Redis', level: 'intermediate' },
    ],
  },
  {
    category: 'Tools & Practices',
    items: [
      { name: 'Git', level: 'expert' },
      { name: 'CI/CD', level: 'advanced' },
      { name: 'Docker', level: 'intermediate' },
      { name: 'Testing (Vitest/Jest)', level: 'advanced' },
      { name: 'Storybook', level: 'advanced' },
      { name: 'Figma', level: 'advanced' },
    ],
  },
];
