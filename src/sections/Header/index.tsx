import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faLocationDot,
  faFileLines,
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";
import { profileData, data as legacyData } from "../../contents/header";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col space-y-5">
      {/* Profile Picture & Live Status */}
      <div className="relative w-fit">
        <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-cyan-500/30 via-slate-700/50 to-emerald-500/30 glow-cyan">
          <img
            className="object-cover object-center rounded-xl w-32 h-32 sm:w-36 sm:h-36 border border-slate-800"
            src={legacyData.thumbnail}
            alt={profileData.title}
          />
        </div>

        {/* Live Availability Badge */}
        <div className="absolute -bottom-2.5 left-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-emerald-500/40 text-[11px] font-mono text-emerald-300 shadow-md backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to Opportunities</span>
        </div>
      </div>

      {/* Name & Title */}
      <div className="space-y-2 pt-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          {profileData.title}
        </h1>
        <h2 className="text-base sm:text-lg font-medium text-cyan-400/90 leading-snug">
          {profileData.role}
        </h2>
      </div>

      {/* Quick metadata badges */}
      <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-300">
          <FontAwesomeIcon icon={faBriefcase} className="text-cyan-400 w-3 h-3" />
          <span>{profileData.experienceYears} Experience</span>
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/60 border border-slate-800 text-slate-300">
          <FontAwesomeIcon icon={faLocationDot} className="text-emerald-400 w-3 h-3" />
          <span>{profileData.location}</span>
        </span>
      </div>

      {/* Bio Description */}
      <p className="text-sm text-slate-400 leading-relaxed max-w-md">
        {profileData.shortBio}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <a
          href={profileData.resumeFile}
          download={profileData.resumeDownloadName}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 cursor-pointer active:scale-95"
        >
          <FontAwesomeIcon icon={faDownload} className="w-3.5 h-3.5" />
          <span>Download Resume</span>
        </a>

        <a
          href={profileData.resumeFile}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-xs sm:text-sm border border-slate-700 hover:border-slate-600 transition-all duration-200 cursor-pointer"
        >
          <FontAwesomeIcon icon={faFileLines} className="w-3.5 h-3.5 text-cyan-400" />
          <span>View Online</span>
        </a>
      </div>
    </header>
  );
};

export default Header;