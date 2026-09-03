import { achievementsData, currentlyLearning } from '@/data/achievements';
import { Award, BookOpen } from 'lucide-react';

export default function AchievementsPage() {
  return (
    <div className="py-12 space-y-16">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">Achievements</h1>
        <p className="text-slate-400 mt-2">Pencapaian akademis, kompetisi, dan penghargaan.</p>
      </div>

      <div className="relative border-l border-slate-800 ml-4 space-y-12">
        {achievementsData.map((item) => (
          <div key={item.id} className="relative pl-8 group">
            <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-slate-900 border border-cyan-500/50 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
              <Award size={12} className="text-cyan-400" />
            </div>

            <div className="bg-slate-900/40 border border-slate-800/80 rounded-xl p-6 hover:border-slate-700 transition-colors space-y-2">
              <div className="flex justify-between items-center text-xs font-mono text-cyan-400">
                <span>{item.year}</span>
                <span>{item.organization}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-6">
        <div className="flex items-center gap-3 text-cyan-400">
          <BookOpen size={24} />
          <h2 className="text-xl font-bold text-white">Currently Learning</h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {currentlyLearning.map((subject) => (
            <span
              key={subject}
              className="px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-sm font-mono"
            >
              {subject}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}