import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'employee-timelog',
    title: 'Employee Timelog',
    description:
      'Fullstack time-tracking platform with role-based dashboards, real-time analytics, and automated reporting for workforce management.',
    stack: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Tailwind CSS',
      'NextAuth',
    ],
    impact: 'Reduced manual reporting time by 60%',
    role: 'Fullstack Developer & Architect',
    details:
      'Built end-to-end from database schema design to production deployment. Implemented role-based access control with three permission tiers, real-time dashboard with aggregated metrics, and CSV/PDF export pipelines.',
    architecture:
      'Monorepo architecture with Next.js App Router. Server Components for data-heavy pages, Client Components only where interactivity is required. Prisma ORM with connection pooling. API routes with middleware chain for auth, validation, and rate limiting. Optimistic UI updates with React Query for mutation feedback.',
    highlights: [
      'Role-based access control (Admin, Manager, Employee)',
      'Real-time analytics dashboard with aggregated metrics',
      'Automated PDF/CSV report generation',
      'Server-side pagination with cursor-based approach',
      'Deployed with CI/CD pipeline on Vercel',
    ],
  },
  {
    id: 'chat-app',
    title: 'Real-time Chat Application',
    description:
      'Full-duplex messaging platform with WebSocket integration, typing indicators, online presence, and message persistence.',
    stack: ['NestJS', 'WebSocket', 'Next.js', 'TypeScript', 'MongoDB', 'Redis'],
    impact: 'Sub-50ms message delivery latency',
    role: 'Fullstack Developer',
    details:
      'Designed and implemented a real-time chat system with persistent message history, typing indicators, and online/offline presence tracking. Handled WebSocket connection lifecycle management and reconnection strategies.',
    architecture:
      'NestJS backend with Gateway pattern for WebSocket handling. Redis pub/sub for horizontal scaling across multiple server instances. MongoDB for message persistence with TTL indexes. Next.js frontend with custom WebSocket hook managing connection state, reconnection backoff, and message queue. Separation of real-time transport layer from business logic.',
    highlights: [
      'WebSocket Gateway with room-based architecture',
      'Redis pub/sub for multi-instance message broadcast',
      'Exponential backoff reconnection strategy',
      'Typing indicators with debounce optimization',
      'Message delivery confirmation system',
    ],
  },
  {
    id: 'mail-sender',
    title: 'MailSender Service',
    description:
      'RESTful email dispatch service with template management, queue processing, and delivery tracking for transactional emails.',
    stack: ['Express.js', 'MongoDB', 'Nodemailer', 'Bull Queue', 'EJS'],
    impact: '99.2% delivery success rate',
    role: 'Backend Developer',
    details:
      'Built a production-grade email service handling template rendering, queue-based dispatch, retry logic, and delivery status webhooks. Designed for high throughput with graceful degradation under load.',
    architecture:
      'Express.js REST API with controller-service-repository pattern. Bull queue backed by Redis for async email processing with configurable retry policies. EJS template engine for dynamic email rendering. MongoDB for template storage and delivery logs. Health check endpoints and Prometheus-compatible metrics.',
    highlights: [
      'Queue-based async processing with Bull',
      'Configurable retry policy with dead letter queue',
      'Template versioning and A/B testing support',
      'Webhook callbacks for delivery status',
      'Rate limiting per sender domain',
    ],
  },
  {
    id: 'shikho-ai',
    title: 'Shikho AI',
    description:
      'AI-powered learning assistant integrating Google Gemini for contextual Q&A, content summarization, and adaptive learning paths.',
    stack: [
      'Next.js',
      'TypeScript',
      'Gemini API',
      'Tailwind CSS',
      'Streaming SSE',
    ],
    impact: 'Streaming responses with <200ms TTFB',
    role: 'Frontend Lead & AI Integration',
    details:
      'Integrated Google Gemini API with streaming response handling, context window management, and conversation memory. Built a polished chat interface with markdown rendering and code syntax highlighting.',
    architecture:
      'Next.js with Route Handlers for API proxy layer. Server-Sent Events for streaming token delivery. Client-side conversation state management with context window truncation strategy. Prompt engineering layer with system instructions, few-shot examples, and safety filters. Edge-compatible API routes for low-latency global deployment.',
    highlights: [
      'Streaming SSE integration with Gemini API',
      'Context window management with token counting',
      'Markdown + code syntax highlighting in responses',
      'Conversation memory with session persistence',
      'Prompt engineering with safety guardrails',
    ],
  },
  {
    id: 'cms-revamp',
    title: 'CMS Platform Revamp',
    description:
      'Large-scale CMS modernization with multi-timezone scheduling, API optimization, and component-driven architecture migration.',
    stack: [
      'React',
      'TypeScript',
      'Redux Toolkit',
      'REST API',
      'date-fns-tz',
      'Webpack',
    ],
    impact: 'Reduced API calls by 34%, bugs by 26%',
    role: 'Frontend Lead',
    details:
      'Led the frontend modernization of a legacy CMS serving 50+ content editors across multiple timezones. Implemented intelligent caching, request deduplication, and optimistic updates that dramatically reduced server load. Established component library and testing standards.',
    architecture:
      'React with Redux Toolkit for global state. RTK Query for server state with automatic cache invalidation and request deduplication — key driver behind the 34% API call reduction. Multi-timezone date handling with date-fns-tz and UTC normalization layer. Component-driven development with Storybook. Webpack Module Federation for micro-frontend integration with legacy modules.',
    highlights: [
      '34% reduction in API calls via RTK Query caching',
      '26% reduction in bugs through TypeScript migration',
      'Multi-timezone content scheduling system',
      'Component library with Storybook documentation',
      'Incremental migration from legacy jQuery modules',
    ],
  },
];
