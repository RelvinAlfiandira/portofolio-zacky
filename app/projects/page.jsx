'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projectsData } from '@/data/projects';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Backend', 'Web', 'Education', 'Other'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="py-12 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Projects</h1>
        <p className="text-slate-400 mt-2">Kumpulan proyek dan aplikasi yang telah saya kembangkan.</p>
      </div>

      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white bg-slate-900'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}