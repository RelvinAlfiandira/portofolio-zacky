'use client';

import { motion } from 'framer-motion';
import { achievementsData, currentlyLearning } from '@/data/achievements';
import { Award, BookOpen } from 'lucide-react';

// Variabel animasi container untuk efek staggered
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Variabel animasi untuk setiap item timeline
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Variabel animasi untuk badge Currently Learning
const badgeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

export default function AchievementsPage() {
  return (
    <div className="py-12 space-y-16">
      {/* Header Animasi */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-white tracking-tight">Achievements</h1>
        <p className="text-slate-400 mt-2">Pencapaian akademis, kompetisi, dan penghargaan.</p>
      </motion.div>

      {/* Timeline Achievements Scroll Animasi */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative border-l border-slate-800 ml-4 space-y-12"
      >
        {achievementsData.map((item) => (
          <motion.div key={item.id} variants={itemVariants} className="relative pl-8 group">
            <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-slate-900 border border-cyan-500/50 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
              <Award size={12} className="text-cyan-400" />
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition-colors space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-cyan-400">
                <span>{item.year}</span>
                <span>{item.organization}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Section Currently Learning */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-6"
      >
        <div className="flex items-center gap-3 text-cyan-400">
          <BookOpen size={24} />
          <h2 className="text-xl font-bold text-white">Currently Learning</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3"
        >
          {currentlyLearning.map((subject) => (
            <motion.span
              key={subject}
              variants={badgeVariants}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-sm font-mono"
            >
              {subject}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}