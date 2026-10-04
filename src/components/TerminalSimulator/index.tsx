import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal, faPlay } from "@fortawesome/free-solid-svg-icons";

interface HistoryEntry {
  command: string;
  output: string | React.ReactNode;
}

const INITIAL_HISTORY: HistoryEntry[] = [
  {
    command: "whoami",
    output: "Pasit Chatcharoenkit · Senior Cloud & DevOps Infrastructure Engineer (6+ Yrs Exp)"
  },
  {
    command: "cat current-mission.txt",
    output: "Linux System Administrator @ Tech Soft Holding (Onsite: AEON Thana Sinsap) · Leading Cloud & Automation (AWS/GCP/Ansible/Kubernetes)"
  }
];

const TerminalSimulator = () => {
  const [history, setHistory] = useState<HistoryEntry[]>(INITIAL_HISTORY);
  const [inputVal, setInputVal] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let output: string | React.ReactNode = "";

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1 text-slate-300">
            <p>Available commands:</p>
            <p><span className="text-cyan-400 font-bold">whoami</span> - Display engineer profile summary</p>
            <p><span className="text-cyan-400 font-bold">skills</span> - List primary engineering tech stacks</p>
            <p><span className="text-cyan-400 font-bold">projects</span> - View highlighted enterprise projects</p>
            <p><span className="text-cyan-400 font-bold">certs</span> - View certifications count & highlights</p>
            <p><span className="text-cyan-400 font-bold">contact</span> - Get direct email, LINE, and phone</p>
            <p><span className="text-cyan-400 font-bold">neofetch</span> - System info & OS summary</p>
            <p><span className="text-cyan-400 font-bold">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;

      case "whoami":
        output = "Pasit Chatcharoenkit · Senior Cloud & DevOps Infrastructure Engineer with 6+ years experience across on-prem datacenter, multi-cloud (AWS, GCP, Azure, Alibaba), and AIOps automation.";
        break;

      case "skills":
        output = (
          <div className="space-y-1 text-slate-300">
            <p>● <span className="text-cyan-300 font-semibold">Cloud & K8s:</span> AWS (EKS, IAM, VPC), GCP, Azure, Alibaba Cloud, Docker, Helm, Tanzu</p>
            <p>● <span className="text-emerald-300 font-semibold">Linux & IaC:</span> RHEL 8/9, Ubuntu LTS, Ansible Tower/AWX, Bash, Python, PowerShell</p>
            <p>● <span className="text-indigo-300 font-semibold">Virtualization:</span> VMware (vSphere, vSAN, NSX-T), Proxmox VE, Dell/Huawei SAN Storage</p>
            <p>● <span className="text-purple-300 font-semibold">AI & Backend:</span> FastAPI, PostgreSQL pgvector, Qdrant, Ollama RAG, n8n, Node.js</p>
          </div>
        );
        break;

      case "projects":
        output = "19 Enterprise Projects active: AIOps Incident Assistant, Cisco FMC API Ingestion, Ansible Zero-Touch Baseline, APIGW (APISIX + Vault), Proxmox Private Cloud, DWDM OSN9800 Rollout...";
        break;

      case "certs":
        output = "17 Professional Certifications: VMware VCP-DCV, VMware VCP-NV, Alibaba Cloud ACA (Cloud Native & Security), H3CNE, Huawei HCIA/HCSA/HCSP, FutureSkill Azure & AWS series.";
        break;

      case "contact":
        output = "Email: phonepasit9@gmail.com · LINE: phonegtracing · Phone: +66 92 415 7139";
        break;

      case "neofetch":
        output = (
          <div className="space-y-0.5 text-xs text-slate-300">
            <p className="text-cyan-400 font-bold">pasit@cloud-infrastructure</p>
            <p className="text-slate-500">--------------------------</p>
            <p><span className="text-cyan-300 font-semibold">OS:</span> Enterprise Linux (RHEL 9 / Ubuntu LTS)</p>
            <p><span className="text-cyan-300 font-semibold">Host:</span> Hybrid Multi-Cloud (AWS EKS + Proxmox VE)</p>
            <p><span className="text-cyan-300 font-semibold">Kernel:</span> DevOps & SRE Automation 6.0</p>
            <p><span className="text-cyan-300 font-semibold">Uptime:</span> 6+ Years Continuous Learning</p>
            <p><span className="text-cyan-300 font-semibold">Shell:</span> bash / zsh / python</p>
            <p><span className="text-cyan-300 font-semibold">Memory:</span> 19 Projects / 17 Certs / 20 Courses</p>
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      executeCommand(inputVal);
    }
  };

  return (
    <div className="w-full rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs text-slate-300">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          <span className="ml-2 text-slate-400 text-[11px] font-sans">pasit@cloud-ops:~</span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
          <FontAwesomeIcon icon={faTerminal} className="w-3 h-3 text-cyan-400" />
          <span>interactive zsh</span>
        </div>
      </div>

      {/* Quick Action Badges */}
      <div className="flex flex-wrap items-center gap-1.5 px-4 py-2 bg-slate-900/40 border-b border-slate-800/40 text-[11px]">
        <span className="text-slate-500 mr-1">Quick run:</span>
        {["whoami", "skills", "projects", "certs", "contact", "neofetch"].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => executeCommand(cmd)}
            className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-700/60 hover:border-cyan-500/40 transition-colors cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Content Body */}
      <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
        {history.map((entry, idx) => (
          <div key={`hist-${idx}`} className="space-y-1">
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="text-emerald-400">➜</span>
              <span className="text-slate-500">~</span>
              <span className="font-semibold text-slate-200">{entry.command}</span>
            </div>
            <div className="pl-4 text-slate-300 leading-relaxed">
              {entry.output}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Row */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/60 border-t border-slate-800/60">
        <span className="text-emerald-400 font-bold">➜</span>
        <span className="text-slate-500">~</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type 'help' or click buttons above..."
          className="flex-1 bg-transparent border-none outline-none text-cyan-300 placeholder-slate-600 text-xs font-mono"
        />
        <button
          type="button"
          onClick={() => executeCommand(inputVal)}
          className="text-slate-500 hover:text-cyan-400 p-1 cursor-pointer"
          title="Run command"
        >
          <FontAwesomeIcon icon={faPlay} className="w-2.5 h-2.5" />
        </button>
      </div>
    </div>
  );
};

export default TerminalSimulator;
