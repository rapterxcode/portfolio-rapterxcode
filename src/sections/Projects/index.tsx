import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleInfo,
  faCheckCircle,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projectItems } from "../../contents/project";
import type { ProjectItem } from "../../types/portfolio";
import Tabs from "../../components/Tabs";
import type { TabItem } from "../../components/Tabs";
import Badge from "../../components/Badge";
import Modal from "../../components/Modal";

interface ProjectsProps {
  onInit?: (sectionId: string) => void;
  title?: string;
}

const Projects: React.FC<ProjectsProps> = ({ onInit, title = "Projects" }) => {
  const SECTION_ID = "projects-section";
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (onInit) {
      onInit(SECTION_ID);
    }
  }, [onInit, SECTION_ID]);

  // Count projects by category
  const categoryCounts = projectItems.reduce(
    (acc, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const tabs: TabItem[] = [
    { id: "all", label: "All Projects", count: projectItems.length },
    { id: "Cloud & DevOps", label: "Cloud & DevOps", count: categoryCounts["Cloud & DevOps"] || 0 },
    { id: "AI & Automation", label: "AI & Automation", count: categoryCounts["AI & Automation"] || 0 },
    { id: "Infrastructure & HCI", label: "Infra & HCI", count: categoryCounts["Infrastructure & HCI"] || 0 },
    { id: "Security & Network", label: "Security & Network", count: categoryCounts["Security & Network"] || 0 }
  ];

  const filteredProjects = projectItems.filter((project) => {
    const matchesCategory =
      activeTab === "all" || project.category === activeTab;
    const matchesSearch =
      searchQuery.trim() === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id={SECTION_ID} className="scroll-m-20 py-4">
      {/* Sticky section header */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-[#F8FAFC]/90 dark:bg-[#090D16]/80 py-3 mb-4 border-b border-slate-200/80 dark:border-white/5 lg:border-none lg:static lg:bg-transparent lg:py-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-cyan-400 glow-cyan"></span>
            <span>{title}</span>
          </h2>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/rapterxcode"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository - rapterxcode"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-cyan-500/40 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-300 transition-all shadow-sm group"
            >
              <FontAwesomeIcon icon={faGithub} className="text-sm text-slate-500 group-hover:text-sky-600 dark:group-hover:text-cyan-400 transition-colors" />
              <span>@rapterxcode</span>
            </a>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 hidden sm:inline">
              {projectItems.length} Enterprise & AI Implementations
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
        <div className="flex-1">
          <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Search input */}
        <div className="relative min-w-[200px] sm:w-64">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-3.5 h-3.5"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects or tags..."
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-sky-500 dark:focus:border-cyan-500/50 focus:ring-1 focus:ring-sky-500 dark:focus:ring-cyan-500/50 shadow-sm transition-colors"
          />
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.length === 0 ? (
          <div className="p-8 text-center rounded-2xl bg-white/80 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-sm shadow-sm">
            No projects match your filter query. Try clearing the search or switching categories.
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/40 border border-slate-200/90 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex flex-col space-y-3">
                {/* Badges row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="cyan" size="sm">
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20 font-medium">
                        <FontAwesomeIcon icon={faStar} className="w-2.5 h-2.5" />
                        <span>Featured</span>
                      </span>
                    )}
                    {project.clientOrOrg && (
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        · {project.clientOrOrg}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-600 dark:text-cyan-400 hover:text-sky-700 dark:hover:text-cyan-300 font-medium transition-colors cursor-pointer group-hover:underline"
                  >
                    <FontAwesomeIcon icon={faCircleInfo} className="w-3 h-3" />
                    <span>View Architecture</span>
                  </button>
                </div>

                {/* Title & subtitle */}
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

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights preview */}
                <ul className="space-y-1 pt-1">
                  {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                    <li
                      key={`${project.id}-h-${hIdx}`}
                      className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400"
                    >
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="w-3 h-3 text-emerald-500 mt-0.5 shrink-0"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200 dark:border-slate-800/60">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={`${project.id}-tag-${tIdx}`}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Deep Dive Architecture Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          maxWidth="2xl"
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="cyan">{selectedProject.category}</Badge>
              {selectedProject.clientOrOrg && (
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Client / Context: <strong className="text-slate-900 dark:text-slate-200">{selectedProject.clientOrOrg}</strong>
                </span>
              )}
            </div>

            {selectedProject.subtitle && (
              <p className="text-sm font-mono text-sky-600 dark:text-cyan-300 font-semibold">
                {selectedProject.subtitle}
              </p>
            )}

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {selectedProject.description}
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2 font-semibold">
                Technical Highlights & Architecture Delivery:
              </h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li
                    key={`modal-h-${i}`}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                  >
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="w-3.5 h-3.5 text-emerald-500 mt-1 shrink-0"
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
                  <Badge key={`modal-tag-${idx}`} variant="slate" size="sm">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Projects;
