'use client';

import Image from 'next/image';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] flex flex-col justify-between pt-6 sm:pt-8 pb-6 px-4 sm:px-8 bg-[#080808] rounded-[32px] overflow-hidden border border-white/10">
      {/* Background Profile Photo with Bottom Gradient Fade */}
      <div className="absolute inset-0 flex justify-center items-end sm:items-center pointer-events-none z-0 opacity-90 sm:opacity-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative w-full max-w-xs sm:max-w-md h-[65%] sm:h-[85%]"
        >
          <Image
            src="/potoprofile.png"
            alt="Muhammad Zacky Al Ghifari"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
        </motion.div>
      </div>

      {/* Grid Top Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start relative z-10 mt-2 sm:mt-4">

        {/* Left: Tag + Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 space-y-3 sm:space-y-4"
        >

          <h2 className="text-xl sm:text-3xl font-light text-white leading-tight drop-shadow-md">
            Beginner Programmer <br className="hidden sm:inline" />
          </h2>
        </motion.div>

        <div className="hidden lg:block lg:col-span-2" />

        {/* Right: Bio & CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-5 space-y-5 sm:space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-zinc-300 sm:text-zinc-400 text-sm sm:text-base leading-relaxed drop-shadow"
          >
            Saya Muhammad Zacky Al Ghifari, mahasiswa Universitas Brawijaya, Fakultas Ilmu
            Komputer, Program Studi Pendidikan Teknologi Informasi, dengan ketertarikan utama pada{' '}
            <span className="text-white font-medium">Backend Development</span>. Saya memiliki minat
            dalam membangun sistem yang terstruktur, merancang{' '}
            <span className="text-white font-medium">REST API</span>, mengelola{' '}
            <span className="text-white font-medium">database</span>, serta memahami bagaimana sebuah
            aplikasi dapat bekerja secara efektif dari sisi backend.
          </motion.p>

          <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-3">
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center justify-center gap-3 h-11 px-6 bg-white hover:bg-zinc-200 text-black font-medium rounded-full transition-all text-xs sm:text-sm shadow-xl group pointer-events-auto"
            >
              <span>Download CV</span>
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                <Download size={12} />
              </span>
            </a>

            <a
              href="mailto:zackyalghifr@gmail.com"
              className="inline-flex items-center justify-center h-11 px-6 border border-zinc-700 hover:border-zinc-500 bg-white/[0.04] backdrop-blur-sm text-zinc-200 hover:text-white font-medium rounded-full transition-colors text-xs sm:text-sm pointer-events-auto"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>
      </div>

      {/* Big Title - Nama*/}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 pt-8 sm:pt-6 pb-2 text-center"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white uppercase select-none leading-none drop-shadow-lg">
          ZACKY AL GHIFARI
        </h1>
      </motion.div>
    </section>
  );
}