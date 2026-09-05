'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { achievementsData } from '@/data/achievements';
import { ArrowLeft, Calendar, Building2, Trophy } from 'lucide-react';

export default function AchievementDetailPage({ params }) {
  const resolvedParams = params instanceof Promise ? use(params) : params;
  const achievement = achievementsData.find((a) => a.id === resolvedParams?.id);

  if (!achievement) {
    notFound();
  }

  return (
    <div className="py-12 space-y-10 max-w-4xl mx-auto">
      {/* Tombol Kembali */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href="/achievements"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-400 hover:text-white transition-all shadow-md group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Kembali ke Achievements</span>
        </Link>
      </motion.div>

      {/* Main Container Card Detail */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-[32px] border border-white/10 bg-[#080808] p-6 sm:p-10 space-y-8 shadow-2xl relative overflow-hidden"
      >
        {/* Header Info */}
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

          <h1 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
            {achievement.title}
          </h1>
        </div>

        {/* Gambar Foto / Sertifikat */}
        {achievement.image && (
          <div className="relative w-full aspect-[16/9] rounded-[24px] overflow-hidden border border-white/10 bg-[#141414] shadow-lg">
            <Image
              src={achievement.image}
              alt={achievement.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        {/* Deskripsi Lengkap */}
        <div className="space-y-4 text-zinc-300 leading-relaxed font-sans text-sm sm:text-base">
          <h2 className="text-lg font-medium text-white flex items-center gap-2 font-mono">
            <Trophy size={18} className="text-zinc-400" /> Detail Pencapaian
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            {achievement.fullDescription || achievement.description}
          </p>
        </div>
      </motion.article>
    </div>
  );
}