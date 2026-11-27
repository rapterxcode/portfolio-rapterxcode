import { useDeferredValue, useMemo, useState } from "react";
import { CheckCircle2, Info, Search, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { projectItems } from "@/contents/project";
import type { ProjectItem } from "@/types/portfolio";

interface ProjectsProps {
  title?: string;
}

export default function Projects({ title = "Projects" }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const deferredSearch = useDeferredValue(searchQuery);

  const tabs = useMemo(() => {
    const counts = projectItems.reduce<Record<string, number>>((acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + 1;
      return acc;
    }, {});

    return [
      { id: "all", label: "All Projects", count: projectItems.length },
      { id: "Cloud & DevOps", label: "Cloud & DevOps", count: counts["Cloud & DevOps"] || 0 },
      { id: "AI & Automation", label: "AI & Automation", count: counts["AI & Automation"] || 0 },
      {
        id: "Infrastructure & HCI",
        label: "Infra & HCI",
        count: counts["Infrastructure & HCI"] || 0,
      },
      {
        id: "Security & Network",
        label: "Security & Network",
        count: counts["Security & Network"] || 0,
      },
    ];
  }, []);

  const filteredProjects = useMemo(() => {
    const q = deferredSearch.trim().toLowerCase();
    return projectItems.filter((project) => {
      const matchesCategory = activeTab === "all" || project.category === activeTab;
      const matchesSearch =
        q === "" ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeTab, deferredSearch]);

  return (
    <section id="projects-section" className="scroll-m-20 py-4">
      <div className="sticky top-0 z-20 backdrop-blur-md bg-[#F8FAFC]/90 dark:bg-[#090D16]/80 py-3 mb-4 border-b border-slate-200/80 dark:border-white/5 lg:border-none lg:static lg:bg-transparent lg:py-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <span className="size-2 rounded-full bg-sky-500 dark:bg-cyan-400 glow-cyan" aria-hidden="true" />
            <span>{title}</span>
          </h2>
          <div className="flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              size="xs"
              className="rounded-lg bg-white/90 dark:bg-slate-900/90 font-mono text-xs"
            >
              <a
                href="https://github.com/rapterxcode"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository - rapterxcode"
              >
                <GitHubIcon className="size-3.5" />
                <span>@rapterxcode</span>
              </a>
            </Button>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
              {projectItems.length} Enterprise &amp; AI Implementations
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
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

        <div className="relative min-w-[220px] lg:w-64">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-slate-400"
            aria-hidden="true"
          />
          <Input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search projects or tags"
            placeholder="Search projects or tags..."
            className="h-9 pl-9 text-xs rounded-xl bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 shadow-xs"
          />
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.length === 0 ? (
          <Card className="rounded-2xl py-0 bg-white/80 dark:bg-slate-900/30 border-slate-200 dark:border-slate-800">
            <CardContent className="p-8 text-center text-slate-500 dark:text-slate-400 text-sm">
              No projects match your filter query. Try clearing the search or switching categories.
            </CardContent>
          </Card>
        ) : (
          filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="rounded-2xl py-0 bg-white/95 dark:bg-slate-900/40 border-slate-200/90 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <CardContent className="p-5 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="cyan">{project.category}</Badge>
                    {project.featured && (
                      <Badge variant="amber">
                        <Star className="size-3" />
                        <span>Featured</span>
                      </Badge>
                    )}
                    {project.clientOrOrg && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        · {project.clientOrOrg}
                      </span>
                    )}
                  </div>

                  <Button
                    type="button"
                    variant="link"
                    size="xs"
                    onClick={() => setSelectedProject(project)}
                    className="h-auto p-0 font-mono text-xs text-sky-600 dark:text-cyan-400 hover:text-sky-700 dark:hover:text-cyan-300 cursor-pointer"
                  >
                    <Info className="size-3.5" />
                    <span>View Architecture</span>
                  </Button>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-1 pt-1">
                  {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                    <li
                      key={`${project.id}-h-${hIdx}`}
                      className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
                    >
                      <CheckCircle2
                        className="size-3.5 text-emerald-500 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <Separator className="bg-slate-200 dark:bg-slate-800/60" />

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, tIdx) => (
                    <Badge key={`${project.id}-tag-${tIdx}`} variant="slate" className="text-[11px]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Accessible Project Architecture Deep-Dive Dialog (Radix UI) */}
      <Dialog
        open={selectedProject !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      >
        <DialogContent className="sm:max-w-2xl bg-white dark:bg-[#0F172A] border-slate-200 dark:border-slate-700/80 p-0 overflow-hidden gap-0">
          {selectedProject && (
            <>
              <DialogHeader className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-left">
                <DialogTitle className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white pr-8">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-xs font-mono text-sky-600 dark:text-cyan-300">
                  {selectedProject.subtitle || selectedProject.category}
                </DialogDescription>
              </DialogHeader>

              <ScrollArea className="max-h-[75vh]">
                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="cyan">{selectedProject.category}</Badge>
                    {selectedProject.clientOrOrg && (
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        Client / Context:{" "}
                        <strong className="text-slate-900 dark:text-slate-200">
                          {selectedProject.clientOrOrg}
                        </strong>
                      </span>
                    )}
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {selectedProject.description}
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 font-semibold">
                      Technical Highlights &amp; Architecture Delivery:
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((h, i) => (
                        <li
                          key={`modal-h-${i}`}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2
                            className="size-4 text-emerald-500 mt-0.5 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 font-semibold">
                      Technology Stack:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((t, idx) => (
                        <Badge key={`modal-tag-${idx}`} variant="slate">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
