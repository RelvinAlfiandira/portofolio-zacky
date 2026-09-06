'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { achievementsData, currentlyLearning } from '@/data/achievements';
import { BookOpen, Building2, ArrowRight } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function AchievementsPage() {
  return (
    <main className="w-full min-h-screen pt-28 sm:pt-36 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-3 border-b border-white/10 pb-8"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
            Achievements
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed">
            Honors, academic milestones, and competition accomplishments throughout my journey.
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {achievementsData.map((item, index) => (
            <motion.div key={item.id} variants={itemVariants} className="group relative h-80">
              <Link href={`/achievements/${item.id}`} className="block h-full">
                <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-300 shadow-xl">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={index < 3} 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: item.imagePosition || 'center' }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#141414]" />
                  )}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

                  {/* Konten kartu */}
                  <div className="relative z-10 flex h-full flex-col justify-end p-6">
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-sans">
                        <Building2 size={12} />
                        <span>{item.organization}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-white">
                        <span>View Details</span>
                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Currently Learning
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-[32px] border border-white/10 bg-[#080808] p-6 sm:p-8 space-y-6 hover:border-white/20 transition-all duration-300 shadow-xl"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-[22px] bg-[#141414] text-zinc-200 border border-white/10">
              <BookOpen size={28} strokeWidth={1.5} />
            </div>
            <div className="space-y-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                Currently Learning
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans">
                Technologies, system design patterns, and architecture principles I am actively exploring.
              </p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-2.5 sm:gap-3 pt-2"
          >
            {currentlyLearning.map((subject) => (
              <motion.div
                key={subject}
                variants={badgeVariants}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#141414] hover:bg-[#1a1a1a] text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 text-xs sm:text-sm font-mono transition-all duration-200 group cursor-default shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-white transition-colors" />
                <span>{subject}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div> */}

      </div>
    </main>
  );
}