import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <motion.section
      id="hero"
      ref={ref}
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center px-4 py-24 md:py-32"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        Hi, I’m <span className="text-accent">Baginda Isfa</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7 }}
      >
        Senior Full Stack Engineer with 5+ years of experience building scalable
        platforms, high-performance APIs, and modern frontends for enterprise
        systems, global data platforms, and large-scale engineering teams.
      </motion.p>

      <motion.p
        className="mt-3 text-sm md:text-base text-gray-500 dark:text-gray-400 max-w-xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        Experienced in React, Next.js, TypeScript, Node.js, Go, Java Spring
        Boot, PostgreSQL, and system design.
      </motion.p>

      <motion.div
        className="mt-8 flex gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.6 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-accent text-white text-sm md:text-base shadow-glow hover:shadow-lg hover:-translate-y-[2px] transition-transform duration-200"
        >
          View My Work
        </a>
        <a
          href="#experience"
          className="px-6 py-3 rounded-full border border-gray-400 dark:border-gray-600 text-sm md:text-base hover:bg-gray-100 dark:hover:bg-gray-900 hover:-translate-y-[2px] transition-all duration-200"
        >
          View Experience
        </a>
      </motion.div>
    </motion.section>
  );
}
