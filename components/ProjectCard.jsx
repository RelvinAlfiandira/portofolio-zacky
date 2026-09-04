import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <div className="group relative bg-[#0a0a0a] border border-zinc-900 rounded-3xl p-4 sm:p-5 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300">
      {/* Project Image Container */}
      <div className="relative w-full h-60 sm:h-72 rounded-2xl overflow-hidden bg-zinc-900 mb-5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Project Details */}
      <div className="flex items-end justify-between gap-4 px-1 pb-1">
        <div className="space-y-1 max-w-[70%]">
          <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-zinc-200 transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-zinc-500 font-sans">
            {project.category || project.subtitle || 'Backend & Web System'}
          </p>
        </div>

        {/* View Project Pill Button */}
        <Link
          href={project.demo || project.github || `/projects/${project.id}`}
          target={project.demo || project.github ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800/80 text-xs font-medium px-4 py-2 rounded-full transition-all group/btn shrink-0"
        >
          <span>View Project</span>
          <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
            <ArrowRight size={11} />
          </span>
        </Link>
      </div>
    </div>
  );
}