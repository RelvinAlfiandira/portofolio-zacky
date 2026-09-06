'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Folder } from 'lucide-react';
import { projectsData } from '@/data/projects';
import Button from '@/components/ui/Button';

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

export default function FeaturedProjectsSection() {
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center py-20 px-4 overflow-hidden relative">
      <div className="max-w-6xl w-full mx-auto space-y-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto"
        >
          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100">
            Featured Projects
          </h2>

          <p className="text-zinc-400 text-sm sm:text-lg leading-relaxed">
            A selection of key projects showcasing my work in backend architecture, web development, and system integration.
          </p>
        </motion.div>

        {/* Project Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="group relative h-80">
              <Link href={`/projects/${project.id}`} className="block h-full">
                <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-300 shadow-xl">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: project.imagePosition || 'center' }}
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
                        {project.title}
                      </h3>
                      
                      {project.category && (
                        <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-sans">
                          <Folder size={12} />
                          <span>{project.category}</span>
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-2">
                        {project.description}
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
          
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center pt-4"
        >
          <Button href="/projects" variant="white" icon={ArrowRight}>
            View All Projects
          </Button>
          
        </motion.div>

      </div>
    </section>
  );
}