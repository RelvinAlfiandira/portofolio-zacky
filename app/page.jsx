'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { projectsData } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import SkillMarquee from '@/components/SkillMarquee';
import HeroSection from '@/components/home/HeroSection';
import WhatIDoSection from '@/components/home/WhatIDoSection';

export default function Home() {
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <div className="space-y-20 pb-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Tech Stack Marquee Animasi */}
      <SkillMarquee />

      {/* Featured Projects Section dengan Scroll Animasi */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="space-y-8 px-2"
      >
        <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mt-1">Projects</h3>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.section>

      {/* What I Do Section*/}
      <WhatIDoSection />
    </div>
  );
}