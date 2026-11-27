import { useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import FloatingNav, { type NavItem } from "@/components/FloatingNav";
import Hero from "@/sections/Hero";
import BentoHighlights from "@/sections/BentoHighlights";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Certification from "@/sections/Certification";
import ContentContainer from "@/components/ContentContainer";
import { data as educationData } from "@/contents/education";
import ContactUs from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { ThemeProvider } from "@/context/ThemeProvider";

const NAVIGATION_ITEMS: NavItem[] = [
  { title: "Architecture", sectionId: "bento-highlights-section" },
  { title: "About", sectionId: "about-section" },
  { title: "Experience", sectionId: "experience-section" },
  { title: "Projects (19)", sectionId: "projects-section" },
  { title: "Skills", sectionId: "skills-section" },
  { title: "Certifications", sectionId: "certification-section" },
  { title: "Contact", sectionId: "contact-section" },
];

const SECTION_IDS = NAVIGATION_ITEMS.map((item) => item.sectionId);

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState<string>("bento-highlights-section");
  const currentSpySection = useScrollSpy(SECTION_IDS, 0.2);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-sky-500/20 selection:text-sky-800 dark:selection:text-cyan-300 font-sans antialiased transition-colors duration-200 overflow-x-hidden">
      {/* Skip to content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-primary-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>

      {/* Dynamic Floating Capsule Navigation */}
      <FloatingNav
        navItems={NAVIGATION_ITEMS}
        activeSection={currentSpySection || activeSection}
        onNavigate={scrollToSection}
      />

      {/* Atmospheric Ambient Glows */}
      <div
        className="pointer-events-none fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-sky-400/12 dark:bg-cyan-500/10 blur-[150px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed top-1/3 -right-20 w-[600px] h-[600px] rounded-full bg-indigo-300/12 dark:bg-purple-600/10 blur-[180px] -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none fixed bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-emerald-400/10 dark:bg-emerald-500/10 blur-[160px] -z-10"
        aria-hidden="true"
      />

      {/* Subtle Grid Lines Overlay */}
      <div
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] -z-10"
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <main id="main-content" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
        <Hero
          onExploreProjects={() => scrollToSection("projects-section")}
          onExploreContact={() => scrollToSection("contact-section")}
        />

        <BentoHighlights
          onExploreProjects={() => scrollToSection("projects-section")}
          onExploreCerts={() => scrollToSection("certification-section")}
        />

        <About title="About Me & Engineering Principles" />

        <Experience title="Career & Enterprise Experience" />

        <Projects title="Enterprise & AI Projects Showcase" />

        <Skills title="Technical Capabilities & Tool Matrix" />

        <Certification title="Accreditations & Professional Training" />

        <ContentContainer title="Education" data={educationData} />

        <ContactUs title="Let's Connect & References" />

        <Footer />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <TooltipProvider delayDuration={200}>
        <PortfolioApp />
      </TooltipProvider>
    </ThemeProvider>
  );
}
