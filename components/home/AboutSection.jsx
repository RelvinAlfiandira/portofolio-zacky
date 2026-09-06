'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-[80vh] flex flex-col justify-between p-6 sm:p-10 lg:p-12 bg-white/[0.03] backdrop-blur-md sm:backdrop-blur-lg rounded-[32px] overflow-hidden border border-white/15 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] mt-12 sm:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-4"
        >
          <div className="relative w-full max-w-sm sm:max-w-md h-[380px] sm:h-[450px] lg:h-[480px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent shadow-2xl">
            <Image
              src="/potoprofile-rmv-bg.png"
              alt="Muhammad Zacky Al Ghifari"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-8"
        >
          <div className="space-y-4">
            <p className="text-zinc-100 text-base sm:text-lg leading-relaxed text-left sm:text-justify">
              I am <span className="font-semibold text-zinc-100">Muhammad Zacky Al Ghifari</span>, an Information Technology Education student at Universitas Brawijaya, Faculty of Computer Science, with a primary focus on{' '}
              <span className="font-medium text-zinc-100">Backend Development</span>. I have a strong interest in building structured systems, designing{' '}
              <span className="font-medium text-zinc-100">REST APIs</span>, managing{' '}
              <span className="font-medium text-zinc-100">databases</span>, and understanding how applications function efficiently behind the scenes.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button href="mailto:zackyalghifr@gmail.com?subject=Let's%20Connect" variant="white" icon={ArrowRight}>
                Let&apos;s Connect
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}