'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { achievementsData, currentlyLearning } from '@/data/achievements';
import { Trophy, Award, BookOpen, Calendar, Building2, Sparkles, ArrowUpRight } from 'lucide-react';

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
    <div className="py-12 space-y-16">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 border-b border-white/10 pb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-[11px] font-mono tracking-widest text-zinc-400 uppercase shadow-md">
          <span className="w-2 h-2 rounded-full bg-zinc-100 animate-pulse" />
          HONORS & MILESTONES
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Achievements</h1>
        <p className="text-zinc-400 text-sm sm:text-base max-w-2xl leading-relaxed font-sans">
          Kumpulan pencapaian akademis, kompetisi, dan pengakuan profesional yang diperoleh dalam perjalanan rekayasa perangkat lunak.
        </p>
      </motion.div>

      {/* Timeline Achievements Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative border-l border-white/10 ml-4 sm:ml-6 space-y-8 sm:space-y-10"
      >
        {achievementsData.map((item, index) => (
          <motion.div key={item.id || index} variants={itemVariants} className="relative pl-6 sm:pl-10 group">
            {/* Timeline Node Icon Indicator */}
            <div className="absolute -left-[17px] top-6 w-8 h-8 rounded-full bg-[#141414] border border-white/20 flex items-center justify-center text-zinc-300 group-hover:border-white/40 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-md z-10">
              <Trophy size={14} />
            </div>

            {/* Link Navigasi ke Halaman Detail */}
            <Link href={`/achievements/${item.id}`} className="block cursor-pointer">
              <div className="relative rounded-[32px] border border-white/10 bg-[#080808] p-5 sm:p-7 hover:border-white/30 hover:bg-[#0d0d0d] transition-all duration-300 shadow-xl space-y-5 group/card">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Left: Squircle Icon & Title Group */}
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-[22px] bg-[#141414] text-zinc-200 border border-white/10 group-hover/card:text-white group-hover/card:border-white/20 transition-all">
                      <Award size={24} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-medium text-white group-hover/card:text-zinc-200 transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <ArrowUpRight size={18} className="text-zinc-500 group-hover/card:text-white group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all" />
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-sans mt-0.5">
                        <Building2 size={13} className="text-zinc-500" />
                        <span>{item.organization}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Year Badge Pill */}
                  <div className="flex items-center sm:self-center">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 shadow-sm">
                      <Calendar size={12} className="text-zinc-500" />
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-sans pl-0 sm:pl-[4.5rem]">
                  {item.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Section Currently Learning */}
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
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-light text-white tracking-tight">Currently Learning</h2>
              <Sparkles size={18} className="text-zinc-400 hidden sm:inline" />
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans">
              Teknologi, pola arsitektur, dan framework yang sedang saya eksplorasi secara aktif saat ini.
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
      </motion.div>
    </div>
  );
}