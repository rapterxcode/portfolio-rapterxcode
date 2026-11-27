import { useMemo, useState } from "react";
import {
  Brain,
  CheckCircle2,
  Cloud,
  Server,
  ShieldCheck,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillCategories } from "@/contents/skills";

interface SkillsProps {
  title?: string;
}

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "cloud-devops": Cloud,
  "infra-automation": Terminal,
  "virtualization-storage": Server,
  "networking-security": ShieldCheck,
  "backend-ai": Brain,
};

export default function Skills({ title = "Skills & Expertise" }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const tabs = useMemo(
    () => [
      { id: "all", label: "All Domains", count: skillCategories.length },
      ...skillCategories.map((cat) => ({
        id: cat.id,
        label: cat.title.split("&")[0].trim(),
        count: cat.items.length,
      })),
    ],
    []
  );

  const displayedCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills-section" className="scroll-m-20 py-4">
      <div className="sticky top-0 z-20 backdrop-blur-md bg-[#F8FAFC]/90 dark:bg-[#090D16]/80 py-3 mb-4 border-b border-slate-200/80 dark:border-white/5 lg:border-none lg:static lg:bg-transparent lg:py-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <span className="size-2 rounded-full bg-sky-500 dark:bg-cyan-400 glow-cyan" aria-hidden="true" />
            <span>{title}</span>
          </h2>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            10 Enterprise Domains · 50+ Toolsets
          </span>
        </div>
      </div>

      {/* Domain Category Tabs */}
      <div className="mb-6">
        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="h-auto w-full sm:w-fit flex-wrap justify-start gap-1 p-1.5 rounded-xl bg-white/90 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 shadow-xs">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="flex-none gap-1.5 rounded-lg px-3 py-1.5 text-xs sm:text-sm cursor-pointer data-[state=active]:bg-sky-500 data-[state=active]:text-white dark:data-[state=active]:bg-cyan-500/20 dark:data-[state=active]:text-cyan-300 dark:data-[state=active]:border-cyan-500/40"
              >
                <span>{tab.label}</span>
                <span className="px-1.5 rounded-full text-[11px] font-mono bg-black/10 dark:bg-white/10">
                  {tab.count}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 gap-4">
        {displayedCategories.map((category) => {
          const Icon = CATEGORY_ICONS[category.id] || Server;
          return (
            <Card
              key={category.id}
              className="rounded-2xl py-0 gap-0 bg-white/95 dark:bg-slate-900/40 border-slate-200/90 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm"
            >
              <CardHeader className="p-5 pb-3">
                <CardTitle className="flex items-center gap-2.5 text-base font-bold text-slate-900 dark:text-white tracking-wide">
                  <span className="p-2 rounded-lg bg-sky-50 dark:bg-cyan-500/10 text-sky-600 dark:text-cyan-400 border border-sky-200 dark:border-cyan-500/20">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>

              <div className="px-5">
                <Separator className="bg-slate-200/80 dark:bg-slate-800/60" />
              </div>

              <CardContent className="p-5 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {category.items.map((item, idx) => (
                    <div
                      key={`${category.id}-item-${idx}`}
                      className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/40 hover:border-sky-300 dark:hover:border-cyan-500/20 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start gap-1.5 mb-1.5">
                          <CheckCircle2
                            className="size-3.5 text-sky-500 dark:text-cyan-400 mt-0.5 shrink-0"
                            aria-hidden="true"
                          />
                          <h4 className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                            {item.name}
                          </h4>
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                          {item.detail}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-200 dark:border-slate-800/50">
                        {item.tools.map((tool, tIdx) => (
                          <Badge
                            key={`${item.name}-tool-${tIdx}`}
                            variant="outline"
                            className="rounded-md px-2 py-0 text-[10px] font-mono bg-white dark:bg-slate-800/80 text-sky-700 dark:text-cyan-300/90 border-slate-200 dark:border-slate-700/60"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
