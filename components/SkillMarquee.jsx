'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    name: "Go",
    level: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
  },
  {
    name: "Java",
    level: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Laravel",
    level: "Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
  },
  {
    name: "MySQL",
    level: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "GitHub",
    level: "Collaboration",
    icon: "https://cdn.simpleicons.org/github/white",
  },
  {
    name: "SpringBoot",
    level: "Framework",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  },
];

export default function SkillMarquee() {
  return (
    <section className="w-full min-h-screen h-[100svh] flex flex-col justify-center items-center py-12 space-y-10 overflow-hidden relative">
      
      {/* Header Container dengan Animasi Reveal */}
      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center text-center space-y-3 px-4 max-w-2xl mx-auto"
      >
        {/* Headline Utama */}
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100">
          Tech Stack
        </h2>

        {/* Deskripsi Singkat Dalam Bahasa Inggris */}
        <p className="text-zinc-400 text-sm sm:text-lg leading-relaxed">
          The programming languages, frameworks, and core tools I rely on to build scalable and efficient backend systems.
        </p>
      </motion.div>

      {/* Cards Running Marquee dengan Animasi & Fade Masking */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden w-full flex py-4"
      >
        {/* Side Gradient Masks untuk efek fade halus di tepi kiri & kanan */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-smooth items-center flex">
          {/* Set 1 */}
          <div className="flex items-center gap-4 pr-4">
            {skills.map((skill, index) => (
              <div
                key={`set1-${index}`}
                className="w-48 h-36 bg-[#0e0e0e] border border-white/10 rounded-2xl p-5 flex flex-col justify-center items-center gap-2 hover:border-sky-500/40 hover:bg-[#141414] transition-all duration-300 group shrink-0 shadow-xl"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-9 h-9 object-contain transition-transform group-hover:scale-110 duration-300"
                />
                <span className="text-base font-mono font-bold text-zinc-200 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>

          {/* Set 2 (Duplikat untuk infinite loop) */}
          <div className="flex items-center gap-4 pr-4">
            {skills.map((skill, index) => (
              <div
                key={`set2-${index}`}
                className="w-48 h-36 bg-[#0e0e0e] border border-white/10 rounded-2xl p-5 flex flex-col justify-center items-center gap-2 hover:border-sky-500/40 hover:bg-[#141414] transition-all duration-300 group shrink-0 shadow-xl"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-9 h-9 object-contain transition-transform group-hover:scale-110 duration-300"
                />
                <span className="text-base font-mono font-bold text-zinc-200 group-hover:text-white transition-colors">
                  {skill.name}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}