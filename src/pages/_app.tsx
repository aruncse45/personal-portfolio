import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { Layout } from '@/components/layout/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>Arun Kundu — Fullstack Engineer</title>
        <meta
          name="description"
          content="Fullstack Engineer (Frontend Specialist) with 6+ years of experience building performant, scalable web applications."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* OpenGraph */}
        <meta property="og:title" content="Arun Kundu — Fullstack Engineer" />
        <meta
          property="og:description"
          content="Fullstack Engineer (Frontend Specialist) with 6+ years of experience building performant, scalable web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Arun Kundu — Fullstack Engineer" />
        <meta
          name="twitter:description"
          content="Fullstack Engineer (Frontend Specialist) with 6+ years of experience building performant, scalable web applications."
        />
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
