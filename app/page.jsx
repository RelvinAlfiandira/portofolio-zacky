'use client';

import { useState } from 'react';
import Preloader from '@/components/ui/Preloader';
import HeroSection from '@/components/home/HeroSection';
import SkillMarquee from '@/components/SkillMarquee';
import FeaturedProjectsSection from '@/components/home/FeaturedProjectsSection';
import AboutSection from '@/components/home/AboutSection';

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  
  return (
    <>
      <Preloader onPreloaderComplete={() => setIsReady(true)} />

      {/* konten muncul kalau isReady = true */}
      <div 
        className={`space-y-20 pb-16 transition-opacity duration-700 ease-out ${
          isReady 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none h-screen overflow-hidden'
        }`}
      >
        <HeroSection isReady={isReady} />
        <AboutSection />
        <SkillMarquee />
        <FeaturedProjectsSection />
      </div>
    </>
  );
}