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
    name: "Gin",
    level: "Go Framework",
    icon: "https://raw.githubusercontent.com/gin-gonic/logo/master/color.png",
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
    <section className="py-12 space-y-8">
      {/* Top Pill Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800/80 backdrop-blur-md text-[11px] font-mono tracking-widest text-zinc-400 uppercase shadow-md">
          <span className="w-2 h-2 rounded-full bg-zinc-100 animate-pulse" />
          MY EXPERT AREA
        </div>
      </div>

      {/* Cards Running Marquee dengan Official Brand Logos */}
      <div className="relative overflow-hidden w-full flex">
        <div className="animate-marquee-smooth items-center">
          {/* Set 1 */}
          <div className="flex items-center gap-4 pr-4">
            {skills.map((skill, index) => (
              <div
                key={`set1-${index}`}
                className="w-48 h-36 bg-[#141414] border border-zinc-800/80 rounded-2xl p-5 flex flex-col justify-center items-center gap-2 hover:border-zinc-700 hover:bg-[#1a1a1a] transition-all duration-300 group shrink-0 shadow-lg"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 object-contain transition-transform group-hover:scale-110 duration-300"
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

          {/* Set 2 (Duplikat untuk loop animasi tanpa putus) */}
          <div className="flex items-center gap-4 pr-4">
            {skills.map((skill, index) => (
              <div
                key={`set2-${index}`}
                className="w-48 h-36 bg-[#141414] border border-zinc-800/80 rounded-2xl p-5 flex flex-col justify-center items-center gap-2 hover:border-zinc-700 hover:bg-[#1a1a1a] transition-all duration-300 group shrink-0 shadow-lg"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-8 h-8 object-contain transition-transform group-hover:scale-110 duration-300"
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
      </div>
    </section>
  );
}