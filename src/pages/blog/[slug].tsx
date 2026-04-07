import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

interface BlogPostPageProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  mdxSource: MDXRemoteSerializeResult;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const post = getPostBySlug(slug);

  if (!post) {
    return { notFound: true };
  }

  const mdxSource = await serialize(post.content);

  return {
    props: {
      title: post.title,
      description: post.description,
      date: post.date,
      readTime: post.readTime,
      tags: post.tags,
      mdxSource,
    },
  };
};

const mdxComponents = {
  h2: (props: React.ComponentProps<'h2'>) => (
    <h2
      className="mt-10 mb-4 text-2xl font-bold text-zinc-900 dark:text-zinc-100"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<'h3'>) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold text-zinc-900 dark:text-zinc-100"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<'p'>) => (
    <p
      className="mb-4 leading-relaxed text-zinc-600 dark:text-zinc-400"
      {...props}
    />
  ),
  ul: (props: React.ComponentProps<'ul'>) => (
    <ul className="mb-4 list-disc space-y-2 pl-6" {...props} />
  ),
  ol: (props: React.ComponentProps<'ol'>) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6" {...props} />
  ),
  li: (props: React.ComponentProps<'li'>) => (
    <li className="text-zinc-600 dark:text-zinc-400" {...props} />
  ),
  code: (props: React.ComponentProps<'code'>) => (
    <code
      className="rounded bg-zinc-100 px-1.5 py-0.5 font-mono text-sm text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200"
      {...props}
    />
  ),
  pre: (props: React.ComponentProps<'pre'>) => (
    <pre
      className="mb-4 overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-sm dark:border-zinc-800 dark:bg-zinc-900"
      {...props}
    />
  ),
  blockquote: (props: React.ComponentProps<'blockquote'>) => (
    <blockquote
      className="mb-4 border-l-2 border-zinc-300 pl-4 text-zinc-500 italic dark:border-zinc-700 dark:text-zinc-400"
      {...props}
    />
  ),
  strong: (props: React.ComponentProps<'strong'>) => (
    <strong
      className="font-semibold text-zinc-900 dark:text-zinc-100"
      {...props}
    />
  ),
};

export default function BlogPostPage({
  title,
  description,
  date,
  readTime,
  tags,
  mdxSource,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{title} — Arun Kundu</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} — Arun Kundu`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
      </Head>

      <div className="pt-32 pb-24">
        <Container className="max-w-3xl">
          <AnimateOnScroll>
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 8H3M7 4L3 8l4 4" />
              </svg>
              Back to Blog
            </Link>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.1}>
            <header className="mb-12">
              <div className="mb-4 flex items-center gap-3 text-sm text-zinc-400 dark:text-zinc-500">
                <time>{formatDate(date)}</time>
                <span>&middot;</span>
                <span>{readTime}</span>
              </div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
                {title}
              </h1>
              <p className="mb-6 text-lg text-zinc-500 dark:text-zinc-400">
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              <div className="mt-8 h-px bg-zinc-200 dark:bg-zinc-800" />
            </header>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.2}>
            <article className="prose-custom">
              <MDXRemote {...mdxSource} components={mdxComponents} />
            </article>
          </AnimateOnScroll>
        </Container>
      </div>
    </>
  );
}
