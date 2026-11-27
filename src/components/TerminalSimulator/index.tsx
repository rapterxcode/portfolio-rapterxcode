import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Play, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface HistoryEntry {
  command: string;
  output: string | ReactNode;
}

export interface TerminalSimulatorProps {
  hideWindowBar?: boolean;
  className?: string;
}

const QUICK_COMMANDS = ["whoami", "skills", "projects", "certs", "contact", "neofetch"] as const;

const INITIAL_HISTORY: HistoryEntry[] = [
  {
    command: "whoami",
    output:
      "Pasit Chatcharoenkit · Assistant Manager (Cloud & Automation) @ AEON Thana Sinsap (6+ Yrs Exp)",
  },
  {
    command: "cat current-mission.txt",
    output:
      "Assistant Manager | Team Cloud & Automation @ AEON Thana Sinsap (Thailand) PCL · Leading Multi-Cloud Landing Zone (AWS, GCP, Azure), Cloud Architecture & Team Management",
  },
];

export default function TerminalSimulator({
  hideWindowBar = false,
  className = "",
}: TerminalSimulatorProps) {
  const [history, setHistory] = useState<HistoryEntry[]>(INITIAL_HISTORY);
  const [inputVal, setInputVal] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let output: string | ReactNode = "";

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1 text-slate-300">
            <p>Available commands:</p>
            <p>
              <span className="text-cyan-400 font-bold">whoami</span> - Display engineer profile summary
            </p>
            <p>
              <span className="text-cyan-400 font-bold">skills</span> - List primary engineering tech stacks
            </p>
            <p>
              <span className="text-cyan-400 font-bold">projects</span> - View highlighted enterprise projects
            </p>
            <p>
              <span className="text-cyan-400 font-bold">certs</span> - View certifications count &amp; highlights
            </p>
            <p>
              <span className="text-cyan-400 font-bold">contact</span> - Get direct email, LINE, and phone
            </p>
            <p>
              <span className="text-cyan-400 font-bold">neofetch</span> - System info &amp; OS summary
            </p>
            <p>
              <span className="text-cyan-400 font-bold">clear</span> - Clear terminal screen
            </p>
          </div>
        );
        break;

      case "whoami":
        output =
          "Pasit Chatcharoenkit · Assistant Manager (Cloud & Automation) @ AEON Thana Sinsap (Thailand) PCL with 6+ years experience across multi-cloud landing zones (AWS, GCP, Azure), enterprise Linux (RHEL 8/9), team leadership, and AIOps automation.";
        break;

      case "skills":
        output = (
          <div className="space-y-1 text-slate-300">
            <p>
              ● <span className="text-cyan-300 font-semibold">Leadership &amp; Architecture:</span> Multi-Cloud
              Landing Zones (AWS/GCP/Azure), Team Mgmt, Solution Architecture, FinOps
            </p>
            <p>
              ● <span className="text-emerald-300 font-semibold">Cloud &amp; K8s:</span> AWS (Transit Gateway,
              Organizations, EKS), GCP, Azure, Docker, Helm, Tanzu
            </p>
            <p>
              ● <span className="text-indigo-300 font-semibold">Linux &amp; IaC:</span> RHEL 8/9, Ubuntu LTS,
              Ansible AWX, Terraform, Bash, Python, PowerShell
            </p>
            <p>
              ● <span className="text-purple-300 font-semibold">Datacenter &amp; AI:</span> VMware
              vSphere/vSAN/NSX-T, Proxmox VE, SAN, DWDM, FastAPI, pgvector, Ollama
            </p>
          </div>
        );
        break;

      case "projects":
        output =
          "19 Enterprise Projects active: Multi-Cloud Landing Zones (AWS/GCP/Azure), AIOps Incident Assistant, Cisco FMC API Ingestion, Ansible Zero-Touch Baseline, APIGW (APISIX + Vault)...";
        break;

      case "certs":
        output =
          "17 Professional Certifications: VMware VCP-DCV, VMware VCP-NV, Alibaba Cloud ACA (Cloud Native & Security), H3CNE, Huawei HCIA/HCSA/HCSP, FutureSkill Azure & AWS series.";
        break;

      case "contact":
        output =
          "Email: phonepasit9@gmail.com · GitHub: https://github.com/rapterxcode · LINE: phonegtracing · Phone: +66 92 415 7139";
        break;

      case "neofetch":
        output = (
          <div className="space-y-0.5 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">pasit@aeon-cloud-ops</p>
            <p className="text-slate-500">--------------------------</p>
            <p>
              <span className="text-cyan-300 font-semibold">Title:</span> Assistant Manager (Cloud &amp;
              Automation)
            </p>
            <p>
              <span className="text-cyan-300 font-semibold">Org:</span> AEON Thana Sinsap (Thailand) PCL
            </p>
            <p>
              <span className="text-cyan-300 font-semibold">Host:</span> Multi-Cloud Landing Zone (AWS / GCP /
              Azure)
            </p>
            <p>
              <span className="text-cyan-300 font-semibold">Kernel:</span> DevOps, SRE &amp; Team Management 6.0
            </p>
            <p>
              <span className="text-cyan-300 font-semibold">Uptime:</span> 6+ Years Continuous Learning
            </p>
            <p>
              <span className="text-cyan-300 font-semibold">Shell:</span> bash / zsh / python
            </p>
            <p>
              <span className="text-cyan-300 font-semibold">Scope:</span> Landing Zones / Architecture / Project
              Mgmt
            </p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        output = `Command not recognized: "${trimmed}". Type "help" to see available commands.`;
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    }
  };

  return (
    <div
      className={cn(
        "w-full font-mono text-xs text-slate-300",
        hideWindowBar
          ? "bg-transparent"
          : "rounded-2xl bg-slate-950/95 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden",
        className
      )}
    >
      {/* Terminal Title Bar */}
      {!hideWindowBar && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-red-500/80 inline-block" aria-hidden="true" />
            <span className="size-3 rounded-full bg-amber-500/80 inline-block" aria-hidden="true" />
            <span className="size-3 rounded-full bg-emerald-500/80 inline-block" aria-hidden="true" />
            <span className="ml-2 text-slate-400 text-[11px] font-sans">pasit@cloud-ops:~</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <Terminal className="size-3 text-cyan-400" aria-hidden="true" />
            <span>interactive zsh</span>
          </div>
        </div>
      )}

      {/* Quick Action Commands */}
      <div className="flex flex-wrap items-center gap-1.5 px-4 py-2 bg-slate-900/50 border-b border-slate-800/60 text-[11px]">
        <span className="text-slate-400 mr-1">Quick run:</span>
        {QUICK_COMMANDS.map((cmd) => (
          <Button
            key={cmd}
            type="button"
            variant="ghost"
            size="xs"
            onClick={() => executeCommand(cmd)}
            className="h-5 px-2 py-0 rounded bg-slate-800/80 hover:bg-cyan-500/20 text-slate-200 hover:text-cyan-300 border border-slate-700/60 hover:border-cyan-500/40 font-mono text-[11px] cursor-pointer"
          >
            {cmd}
          </Button>
        ))}
      </div>

      {/* Terminal Content Body */}
      <div
        ref={scrollContainerRef}
        className="p-4 space-y-3 max-h-64 overflow-y-auto"
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
      >
        {history.map((entry, idx) => (
          <div key={`hist-${idx}`} className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="text-emerald-400" aria-hidden="true">
                ➜
              </span>
              <span className="text-slate-500">~</span>
              <span className="font-semibold text-slate-200">{entry.command}</span>
            </div>
            <div className="pl-4 text-slate-300 leading-relaxed">{entry.output}</div>
          </div>
        ))}
      </div>

      {/* Terminal Input Row */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-900/70 border-t border-slate-800/60">
        <span className="text-emerald-400 font-bold" aria-hidden="true">
          ➜
        </span>
        <span className="text-slate-500">~</span>
        <Input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Terminal command input"
          placeholder="Type 'help' or click buttons above..."
          className="h-7 flex-1 border-none bg-transparent px-1 shadow-none text-cyan-300 placeholder:text-slate-500 text-xs font-mono focus-visible:ring-0"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon-xs"
          onClick={() => executeCommand(inputVal)}
          aria-label="Run command"
          title="Run command"
          className="text-slate-400 hover:text-cyan-400 hover:bg-slate-800 cursor-pointer"
        >
          <Play className="size-3" />
        </Button>
      </div>
    </div>
  );
}
