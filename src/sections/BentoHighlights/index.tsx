import {
  ArrowRight,
  Award,
  Brain,
  CheckCircle2,
  Cloud,
  Server,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface BentoHighlightsProps {
  onExploreProjects?: () => void;
  onExploreCerts?: () => void;
}

const AIOPS_TAGS = ["FastAPI", "pgvector", "Qdrant", "Ollama", "n8n"] as const;

export default function BentoHighlights({
  onExploreProjects,
  onExploreCerts,
}: BentoHighlightsProps) {
  return (
    <section id="bento-highlights-section" className="py-8 scroll-m-20">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <span className="text-xs font-mono text-sky-600 dark:text-cyan-400 uppercase tracking-widest font-semibold flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-sky-500 dark:bg-cyan-400 motion-safe:animate-pulse" aria-hidden="true" />
            Architecture &amp; Highlights
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white tracking-tight mt-1">
            Engineered for Enterprise Scale &amp; Automation
          </h2>
        </div>
        <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
          5 Core Architecture Pillars
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Card 1: Multi-Cloud Landing Zone (Span 8) */}
        <Card className="md:col-span-8 rounded-2xl py-0 bg-white/95 dark:bg-slate-900/90 border-slate-200/90 dark:border-slate-800/80 hover:border-sky-400 dark:hover:border-cyan-500/40 transition-all duration-300 shadow-md shadow-slate-200/50 dark:shadow-xl group relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-sky-400/5 dark:bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10"
            aria-hidden="true"
          />
          <CardContent className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="emerald">Active Leadership · 2026-Present</Badge>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    AEON Thana Sinsap (Thailand) PCL
                  </span>
                </div>
                <span className="text-xs font-mono text-sky-600 dark:text-cyan-400 font-semibold">
                  Landing Zone &amp; Architecture
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
                Multi-Cloud Landing Zone, Architecture &amp; Engineering Leadership
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed max-w-2xl">
                Leading the Cloud &amp; Automation engineering team at AEON Thana Sinsap. Designing
                enterprise landing zones across AWS, GCP, and Azure with transit network topologies,
                IAM governance, FinOps optimization, and automated infrastructure project delivery.
              </p>

              <div className="mt-5 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 shadow-2xs font-medium">
                  <Cloud className="size-3.5 text-sky-600 dark:text-cyan-400" aria-hidden="true" />
                  <span>AWS · GCP · Azure</span>
                </div>
                <ArrowRight className="size-3.5 text-sky-600 dark:text-cyan-400" aria-hidden="true" />
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 text-sky-700 dark:text-cyan-300 border border-sky-300 dark:border-cyan-500/30 shadow-2xs font-medium">
                  <ShieldCheck className="size-3.5 text-emerald-500" aria-hidden="true" />
                  <span>Landing Zone &amp; Guardrails</span>
                </div>
                <ArrowRight className="size-3.5 text-sky-600 dark:text-cyan-400" aria-hidden="true" />
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white dark:bg-slate-900 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-500/30 shadow-2xs font-medium">
                  <Server className="size-3.5 text-purple-500" aria-hidden="true" />
                  <span>Team &amp; Project Mgmt</span>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <Separator className="mb-3 bg-slate-200 dark:bg-slate-800/60" />
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-500" aria-hidden="true" />
                  <span>Multi-Cloud Landing Zones · Project Roadmaps &amp; FinOps</span>
                </div>
                {onExploreProjects && (
                  <Button
                    type="button"
                    variant="link"
                    size="xs"
                    onClick={onExploreProjects}
                    className="h-auto p-0 font-mono text-xs text-sky-600 dark:text-cyan-400 hover:text-sky-700 dark:hover:text-cyan-300 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="size-3" />
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 2: AIOps & Vector Intelligence (Span 4) */}
        <Card className="md:col-span-4 rounded-2xl py-0 bg-white/95 dark:bg-slate-900/90 border-purple-200/90 dark:border-slate-800/80 hover:border-purple-400 dark:hover:border-purple-500/40 transition-all duration-300 shadow-md shadow-purple-100/30 dark:shadow-xl group">
          <CardContent className="p-6 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <Badge variant="purple">AIOps Innovation</Badge>
                <Brain className="size-4 text-purple-500 dark:text-purple-400" aria-hidden="true" />
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                Agentic Operations &amp; Vector Search
              </h3>

              <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Pioneering operational intelligence: FastAPI microservices coupled with PostgreSQL
                pgvector, Qdrant vector DB, and Ollama local LLMs for instant semantic runbook search
                and automated incident triage.
              </p>

              <div className="mt-4 p-2.5 rounded-lg bg-purple-50/70 dark:bg-slate-950/70 border border-purple-200/80 dark:border-slate-800 font-mono text-[11px] text-purple-700 dark:text-purple-300">
                <div className="flex items-center justify-between text-slate-500 mb-1">
                  <span>RAG Pipeline</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">LIVE</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 truncate">
                  Cisco FMC API → pgvector → Ollama RAG
                </p>
              </div>
            </div>

            <div className="mt-4">
              <Separator className="mb-3 bg-purple-100 dark:bg-slate-800/60" />
              <div className="flex flex-wrap gap-1.5">
                {AIOPS_TAGS.map((tag) => (
                  <Badge key={tag} variant="purple" className="text-[10px] px-2 py-0">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card 3: Datacenter Fabric (Span 4) */}
        <Card className="md:col-span-4 rounded-2xl py-0 bg-white/95 dark:bg-slate-900/60 border-slate-200/90 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-md">
          <CardContent className="p-5 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-sky-600 dark:text-cyan-400 font-semibold">
                  Datacenter Fabric
                </span>
                <Server className="size-4 text-slate-400" aria-hidden="true" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                HCI, SAN Storage &amp; DWDM Optical
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Dell &amp; Huawei SAN storage zoning, VMware vCenter/vSAN/NSX-T clusters, Proxmox VE
                high availability, and Huawei OptiX OSN9800 DWDM optical networks.
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800/60 text-[10px] font-mono text-slate-600 dark:text-slate-400">
              VMware NSX-T · Brocade SAN · Huawei DWDM
            </div>
          </CardContent>
        </Card>

        {/* Card 4: Zero-Touch Automation (Span 4) */}
        <Card className="md:col-span-4 rounded-2xl py-0 bg-white/95 dark:bg-slate-900/60 border-slate-200/90 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-md">
          <CardContent className="p-5 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  Zero-Touch Baselines
                </span>
                <ShieldCheck className="size-4 text-slate-400" aria-hidden="true" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Ansible AWX &amp; Compliance Automation
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                Automated RHEL 8/9 and Windows Server baselining, local yum repositories,
                SentinelOne/BigFix agents, and security audits across fleets.
              </p>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800/60 text-[10px] font-mono text-slate-600 dark:text-slate-400">
              Ansible AWX · RHEL 8/9 · Vault · Hardening
            </div>
          </CardContent>
        </Card>

        {/* Card 5: Certified Cloud Architect (Span 4) */}
        <Card className="md:col-span-4 rounded-2xl py-0 bg-white/95 dark:bg-slate-900/60 border-slate-200/90 dark:border-slate-800/80 hover:border-emerald-300 dark:hover:border-slate-700 transition-all duration-300 shadow-sm hover:shadow-md">
          <CardContent className="p-5 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
                  Verified Credentials
                </span>
                <Award className="size-4 text-amber-500" aria-hidden="true" />
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                17 Accreditations &amp; 20 Programs
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                VMware VCP-DCV &amp; VCP-NV, Alibaba Cloud (ACA Cloud Native &amp; Security), H3CNE,
                Huawei (HCIA/HCSA/HCSP), and 7 FutureSkill AWS/Azure badges.
              </p>
            </div>
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-200 dark:border-slate-800/60 text-xs font-mono">
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                All Active &amp; Verified
              </span>
              {onExploreCerts && (
                <Button
                  type="button"
                  variant="link"
                  size="xs"
                  onClick={onExploreCerts}
                  className="h-auto p-0 font-mono text-xs text-sky-600 dark:text-cyan-400 hover:text-sky-700 dark:hover:text-cyan-300 cursor-pointer"
                >
                  <span>Browse All</span>
                  <ArrowRight className="size-3" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
