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
      <Preloader onPreloaderComplete={() => setIsReady(true)}/>
      <HeroSection />
      <AboutSection />
      <SkillMarquee />
      <FeaturedProjectsSection />
      {/* <WhatIDoSection /> */}
    </div>
  );
}