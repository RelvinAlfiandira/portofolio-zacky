'use client';

import { useState } from 'react';
import Preloader from '@/components/ui/Preloader';
import HeroSection from '@/components/home/HeroSection';
import SkillMarquee from '@/components/SkillMarquee';
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection';
import WhatIDoSection from '@/components/home/WhatIDoSection';
import AboutSection from '@/components/home/AboutSection';

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  
  return (
    <div className="space-y-20 pb-16">
<<<<<<< Updated upstream
      <Preloader onPreloaderComplete={() => setIsReady(true)}/>
      <HeroSection />
      <AboutSection />
=======
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-between pt-8 pb-6 px-4 sm:px-8 bg-black rounded-3xl overflow-hidden border border-zinc-900">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-0">
          <div className="relative w-full max-w-md h-[85%]">
            <Image
              src="/profile.webp"
              alt="Muhammad Zacky Al Ghifari"
              fill
              priority
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 mt-4">
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-xl sm:text-2xl font-light text-zinc-300 leading-snug">
              Backend Developer <br />
              <span className="text-zinc-500">based in Indonesia</span>
            </h2>
          </div>

          <div className="hidden lg:block lg:col-span-3" />

          <div className="lg:col-span-5 space-y-6">
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Mahasiswa Fakultas Ilmu Komputer Universitas Brawijaya yang berfokus pada pengembangan arsitektur <span className="text-white font-medium">Backend</span>, perancangan <span className="text-white font-medium">REST API</span>, dan optimalisasi sistem database.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-4 bg-white hover:bg-zinc-200 text-black font-medium pl-6 pr-2 py-2 rounded-full transition-all text-sm shadow-xl group pointer-events-auto"
              >
                <span>Download CV</span>
                <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Download size={14} />
                </span>
              </a>

              <a
                href="mailto:zacky@example.com"
                className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white font-medium px-6 py-2.5 rounded-full transition-colors text-sm pointer-events-auto"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-6 pb-2 text-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase select-none leading-none whitespace-nowrap font-[family-name:var(--font-poppins)]">
            ZACKY AL GHIFARI
          </h1>
        </div>
      </section>

      {/* Tech Stack Marquee Animation */}
>>>>>>> Stashed changes
      <SkillMarquee />
      <FeaturedProjectsSection />
      {/* <WhatIDoSection /> */}
    </div>
  );
}