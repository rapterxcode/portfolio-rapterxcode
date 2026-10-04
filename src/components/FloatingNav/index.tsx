import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faBars, faXmark, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { profileData, data as legacyData } from "../../contents/header";
import { useTheme } from "../../context/ThemeContext";

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
  const { theme, toggleTheme } = useTheme();

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
        {/* Brand Capsule with Avatar */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-950/85 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-2xl cursor-pointer hover:border-sky-400 dark:hover:border-cyan-500/40 transition-all duration-200 group"
        >
          <img
            src={legacyData.thumbnail}
            alt="Pasit"
            className="w-6 h-6 rounded-full object-cover border border-sky-500/80 dark:border-cyan-400/80 shadow-sm"
          />
          <span className="font-bold text-xs sm:text-sm font-mono tracking-tight text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
            PASIT.DEV
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 hidden sm:inline-block font-medium">
            6+ Yrs DevOps
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-950/85 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-2xl"
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
                    ? "bg-sky-500 text-white dark:bg-cyan-500/20 dark:text-cyan-300 dark:border dark:border-cyan-500/40 shadow-sm font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/60 border border-transparent"
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </nav>

        {/* Right Action: Theme Switcher & Download Resume & Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/90 dark:bg-slate-950/85 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 text-amber-500 dark:text-sky-300 shadow-md hover:bg-slate-100 dark:hover:bg-slate-900 transition-all duration-200 cursor-pointer active:scale-95"
          >
            <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="w-3.5 h-3.5" />
          </button>

          {/* Download Resume Button */}
          <a
            href={profileData.resumeFile}
            download={profileData.resumeDownloadName}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-400 hover:to-cyan-500 text-white font-bold text-xs shadow-md shadow-sky-500/20 transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2.5 rounded-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white shadow-xl cursor-pointer"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faXmark : faBars} className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 max-w-sm mx-auto p-4 rounded-2xl bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border border-slate-200 dark:border-slate-800 shadow-2xl pointer-events-auto space-y-2 animate-fadeIn">
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <button
                key={`mobile-${item.sectionId}`}
                type="button"
                onClick={() => handleItemClick(item.sectionId)}
                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-xs font-mono transition-colors cursor-pointer ${
                  isActive
                    ? "bg-sky-50 dark:bg-cyan-500/20 text-sky-700 dark:text-cyan-300 border border-sky-300 dark:border-cyan-500/40 font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                }`}
              >
                <span>{item.title}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-cyan-400"></span>}
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-700 dark:text-slate-300 flex-1 cursor-pointer"
            >
              <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} className="text-amber-500 dark:text-sky-300" />
              <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
            </button>
            <a
              href={profileData.resumeFile}
              download={profileData.resumeDownloadName}
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs flex-1 cursor-pointer shadow-sm"
            >
              <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default FloatingNav;
