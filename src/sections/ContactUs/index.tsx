import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faCopy,
  faCheck,
  faUserTie,
  faBuilding,
  faMessage
} from "@fortawesome/free-solid-svg-icons";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import { contactDetails, references } from "../../contents/contact";

interface ContactUsProps {
  onInit?: (sectionId: string) => void;
  title?: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ onInit, title = "Get In Touch & References" }) => {
  const SECTION_ID = "contact-section";
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    if (onInit) {
      onInit(SECTION_ID);
    }
  }, [onInit, SECTION_ID]);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id={SECTION_ID} className="scroll-m-20 py-4">
      {/* Section Title */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-[#090D16]/80 py-3 mb-6 border-b border-white/5 lg:border-none lg:static lg:bg-transparent lg:py-0">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-cyan-400 glow-cyan"></span>
          <span>{title}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Contact Channels Card */}
        <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-2">
            <FontAwesomeIcon icon={faMessage} />
            <span>Direct Channels</span>
          </h3>

          <div className="space-y-2.5">
            {/* Primary Email */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-300 truncate">
                <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400 w-3.5 h-3.5" />
                <span className="truncate">{contactDetails.emails[0]}</span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(contactDetails.emails[0], "email1")}
                className="ml-2 text-slate-400 hover:text-cyan-300 cursor-pointer p-1"
                title="Copy Email"
              >
                <FontAwesomeIcon icon={copiedKey === "email1" ? faCheck : faCopy} className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Secondary Email */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-300 truncate">
                <FontAwesomeIcon icon={faEnvelope} className="text-cyan-400 w-3.5 h-3.5" />
                <span className="truncate">{contactDetails.emails[1]}</span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(contactDetails.emails[1], "email2")}
                className="ml-2 text-slate-400 hover:text-cyan-300 cursor-pointer p-1"
                title="Copy Email"
              >
                <FontAwesomeIcon icon={copiedKey === "email2" ? faCheck : faCopy} className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* LINE ID */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-300">
                <FontAwesomeIcon icon={faLine} className="text-emerald-400 w-4 h-4" />
                <span>LINE: <strong>{contactDetails.lineId}</strong></span>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(contactDetails.lineId, "line")}
                className="text-slate-400 hover:text-emerald-300 cursor-pointer p-1"
                title="Copy LINE ID"
              >
                <FontAwesomeIcon icon={copiedKey === "line" ? faCheck : faCopy} className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-300">
                <FontAwesomeIcon icon={faPhone} className="text-emerald-400 w-3.5 h-3.5" />
                <span>Phone: <strong>{contactDetails.phone}</strong></span>
              </div>
              <a
                href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300 underline"
              >
                Call
              </a>
            </div>
          </div>
        </div>

        {/* Professional References Card */}
        <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-2">
            <FontAwesomeIcon icon={faUserTie} />
            <span>Professional References</span>
          </h3>

          <div className="space-y-3">
            {references.map((ref, idx) => (
              <div
                key={`ref-${idx}`}
                className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white text-xs sm:text-sm">
                    {ref.name}
                  </span>
                  <span className="text-[11px] font-mono text-cyan-300">
                    {ref.title}
                  </span>
                </div>

                {ref.organization && (
                  <div className="text-slate-400 flex items-center gap-1.5 text-[11px]">
                    <FontAwesomeIcon icon={faBuilding} className="text-slate-500 w-3 h-3" />
                    <span>{ref.organization}</span>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-slate-400 font-mono">
                  {ref.email && (
                    <a
                      href={`mailto:${ref.email}`}
                      className="hover:text-cyan-300 transition-colors"
                    >
                      {ref.email}
                    </a>
                  )}
                  {ref.phone && (
                    <a
                      href={`tel:${ref.phone.replace(/[\s()]/g, "")}`}
                      className="hover:text-emerald-300 transition-colors"
                    >
                      {ref.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
