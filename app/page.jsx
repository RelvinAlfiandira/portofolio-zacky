import Link from 'next/link';
import Image from 'next/image';
import { Download, ArrowUpRight, Server, Database, Globe, Network } from 'lucide-react';
import { projectsData } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import SkillMarquee from '@/components/SkillMarquee';

const whatIDo = [
  {
    icon: Server,
    title: 'Backend Development',
    subtitle: 'High Performance & Scalable Systems',
    desc: 'Membangun sistem backend yang andal dan scalable',
  },
  {
    icon: Network,
    title: 'REST API Development',
    subtitle: 'Clean & Robust API Design',
    desc: 'Merancang API yang bersih dan mudah dikonsumsi',
  },
  {
    icon: Database,
    title: 'Database Management',
    subtitle: 'Relational Schema & Query Optimization',
    desc: 'Skema relasional, query, dan optimalisasi data',
  },
  {
    icon: Globe,
    title: 'Web Application Development',
    subtitle: 'End-to-End System Integration',
    desc: 'Aplikasi web end-to-end dari backend ke frontend',
  },
];

export default function Home() {
  const featuredProjects = projectsData.slice(0, 2);

  return (
    <div className="space-y-20 pb-16">
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
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase select-none leading-none whitespace-nowrap">
            ZACKY AL GHIFARI
          </h1>
        </div>
      </section>

      {/* Tech Stack Marquee Animation */}
      <SkillMarquee />

      {/* Featured Projects Section */}
      <section className="space-y-8 px-2">
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
      </section>

      {/* What I Do Section (Design Sesuai Foto) */}
      <section className="space-y-8 px-2">
        <div>
          <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
            What I Do
          </h3>
        </div>

        {/* Grid 2 Kolom Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {whatIDo.map(({ icon: Icon, title, subtitle, desc }) => (
            <div
              key={title}
              className="flex items-center gap-5 rounded-3xl border border-zinc-800/60 bg-[#0a0a0a] p-5 sm:p-6 hover:border-zinc-700/80 transition-all duration-300"
            >
              {/* Kotak Ikon Kiri Membulat Besar (Squircle Icon) */}
              <div className="flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-2xl bg-[#1c1c1c] text-zinc-200">
                <Icon size={32} strokeWidth={1.5} />
              </div>

              {/* Detail Teks */}
              <div className="space-y-1">
                <h4 className="font-normal text-white text-base sm:text-lg leading-snug">
                  {title}
                </h4>
                <p className="text-xs text-zinc-400 font-sans">
                  {subtitle}
                </p>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Download CV Mengambang di Tengah */}
        <div className="flex justify-center pt-4">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-3 bg-white hover:bg-zinc-200 text-black font-medium pl-6 pr-2 py-2 rounded-full transition-all text-sm shadow-xl group"
          >
            <span>Download CV</span>
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-105 transition-transform">
              <Download size={14} />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}