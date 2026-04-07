import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

interface BlogPreviewSectionProps {
  posts: BlogPost[];
}

export function BlogPreviewSection({ posts }: BlogPreviewSectionProps) {
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="bg-zinc-50/50 py-24 dark:bg-zinc-900/30">
      <Container>
        <div className="flex items-end justify-between">
          <SectionHeading
            title="Blog"
            subtitle="Writing about frontend architecture and engineering."
          />
          <AnimateOnScroll>
            <Link
              href="/blog"
              className="mb-16 hidden text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 sm:block dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              View all posts &rarr;
            </Link>
          </AnimateOnScroll>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <AnimateOnScroll key={post.slug} delay={index * 0.1}>
              <Link href={`/blog/${post.slug}`}>
                <Card className="flex h-full flex-col">
                  <div className="mb-3 flex items-center gap-3 text-xs text-zinc-400 dark:text-zinc-500">
                    <time>{formatDate(post.date)}</time>
                    <span>&middot;</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mb-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {post.title}
                  </h3>

                  <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/blog"
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              View all posts &rarr;
            </Link>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
