export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  impact: string;
  details: string;
  architecture: string;
  role: string;
  highlights: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TechCategory {
  category: string;
  items: TechItem[];
}

export interface TechItem {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate';
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}
