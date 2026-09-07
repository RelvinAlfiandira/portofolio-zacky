'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import TextType from '@/components/TextType'; 
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center pt-24 pb-12 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto relative z-10 my-auto py-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100 leading-[1.15]"
        >
          Hi, I&apos;m Zacky Al Ghifari.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-sky-200 mt-2 sm:mt-3 min-h-[48px] sm:min-h-[64px] flex items-center justify-center"
        >
          <TextType
            text={[
              "Beginner Programmer",
              "Backend Developer"
            ]}
            typingSpeed={60}
            deletingSpeed={35}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="|"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 text-sm sm:text-xl max-w-2xl mx-auto leading-relaxed px-2 mt-8 sm:mt-12"
        >
          I build the systems behind the applications, turning ideas into efficient and meaningful digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-10 sm:mt-14 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <Button href="/projects" variant="white" icon={ArrowRight}>
            View Projects
          </Button>

          <Button href="mailto:zackyalghifr@gmail.com?subject=Let's%20Connect" variant="blue" icon={ArrowRight}>
            Let&apos;s Connect
          </Button>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-[11px] sm:text-xs text-zinc-500 mt-8 sm:mt-12 relative z-10"
      >
        Open for collaboration opportunities
      </motion.p>
    </section>
  );
}