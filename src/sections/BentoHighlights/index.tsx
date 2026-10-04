import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faServer,
  faCloud,
  faBrain,
  faShieldHalved,
  faAward,
  faArrowRight,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import Badge from "../../components/Badge";

interface BentoHighlightsProps {
  onExploreProjects?: () => void;
  onExploreCerts?: () => void;
}

const BentoHighlights = ({
  onExploreProjects,
  onExploreCerts
}: BentoHighlightsProps) => {
  return (
    <section id="bento-highlights-section" className="py-8 scroll-m-20">
      {/* Section Subhead */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            Architecture & Highlights
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Engineered for Enterprise Scale & Automation
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-400">
          5 Core Architecture Pillars
        </span>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Card 1: Current Mission & Enterprise Automation (Span 8) */}
        <div className="md:col-span-8 p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <Badge variant="emerald" size="sm">Active Leadership · 2026-Present</Badge>
                <span className="text-xs font-mono text-slate-400">AEON Thana Sinsap (Thailand) PCL</span>
              </div>
              <span className="text-xs font-mono text-cyan-400 font-semibold">Landing Zone & Architecture</span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
              Multi-Cloud Landing Zone, Architecture & Engineering Leadership
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-2xl">
              Leading the Cloud & Automation engineering team at AEON Thana Sinsap. Designing enterprise landing zones across AWS, GCP, and Azure with transit network topologies, IAM governance, FinOps optimization, and automated infrastructure project delivery.
            </p>

            {/* Visual Interactive Architecture Flow Nodes */}
            <div className="mt-5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 text-slate-200 border border-slate-700/60">
                <FontAwesomeIcon icon={faCloud} className="text-cyan-400 w-3 h-3" />
                <span>AWS · GCP · Azure</span>
              </div>
              <span className="text-cyan-400 font-bold">➔</span>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 text-cyan-300 border border-cyan-500/30">
                <FontAwesomeIcon icon={faShieldHalved} className="text-emerald-400 w-3 h-3" />
                <span>Landing Zone & Guardrails</span>
              </div>
              <span className="text-cyan-400 font-bold">➔</span>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900 text-purple-300 border border-purple-500/30">
                <FontAwesomeIcon icon={faServer} className="text-purple-400 w-3 h-3" />
                <span>Team & Project Mgmt</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-4 mt-4 border-t border-slate-800/60 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-400 w-3 h-3" />
              <span>Multi-Cloud Landing Zones · Project Roadmaps & FinOps</span>
            </div>
            {onExploreProjects && (
              <button
                type="button"
                onClick={onExploreProjects}
                className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
              >
                <span>View Details</span>
                <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Card 2: AIOps & Vector Intelligence (Span 4) */}
        <div className="md:col-span-4 p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-950/90 border border-slate-800/80 hover:border-purple-500/40 transition-all duration-300 shadow-xl group flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <Badge variant="purple" size="sm">AIOps Innovation</Badge>
              <FontAwesomeIcon icon={faBrain} className="text-purple-400 w-4 h-4" />
            </div>

            <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
              Agentic Operations & Vector Search
            </h3>

            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Pioneering operational intelligence: FastAPI microservices coupled with PostgreSQL pgvector, Qdrant vector DB, and Ollama local LLMs for instant semantic runbook search and automated incident triage.
            </p>

            <div className="mt-4 p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 font-mono text-[11px] text-purple-300">
              <div className="flex items-center justify-between text-slate-500 mb-1">
                <span>RAG Pipeline</span>
                <span className="text-emerald-400">LIVE</span>
              </div>
              <p className="text-slate-300 truncate">Cisco FMC API ➔ pgvector ➔ Ollama RAG</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-3 mt-3 border-t border-slate-800/60">
            {["FastAPI", "pgvector", "Qdrant", "Ollama", "n8n"].map((t) => (
              <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-purple-200">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Card 3: Virtualization, HCI & Storage Fabric (Span 4) */}
        <div className="md:col-span-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-cyan-400 font-semibold">Datacenter Fabric</span>
              <FontAwesomeIcon icon={faServer} className="text-slate-500 w-4 h-4" />
            </div>
            <h4 className="text-sm sm:text-base font-semibold text-white">
              HCI & VMware / Proxmox Virtualization
            </h4>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              Enterprise VMware vSphere, vSAN, and NSX-T network virtualization alongside high-availability Proxmox VE clustering and multi-terabyte Dell/Huawei SAN storage provisioning.
            </p>
          </div>
          <div className="flex flex-wrap gap-1 pt-3 mt-3 border-t border-slate-800/60">
            {["VMware vSphere", "vSAN", "NSX-T", "Proxmox VE", "Huawei Storage", "SAN Zoning"].map((t) => (
              <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/70 text-slate-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Card 4: Carrier Optical DWDM & Network Infrastructure (Span 4) */}
        <div className="md:col-span-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-emerald-400 font-semibold">Optical Transport</span>
              <FontAwesomeIcon icon={faCloud} className="text-slate-500 w-4 h-4" />
            </div>
            <h4 className="text-sm sm:text-base font-semibold text-white">
              Huawei DWDM OptiX & MPLS Routing
            </h4>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              Commissioned Huawei OptiX OSN9800 DWDM nodes, M24 MUX/DEMUX wavelength management, NCE-T/NCE-IP controllers, and enterprise BGP/OSPF dynamic routing.
            </p>
          </div>
          <div className="flex flex-wrap gap-1 pt-3 mt-3 border-t border-slate-800/60">
            {["Huawei DWDM", "OSN9800", "NCE-T / NCE-IP", "BGP / OSPF", "MPLS"].map((t) => (
              <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/70 text-slate-300">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Card 5: Certified Mastery (Span 4) */}
        <div className="md:col-span-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-amber-400 font-semibold">17 Certifications</span>
              <FontAwesomeIcon icon={faAward} className="text-amber-400 w-4 h-4" />
            </div>
            <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-amber-300 transition-colors">
              VMware, Alibaba & Huawei Accredited
            </h4>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              VCP-DCV 2023, VCP-NV 2023, Alibaba Cloud ACA (Native & Security), H3CNE, Huawei HCIA/HCSA/HCSP, and complete FutureSkill AWS & Azure cloud series.
            </p>
          </div>

          <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between">
            <span className="text-[11px] font-mono text-slate-400">20 Course Trainings</span>
            {onExploreCerts && (
              <button
                type="button"
                onClick={onExploreCerts}
                className="text-xs font-mono text-amber-400 hover:text-amber-300 cursor-pointer inline-flex items-center gap-1"
              >
                <span>View All</span>
                <FontAwesomeIcon icon={faArrowRight} className="w-2.5 h-2.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoHighlights;
