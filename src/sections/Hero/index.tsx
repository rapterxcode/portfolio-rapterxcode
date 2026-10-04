import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faArrowRight,
  faLocationDot,
  faEnvelope,
  faPhone,
  faTerminal,
  faUser,
  faBriefcase,
  faCheckCircle,
  faShieldHalved
} from "@fortawesome/free-solid-svg-icons";
import { faLine, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { profileData, data as legacyData } from "../../contents/header";
import { contactDetails } from "../../contents/contact";
import TerminalSimulator from "../../components/TerminalSimulator";

interface HeroProps {
  onExploreProjects: () => void;
  onExploreContact: () => void;
}

const Hero = ({ onExploreProjects, onExploreContact }: HeroProps) => {
  const [activeRightTab, setActiveRightTab] = useState<"profile" | "terminal">("profile");

  return (
    <section className="pt-32 pb-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Personal Intro & Headline (Span 7) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Live Availability & Location Pill */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-xs font-mono text-emerald-300 shadow-md backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Assistant Manager · Cloud & Automation @ AEON</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/70 border border-slate-800 text-xs font-mono text-slate-400">
              <FontAwesomeIcon icon={faLocationDot} className="text-cyan-400 w-3 h-3" />
              <span>Bangkok, Thailand</span>
            </div>
          </div>

          {/* Name & Title with High-Impact Hierarchy */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                {profileData.title}
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <h2 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Assistant Manager · Cloud & Automation
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-slate-400">
              Multi-Cloud Landing Zone (AWS / GCP / Azure) · Architecture & Team Management
            </p>
          </div>

          {/* Narrative Summary */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
            Infrastructure engineering leader and architect with 6+ years orchestrating enterprise datacenters and multi-cloud platforms. Currently serving as <strong className="text-white font-semibold">Assistant Manager - Cloud & Automation</strong> at <strong className="text-white font-semibold">AEON Thana Sinsap (Thailand) PCL</strong>, directing multi-cloud landing zones across AWS, GCP, and Azure, cloud architecture solution design, project management, and team leadership. Previously Linux System Administrator at Tech Soft Holding.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={profileData.resumeFile}
              download={profileData.resumeDownloadName}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <FontAwesomeIcon icon={faDownload} className="w-3.5 h-3.5" />
              <span>Download CV (PDF)</span>
            </a>

            <button
              type="button"
              onClick={onExploreProjects}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200 cursor-pointer shadow-md"
            >
              <span>Explore 19 Projects</span>
              <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 text-cyan-400" />
            </button>

            <button
              type="button"
              onClick={onExploreContact}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/80 text-slate-400 hover:text-cyan-300 font-mono text-xs sm:text-sm border border-transparent hover:border-slate-700 transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5" />
              <span>Contact Directly</span>
            </button>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-800/80">
            {profileData.metrics.map((m) => (
              <div key={m.label} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-cyan-500/30 transition-colors">
                <div className="text-xl sm:text-2xl font-black font-mono text-cyan-300">
                  {m.value}
                </div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Direct Social & Contact Channels */}
          <div className="flex flex-wrap items-center gap-4 text-slate-400 text-base pt-1">
            <a
              href={contactDetails.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5 text-xs font-mono"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-base text-cyan-400" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={contactDetails.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-white transition-colors inline-flex items-center gap-1.5 text-xs font-mono"
            >
              <FontAwesomeIcon icon={faGithub} className="text-base text-slate-300" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-700">·</span>
            <span className="text-xs font-mono text-slate-300 inline-flex items-center gap-1.5">
              <FontAwesomeIcon icon={faLine} className="text-emerald-400 text-sm" />
              <span>{contactDetails.lineId}</span>
            </span>
            <span className="text-slate-700">·</span>
            <span className="text-xs font-mono text-slate-300 inline-flex items-center gap-1.5">
              <FontAwesomeIcon icon={faPhone} className="text-cyan-400 text-xs" />
              <span>{contactDetails.phone}</span>
            </span>
          </div>
        </div>

        {/* Right Column: Unified Developer Console & Profile Showcase (Span 5) */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <div className="relative w-full max-w-md rounded-3xl bg-slate-950/90 border border-slate-800/90 shadow-2xl backdrop-blur-2xl overflow-hidden transition-all duration-300 hover:border-cyan-500/40">
            {/* Ambient Interior Glow */}
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* macOS Developer Console Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/95 border-b border-slate-800/80">
              {/* macOS Window Controls */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm"></span>
              </div>

              {/* Segmented Mode Switcher */}
              <div className="inline-flex p-0.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setActiveRightTab("profile")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] transition-all cursor-pointer ${
                    activeRightTab === "profile"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <FontAwesomeIcon icon={faUser} className="w-2.5 h-2.5" />
                  <span>Profile</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveRightTab("terminal")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] transition-all cursor-pointer ${
                    activeRightTab === "terminal"
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <FontAwesomeIcon icon={faTerminal} className="w-2.5 h-2.5" />
                  <span>Terminal</span>
                </button>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-[10px] text-slate-400">online</span>
              </div>
            </div>

            {/* Console Content Area */}
            {activeRightTab === "profile" ? (
              <div className="p-6 flex flex-col items-center text-center">
                {/* Profile Portrait Showcase */}
                <div className="relative mb-5 group">
                  <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-cyan-400/40 via-purple-500/30 to-emerald-400/40 shadow-2xl transition-transform duration-300 group-hover:scale-[1.02]">
                    <img
                      src={legacyData.thumbnail}
                      alt={profileData.title}
                      className="w-52 h-64 sm:w-60 sm:h-72 object-cover object-top rounded-xl border border-slate-800 shadow-inner"
                    />
                  </div>

                  {/* Floating Verified Tag on Portrait */}
                  <div className="absolute -bottom-2.5 inset-x-0 mx-auto w-fit inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/95 border border-emerald-500/60 text-[11px] font-mono text-emerald-300 shadow-xl backdrop-blur-md">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Assistant Manager · Cloud & Automation</span>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-xl font-bold text-white tracking-tight mt-2">
                  {profileData.title}
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-0.5">
                  Assistant Manager · Cloud & Automation
                </p>

                {/* Current Active Mission Capsule */}
                <div className="w-full mt-4 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-left text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] font-mono">
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <FontAwesomeIcon icon={faBriefcase} className="w-3 h-3" />
                      <span>Current Position</span>
                    </span>
                    <span className="text-slate-400">Aug 2026 - Present</span>
                  </div>
                  <p className="font-semibold text-white text-xs">
                    AEON Thana Sinsap (Thailand) PCL
                  </p>
                  <p className="text-slate-400 text-[11px] flex items-center gap-1">
                    <FontAwesomeIcon icon={faShieldHalved} className="text-cyan-400 w-2.5 h-2.5" />
                    <span>Multi-Cloud Landing Zone (AWS/GCP/Azure) · Team Mgmt</span>
                  </p>
                </div>

                {/* Key Skills Tags */}
                <div className="flex flex-wrap justify-center gap-1.5 mt-4 pt-3 border-t border-slate-800/80 w-full">
                  {["AWS Landing Zone", "GCP", "Azure", "Architecture", "Project Mgmt", "Team Leadership", "Ansible AWX", "RHEL 8/9"].map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Interactive Terminal Launcher CTA */}
                <button
                  type="button"
                  onClick={() => setActiveRightTab("terminal")}
                  className="mt-4 w-full py-2 px-3 rounded-lg bg-slate-900/60 hover:bg-slate-900 text-[11px] font-mono text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/30 transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FontAwesomeIcon icon={faTerminal} className="w-3 h-3 text-cyan-400" />
                  <span>$ ./launch-interactive-cli.sh</span>
                  <FontAwesomeIcon icon={faArrowRight} className="w-2.5 h-2.5 text-slate-500" />
                </button>
              </div>
            ) : (
              /* Interactive Terminal Console inside Window */
              <div className="p-2">
                <TerminalSimulator hideWindowBar={true} />
                <div className="p-2 border-t border-slate-800/60 text-center">
                  <button
                    type="button"
                    onClick={() => setActiveRightTab("profile")}
                    className="text-[11px] font-mono text-slate-500 hover:text-cyan-400 transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faUser} className="w-2.5 h-2.5" />
                    <span>← Switch back to Profile Card</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
