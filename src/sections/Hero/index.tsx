import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faArrowRight,
  faLocationDot,
  faEnvelope,
  faPhone
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
  return (
    <section className="pt-24 pb-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Profile Headline & CTAs (Span 7) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Availability & Location Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-emerald-500/40 text-xs font-mono text-emerald-300 shadow-md backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for High-Impact Roles</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400">
              <FontAwesomeIcon icon={faLocationDot} className="text-cyan-400 w-3 h-3" />
              <span>Bangkok, Thailand</span>
            </div>
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <img
                src={legacyData.thumbnail}
                alt={profileData.title}
                className="w-12 h-12 rounded-xl object-cover border border-cyan-500/40 lg:hidden"
              />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  {profileData.title}
                </span>
              </h1>
            </div>

            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              {profileData.role}
            </h2>
          </div>

          {/* Punchy Narrative */}
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            {profileData.shortBio} Specializing in enterprise Linux (RHEL 8/9), zero-touch Ansible automation, VMware/Proxmox clustering, multi-cloud Kubernetes, and pioneering local agentic AIOps pipelines.
          </p>

          {/* CTAs Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={profileData.resumeFile}
              download={profileData.resumeDownloadName}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <FontAwesomeIcon icon={faDownload} className="w-3.5 h-3.5" />
              <span>Download CV (PDF)</span>
            </a>

            <button
              type="button"
              onClick={onExploreProjects}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm border border-slate-700/80 hover:border-cyan-500/40 transition-all duration-200 cursor-pointer"
            >
              <span>Explore 19 Projects</span>
              <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3 text-cyan-400" />
            </button>

            <button
              type="button"
              onClick={onExploreContact}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-transparent hover:bg-slate-900/60 text-slate-400 hover:text-cyan-300 font-mono text-xs sm:text-sm transition-colors cursor-pointer"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
            {profileData.metrics.map((m) => (
              <div key={m.label} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
                <div className="text-xl sm:text-2xl font-black font-mono text-cyan-300">
                  {m.value}
                </div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-4 text-slate-400 text-lg pt-1">
            <a
              href={contactDetails.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-cyan-400 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href={contactDetails.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <span className="text-slate-700">|</span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <FontAwesomeIcon icon={faLine} className="text-emerald-400 text-sm" />
              <span>{contactDetails.lineId}</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <FontAwesomeIcon icon={faPhone} className="text-cyan-400 text-xs" />
              <span>{contactDetails.phone}</span>
            </span>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Simulator (Span 5) */}
        <div className="lg:col-span-5">
          <TerminalSimulator />
        </div>
      </div>
    </section>
  );
};

export default Hero;
