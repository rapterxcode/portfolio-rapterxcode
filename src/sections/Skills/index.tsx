import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faTerminal,
  faServer,
  faShieldHalved,
  faBrain,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { skillCategories } from "../../contents/skills";
import Tabs from "../../components/Tabs";
import type { TabItem } from "../../components/Tabs";

interface SkillsProps {
  onInit?: (sectionId: string) => void;
  title?: string;
}

const categoryIcons: Record<string, IconDefinition> = {
  "cloud-devops": faCloud,
  "infra-automation": faTerminal,
  "virtualization-storage": faServer,
  "networking-security": faShieldHalved,
  "backend-ai": faBrain
};

const Skills: React.FC<SkillsProps> = ({ onInit, title = "Skills & Expertise" }) => {
  const SECTION_ID = "skills-section";
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    if (onInit) {
      onInit(SECTION_ID);
    }
  }, [onInit, SECTION_ID]);

  const tabs: TabItem[] = [
    { id: "all", label: "All Domains", count: skillCategories.length },
    ...skillCategories.map((cat) => ({
      id: cat.id,
      label: cat.title.split("&")[0].trim(),
      count: cat.items.length
    }))
  ];

  const displayedCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id={SECTION_ID} className="scroll-m-20 py-4">
      {/* Sticky section title */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-[#F8FAFC]/90 dark:bg-[#090D16]/80 py-3 mb-4 border-b border-slate-200/80 dark:border-white/5 lg:border-none lg:static lg:bg-transparent lg:py-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-cyan-400 glow-cyan"></span>
            <span>{title}</span>
          </h2>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            10 Enterprise Domains · 50+ Toolsets
          </span>
        </div>
      </div>

      {/* Domain Category Filter */}
      <div className="mb-6">
        <Tabs
          tabs={tabs}
          activeTab={activeCategory}
          onTabChange={setActiveCategory}
        />
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 gap-4">
        {displayedCategories.map((category) => {
          const icon = categoryIcons[category.id] || faServer;
          return (
            <div
              key={category.id}
              className="p-5 rounded-2xl bg-white/95 dark:bg-slate-900/40 border border-slate-200/90 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-slate-200/80 dark:border-slate-800/60">
                <div className="p-2 rounded-lg bg-sky-50 dark:bg-cyan-500/10 text-sky-600 dark:text-cyan-400 border border-sky-200 dark:border-cyan-500/20">
                  <FontAwesomeIcon icon={icon} className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-wide">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {category.items.map((item, idx) => (
                  <div
                    key={`${category.id}-item-${idx}`}
                    className="p-3.5 rounded-xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/40 hover:border-sky-300 dark:hover:border-cyan-500/20 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start gap-1.5 mb-1.5">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="w-3 h-3 text-sky-500 dark:text-cyan-400 mt-1 shrink-0"
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
                        <span
                          key={`${item.name}-tool-${tIdx}`}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white dark:bg-slate-800/80 text-sky-700 dark:text-cyan-300/90 border border-slate-200 dark:border-slate-700/60 font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
