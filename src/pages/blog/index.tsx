import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { getAllPosts } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

interface BlogPageProps {
  posts: BlogPost[];
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

export default function BlogPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Blog — Arun Kundu</title>
        <meta
          name="description"
          content="Articles on frontend architecture, JavaScript internals, and engineering best practices."
        />
      </Head>

      <div className="pt-32 pb-24">
        <Container>
          <AnimateOnScroll>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Blog
            </h1>
            <p className="mb-12 text-lg text-zinc-500 dark:text-zinc-400">
              Deep dives into frontend engineering, architecture decisions, and
              JavaScript internals.
            </p>
          </AnimateOnScroll>

          <div className="space-y-6">
            {posts.map((post, index) => (
              <AnimateOnScroll key={post.slug} delay={index * 0.08}>
                <Link href={`/blog/${post.slug}`}>
                  <Card className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <h2 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        {post.title}
                      </h2>
                      <p className="mb-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                        {post.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-zinc-400 sm:flex-col sm:items-end sm:gap-1 dark:text-zinc-500">
                      <time>{formatDate(post.date)}</time>
                      <span>{post.readTime}</span>
                    </div>
                  </Card>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
