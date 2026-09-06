'use client';

import { use } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { achievementsData } from '@/data/achievements';
import { Calendar, Building2, Trophy } from 'lucide-react';

export default function AchievementDetailPage({ params }) {
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const achievement = achievementsData.find((a) => a.id === resolvedParams?.id);

  if (!achievement) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen pt-28 sm:pt-36 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[32px] border border-white/10 bg-[#080808] p-6 sm:p-10 space-y-8 shadow-2xl relative overflow-hidden"
        >
          {/* Header */}
          <div className="space-y-4 border-b border-white/10 pb-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300">
                <Building2 size={13} className="text-zinc-500" />
                {achievement.organization}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300">
                <Calendar size={13} className="text-zinc-500" />
                {achievement.date || achievement.year}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
              {achievement.title}
            </h1>
          </div>
          {achievement.image && (
            <div className="relative w-full sm:max-w-xl mx-auto aspect-[4/3] rounded-[24px] overflow-hidden border border-white/10 bg-[#141414] shadow-lg">
              <Image
                src={achievement.image}
                alt={achievement.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: achievement.imagePosition || 'center' }}
              />
            </div>
          )}
          <div className="space-y-4 text-zinc-300 leading-relaxed font-sans text-sm sm:text-base">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2 font-mono">
              <Trophy size={18} className="text-zinc-400" /> Overview & Highlights
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              {achievement.fullDescription || achievement.description}
            </p>
          </div>
        </motion.article>

      </div>
    </main>
  );
}