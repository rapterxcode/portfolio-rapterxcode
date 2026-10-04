import { useState, useCallback } from "react";
import LeftSection from "./sections/LeftSection";
import type { NavItem } from "./sections/LeftSection";
import RightSection from "./sections/RightSection";
import { useScrollSpy } from "./hooks/useScrollSpy";
import "./App.css";

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { title: "About", sectionId: "about-section" },
  { title: "Skills", sectionId: "skills-section" },
  { title: "Experience", sectionId: "experience-section" },
  { title: "Projects", sectionId: "projects-section" },
  { title: "Certifications", sectionId: "certification-section" },
  { title: "Education", sectionId: "education-section" },
  { title: "Contact", sectionId: "contact-section" },
];

function App() {
  const [navBarItems, setNavBarItems] = useState<NavItem[]>(DEFAULT_NAV_ITEMS);
  const sectionIds = navBarItems.map((item) => item.sectionId);
  const currentSection = useScrollSpy(sectionIds, 0.25);

  const handleRegisterSection = useCallback((sectionId: string) => {
    setNavBarItems((prev) => {
      if (prev.some((item) => item.sectionId === sectionId)) {
        return prev;
      }
      const title = sectionId
        .replace(/-section$/, "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      return [...prev, { title, sectionId }];
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090D16] text-[#F8FAFC] selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Ambient background glows */}
      <div
        className="pointer-events-none fixed -top-40 -left-40 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-1/3 -right-40 w-96 h-96 rounded-full bg-indigo-500/10 blur-[140px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed -bottom-40 left-1/3 w-96 h-96 rounded-full bg-emerald-500/10 blur-[140px] -z-10"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[38%_62%] xl:grid-cols-[35%_65%] lg:gap-8">
          <LeftSection
            navBarItems={navBarItems}
            currentSection={currentSection}
          />
          <RightSection onInit={handleRegisterSection} />
        </div>
      </div>
    </div>
  );
}

export default App;
