import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TechStackSection } from '@/components/sections/TechStackSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { LeadershipSection } from '@/components/sections/LeadershipSection';
import { BlogPreviewSection } from '@/components/sections/BlogPreviewSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { getAllPosts } from '@/lib/mdx';
import type { BlogPost } from '@/types';

interface HomeProps {
  posts: BlogPost[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = getAllPosts().slice(0, 3);

  return {
    props: { posts },
  };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <LeadershipSection />
      <BlogPreviewSection posts={posts} />
      <ContactSection />
    </>
  );
}
