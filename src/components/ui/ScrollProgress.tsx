import { motion, useScroll } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-[60] h-[2px] origin-left bg-zinc-900 dark:bg-zinc-100"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
