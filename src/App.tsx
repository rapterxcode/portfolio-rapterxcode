import { useState } from "react";
import FloatingNav from "./components/FloatingNav";
import type { NavItem } from "./components/FloatingNav";
import Hero from "./sections/Hero";
import BentoHighlights from "./sections/BentoHighlights";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Certification from "./sections/Certification";
import ContentContainer from "./components/ContentContainer";
import { data as educationData } from "./contents/education";
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";
import { useScrollSpy } from "./hooks/useScrollSpy";
import { ThemeProvider } from "./context/ThemeProvider";
import "./App.css";

const NAVIGATION_ITEMS: NavItem[] = [
  { title: "Architecture", sectionId: "bento-highlights-section" },
  { title: "About", sectionId: "about-section" },
  { title: "Experience", sectionId: "experience-section" },
  { title: "Projects (19)", sectionId: "projects-section" },
  { title: "Skills", sectionId: "skills-section" },
  { title: "Certifications", sectionId: "certification-section" },
  { title: "Contact", sectionId: "contact-section" },
];

function PortfolioApp() {
  const [activeSection, setActiveSection] = useState<string>("bento-highlights-section");
  const sectionIds = NAVIGATION_ITEMS.map((item) => item.sectionId);
  const currentSpySection = useScrollSpy(sectionIds, 0.2);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] dark:bg-[#070A11] text-slate-800 dark:text-[#F8FAFC] selection:bg-sky-500/20 selection:text-sky-800 dark:selection:text-cyan-300 font-sans antialiased transition-colors duration-200 overflow-x-hidden">
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
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Full-width Hero with Profile & Terminal Simulator */}
        <Hero
          onExploreProjects={() => scrollToSection("projects-section")}
          onExploreContact={() => scrollToSection("contact-section")}
        />

        {/* 5-Card Architecture Bento Highlights */}
        <BentoHighlights
          onExploreProjects={() => scrollToSection("projects-section")}
          onExploreCerts={() => scrollToSection("certification-section")}
        />

        {/* About & Narrative */}
        <About title="About Me & Engineering Principles" />

        {/* Experience Timeline */}
        <Experience title="Career & Enterprise Experience" />

        {/* 19 Enterprise & AI Projects */}
        <Projects title="Enterprise & AI Projects Showcase" />

        {/* 10 Skills Domains */}
        <Skills title="Technical Capabilities & Tool Matrix" />

        {/* 17 Certifications & 20 Courses */}
        <Certification title="Accreditations & Professional Training" />

        {/* Education */}
        <ContentContainer
          title="Education"
          data={educationData}
        />

        {/* Contact Channels & Professional References */}
        <ContactUs title="Let's Connect & References" />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}

export default App;
