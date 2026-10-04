import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { profileData } from "../../contents/header";

export interface NavItem {
  title: string;
  sectionId: string;
}

interface FloatingNavProps {
  navItems: NavItem[];
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const FloatingNav = ({
  navItems,
  activeSection,
  onNavigate
}: FloatingNavProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleItemClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Capsule */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/85 backdrop-blur-xl border border-white/10 shadow-2xl cursor-pointer hover:border-cyan-500/40 transition-all duration-200"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 glow-cyan animate-pulse" />
          <span className="font-bold text-xs sm:text-sm font-mono tracking-tight text-white">
            PASIT.DEV
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hidden sm:inline-block">
            6+ Yrs DevOps
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-xl border border-white/10 shadow-2xl"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <button
                key={item.sectionId}
                type="button"
                onClick={() => handleItemClick(item.sectionId)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-slate-900/60 border border-transparent"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Download Resume & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href={profileData.resumeFile}
            download={profileData.resumeDownloadName}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 transition-all duration-200 active:scale-95"
          >
            <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2.5 rounded-full bg-slate-950/90 backdrop-blur-xl border border-white/10 text-slate-300 hover:text-white shadow-xl cursor-pointer"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto p-4 rounded-2xl bg-slate-950/95 backdrop-blur-2xl border border-slate-800 shadow-2xl pointer-events-auto space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <button
                key={`mobile-${item.sectionId}`}
                type="button"
                onClick={() => handleItemClick(item.sectionId)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-xs font-mono transition-colors ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    : "text-slate-300 hover:bg-slate-900"
                }`}
              >
                <span>{item.title}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-800">
            <a
              href={profileData.resumeFile}
              download={profileData.resumeDownloadName}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs"
            >
              <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default FloatingNav;
