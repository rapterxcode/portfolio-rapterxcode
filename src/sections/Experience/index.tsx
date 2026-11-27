import { useState } from "react";
import { Check, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { experienceItems } from "@/contents/experience";

interface ExperienceProps {
  title?: string;
}

export default function Experience({ title = "Experience" }: ExperienceProps) {
  const [expandedId, setExpandedId] = useState<string | null>(experienceItems[0]?.id ?? null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience-section" className="scroll-m-20 py-4">
      <div className="sticky top-0 z-20 backdrop-blur-md bg-[#F8FAFC]/90 dark:bg-[#090D16]/80 py-3 mb-6 border-b border-slate-200/80 dark:border-white/5 lg:border-none lg:static lg:bg-transparent lg:py-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <span className="size-2 rounded-full bg-sky-500 dark:bg-cyan-400 glow-cyan" aria-hidden="true" />
            <span>{title}</span>
          </h2>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            6+ Years Enterprise Engineering Timeline
          </span>
        </div>
      </div>

      <div className="relative border-l border-slate-300 dark:border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
        {experienceItems.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div key={item.id} className="relative group">
              {/* Timeline marker */}
              <div
                aria-hidden="true"
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 size-4 rounded-full border-2 transition-all duration-200 ${
                  item.isCurrent
                    ? "bg-emerald-500 border-emerald-300 shadow-md shadow-emerald-500/40"
                    : "bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 group-hover:border-sky-500 dark:group-hover:border-cyan-400 shadow-sm"
                }`}
              >
                {item.isCurrent && (
                  <span className="motion-safe:animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
                )}
              </div>

              <Card className="rounded-2xl py-0 bg-white/95 dark:bg-slate-900/40 border-slate-200/90 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-slate-700 hover:shadow-md transition-all duration-300 shadow-sm">
                <CardContent className="p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-sky-600 dark:text-cyan-400 font-semibold">
                        {item.period}
                      </span>
                      {item.isCurrent && <Badge variant="emerald">Current Role</Badge>}
                    </div>
                    {item.location && (
                      <span className="text-xs font-mono text-slate-500">{item.location}</span>
                    )}
                  </div>

                  <div className="mb-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      {item.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-800 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-300 font-medium inline-flex items-center gap-1 transition-colors"
                        >
                          <span>{item.company}</span>
                          <ExternalLink className="size-3 text-slate-400" aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="text-slate-800 dark:text-slate-300 font-medium">
                          {item.company}
                        </span>
                      )}

                      {item.client && <Badge variant="amber">Client: {item.client}</Badge>}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                    {item.summary}
                  </p>

                  <ul className="space-y-1.5 pt-1">
                    {(isExpanded ? item.achievements : item.achievements.slice(0, 3)).map(
                      (ach, idx) => (
                        <li
                          key={`${item.id}-ach-${idx}`}
                          className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 leading-normal"
                        >
                          <Check
                            className="size-3.5 text-sky-500 dark:text-cyan-400/80 mt-0.5 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{ach}</span>
                        </li>
                      )
                    )}
                  </ul>

                  {item.achievements.length > 3 && (
                    <Button
                      type="button"
                      variant="link"
                      size="xs"
                      onClick={() => toggleExpand(item.id)}
                      className="mt-3 h-auto p-0 font-mono text-xs text-sky-600 dark:text-cyan-400 hover:text-sky-700 dark:hover:text-cyan-300 cursor-pointer"
                    >
                      <span>
                        {isExpanded
                          ? "Show Less"
                          : `View All ${item.achievements.length} Responsibilities`}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="size-3.5" />
                      ) : (
                        <ChevronDown className="size-3.5" />
                      )}
                    </Button>
                  )}

                  <Separator className="my-3.5 bg-slate-200 dark:bg-slate-800/60" />

                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech, tIdx) => (
                      <Badge
                        key={`${item.id}-tech-${tIdx}`}
                        variant="slate"
                        className="rounded-md text-[11px] px-2 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}
