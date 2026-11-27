import { Award, Cloud, FolderKanban, Server } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { aboutData } from "@/contents/about";
import { profileData } from "@/contents/header";

interface AboutProps {
  title?: string;
}

const STAT_ICONS = [Server, FolderKanban, Award, Cloud] as const;

export default function About({ title = "About" }: AboutProps) {
  return (
    <section id="about-section" className="scroll-m-20 py-4">
      <div className="sticky top-0 z-20 backdrop-blur-md bg-[#F8FAFC]/90 dark:bg-[#090D16]/80 py-3 mb-6 border-b border-slate-200/80 dark:border-white/5 lg:border-none lg:static lg:bg-transparent lg:py-0">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
          <span className="size-2 rounded-full bg-sky-500 dark:bg-cyan-400 glow-cyan" aria-hidden="true" />
          <span>{title}</span>
        </h2>
      </div>

      {/* Bento Grid Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {profileData.metrics.map((metric, idx) => {
          const Icon = STAT_ICONS[idx % STAT_ICONS.length];
          return (
            <Card
              key={metric.label}
              className="rounded-xl py-0 bg-white/95 dark:bg-slate-900/60 border-slate-200/90 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-cyan-500/30 transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              <CardContent className="p-3.5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {metric.label}
                  </span>
                  <Icon
                    className="size-3.5 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <div className="text-2xl font-bold font-mono text-sky-600 dark:text-cyan-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  {metric.value}
                </div>
                <div className="text-[11px] text-slate-500 truncate mt-0.5">{metric.sublabel}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Narrative Summary */}
      <div className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
        {aboutData.narrative.map((paragraph, index) => (
          <p key={`about-p-${index}`}>{paragraph}</p>
        ))}
      </div>

      {/* Core Engineering Pillars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        {aboutData.highlights.map((pillar) => (
          <Card
            key={pillar.title}
            className="rounded-xl py-0 bg-white/95 dark:bg-slate-900/40 border-slate-200/90 dark:border-slate-800/60 hover:border-sky-300 dark:hover:border-slate-700 transition-colors shadow-sm"
          >
            <CardContent className="p-4">
              <h3 className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-cyan-400 mb-1.5 font-semibold">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                {pillar.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
