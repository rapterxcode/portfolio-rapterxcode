import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faFacebook, faLine } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";
import { contactDetails } from "../../contents/contact";

const Contact: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Quick Direct Channels */}
      <div className="flex flex-col gap-2 text-xs font-mono">
        <button
          type="button"
          onClick={() => handleCopy(contactDetails.emails[0], "email")}
          className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer group"
          title="Click to copy email"
        >
          <div className="flex items-center gap-2 truncate">
            <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400 w-3 h-3" />
            <span className="truncate">{contactDetails.emails[0]}</span>
          </div>
          <span className="text-slate-500 group-hover:text-cyan-400 ml-2">
            <FontAwesomeIcon icon={copiedType === "email" ? faCheck : faCopy} className="w-3 h-3" />
          </span>
        </button>

        <button
          type="button"
          onClick={() => handleCopy(contactDetails.lineId, "line")}
          className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer group"
          title="Click to copy LINE ID"
        >
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLine} className="text-emerald-400 w-3.5 h-3.5" />
            <span>LINE: {contactDetails.lineId}</span>
          </div>
          <span className="text-slate-500 group-hover:text-emerald-400 ml-2">
            <FontAwesomeIcon icon={copiedType === "line" ? faCheck : faCopy} className="w-3 h-3" />
          </span>
        </button>
      </div>

      {/* Social Icon Bar */}
      <div className="flex items-center gap-4 text-xl pt-1">
        <a
          href={contactDetails.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="text-slate-400 hover:text-cyan-400 transition-all duration-200 hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          href={contactDetails.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="text-slate-400 hover:text-white transition-all duration-200 hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>

        {contactDetails.links.facebook && (
          <a
            href={contactDetails.links.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook profile"
            className="text-slate-400 hover:text-blue-400 transition-all duration-200 hover:-translate-y-1"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        )}

        <a
          href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
          aria-label="Call phone"
          className="text-slate-400 hover:text-emerald-400 transition-all duration-200 hover:-translate-y-1"
        >
          <FontAwesomeIcon icon={faPhone} className="text-base" />
        </a>
      </div>
    </div>
  );
};

export default Contact;