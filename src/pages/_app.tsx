import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Layout } from '@/components/layout/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';

const SITE_TITLE = 'Arun Kundu — Senior Software Engineer';
const SITE_DESCRIPTION =
  'Senior Software Engineer with 6+ years of experience building performant, scalable web applications. Frontend specialist with growing full-stack ownership across React, Next.js, Node.js, and TypeScript.';
const SITE_URL = 'https://arunkundu.vercel.app';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Arun Kundu" />
        <meta
          name="keywords"
          content="Arun Kundu, Senior Frontend Engineer, Full Stack Developer, React, Next.js, TypeScript, Node.js, Dhaka, Bangladesh"
        />
        <link rel="canonical" href={SITE_URL} />

        {/* OpenGraph */}
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
      </Head>
      <Layout>
        <AnimatePresence mode="wait">
          <motion.div
            key={router.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}
