import type { ProjectItem } from "../types/portfolio";

export const projectItems: ProjectItem[] = [
  {
    id: "aiops-prototype",
    title: "AIOps Incident & Knowledge Search Prototype",
    subtitle: "Enterprise Agentic Operations & RAG Platform",
    category: "AI & Automation",
    clientOrOrg: "Internal Innovation",
    description: "Built an intelligent AIOps prototype orchestrating knowledge retrieval, automated incident triage, and LLM-guided troubleshooting using modern open-source AI tooling.",
    highlights: [
      "Engineered FastAPI microservices integrated with Qdrant vector database and Ollama local LLMs for instant runbook queries.",
      "Designed PostgreSQL with pgvector embeddings for hybrid semantic search over operational documents and logs.",
      "Orchestrated complex webhook triggers, multi-step incident workflows, and Slack/Teams alerts via n8n automation.",
      "Enforced granular Role-Based Access Control (RBAC) and audit-trail logging across all AI inference endpoints."
    ],
    tags: ["FastAPI", "Python", "Qdrant", "Ollama", "PostgreSQL", "pgvector", "n8n", "Docker", "RAG", "AIOps"],
    featured: true
  },
  {
    id: "aeon-fmc-n8n-workflow",
    title: "Cisco FMC API Automation & RAG Vector Pipeline",
    subtitle: "Automated Security Telemetry & Embedding Ingestion",
    category: "AI & Automation",
    clientOrOrg: "AEON Thana Sinsap",
    description: "Developed automated data extraction from Cisco Firepower Management Center (FMC) REST APIs, piping network security policies directly into a vector database for semantic search.",
    highlights: [
      "Automated paginated API queries against Cisco FMC endpoints with intelligent backoff and error recovery.",
      "Implemented PostgreSQL schema upserts to maintain synced real-time security policy states without duplicates.",
      "Generated pgvector embeddings and enabled Ollama RAG queries for security analysts to search firewall rules using natural language.",
      "Scheduled seamless periodic workflow runs via n8n with instant failure notifications."
    ],
    tags: ["n8n", "Cisco FMC", "REST API", "PostgreSQL", "pgvector", "Ollama", "Network Security"],
    featured: true
  },
  {
    id: "ansible-linux-baseline",
    title: "Config New Linux VM (Zero-Touch Baseline Automation)",
    subtitle: "Ansible Tower / AWX Enterprise Orchestration",
    category: "Cloud & DevOps",
    clientOrOrg: "Enterprise Client",
    description: "Architected and delivered end-to-end zero-touch server baseline provisioning for enterprise RHEL 9 and Ubuntu 22/24 environments using Ansible Tower/AWX.",
    highlights: [
      "Automated hostname configuration, machine-id regeneration, and enterprise OS patching across bare-metal and virtual instances.",
      "Integrated silent deployment and activation for SentinelOne EDR and SolarWinds monitoring agents.",
      "Created automated post-provisioning validation suites that output formatted compliance reports prior to production handover."
    ],
    tags: ["Ansible Tower", "AWX", "RHEL 9", "Ubuntu", "SentinelOne", "SolarWinds", "Linux Hardening"],
    featured: true
  },
  {
    id: "apigw-apisix-vault",
    title: "Enterprise Internal API Gateway Stack",
    subtitle: "Apache APISIX + HashiCorp Vault + Nginx",
    category: "Cloud & DevOps",
    clientOrOrg: "Enterprise Core",
    description: "Designed and deployed a high-availability internal API Gateway cluster providing dynamic route routing, centralized auth verification, and secure secret injection.",
    highlights: [
      "Deployed Apache APISIX and Nginx reverse proxy containers using Docker Compose with automated health checks.",
      "Integrated HashiCorp Vault for dynamic token injection, credential leasing, and automated key rotation.",
      "Configured fine-grained rate limiting, JWT validation, and upstream load-balancing across internal microservices."
    ],
    tags: ["Apache APISIX", "HashiCorp Vault", "Docker Compose", "Nginx", "API Gateway", "Security"],
    featured: true
  },
  {
    id: "vault-kubernetes",
    title: "HashiCorp Vault on Kubernetes (k8s-vault)",
    subtitle: "High-Availability Secret Management & Automated Unsealing",
    category: "Security & Network",
    clientOrOrg: "Cloud Platform",
    description: "Authored production-ready Kubernetes deployment manifests and lifecycle management scripts for HashiCorp Vault clusters.",
    highlights: [
      "Configured StatefulSet architecture with Horizontal Pod Autoscaling (HPA) and TLS mutual authentication.",
      "Automated cluster initialization, key sharing, and unseal procedures via secure helper containers.",
      "Provisioned ServiceAccounts, Secrets, ConfigMaps, and Kubernetes Auth Methods for native pod secret consumption."
    ],
    tags: ["Kubernetes", "HashiCorp Vault", "StatefulSet", "HPA", "TLS", "K8s Security", "Helm"],
    featured: true
  },
  {
    id: "acm-ssp-backend",
    title: "ACM & SSP (Self Service Portal) Automation",
    subtitle: "Huawei MPLS Circuit & Bandwidth Management",
    category: "Cloud & DevOps",
    clientOrOrg: "Symphony Communication (SYMC)",
    description: "Delivered backend microservices and crontab automation engines for Huawei MPLS Circuit Management (ACM) and customer self-service bandwidth provisioning.",
    highlights: [
      "Engineered automated backend workers communicating with Huawei network controllers to adjust customer circuit bandwidth on demand.",
      "Developed scheduled cron jobs for automatic circuit health polling, bandwidth usage calculation, and telemetry recording.",
      "Empowered corporate customers to self-manage leased lines in real-time, reducing provisioning turnaround from hours to minutes."
    ],
    tags: ["Backend APIs", "Cron Automation", "Huawei MPLS", "Python", "Node.js", "Networking"],
    featured: false
  },
  {
    id: "acm-ssp-infrastructure",
    title: "ACM & SSP Enterprise Infrastructure Platform",
    subtitle: "Server Racking, Hypervisor, and Docker Swarm Cluster",
    category: "Infrastructure & HCI",
    clientOrOrg: "Symphony Communication (SYMC)",
    description: "Full-lifecycle design and physical rollout of the enterprise infrastructure hosting the ACM and Self Service Portal.",
    highlights: [
      "Racked and configured physical servers and network switches with redundant uplink connectivity.",
      "Deployed enterprise hypervisors and architected a production Docker Swarm cluster managed with Portainer.",
      "Authored multi-service Docker Compose stacks with isolated bridge networks and persistent storage volumes."
    ],
    tags: ["Docker Swarm", "Portainer", "Docker Compose", "Servers", "Virtualization", "Switches"],
    featured: false
  },
  {
    id: "private-cloud-symc",
    title: "Private Cloud Infrastructure on Proxmox VE",
    subtitle: "Hyper-Converged Virtualization & Huawei SAN Storage",
    category: "Infrastructure & HCI",
    clientOrOrg: "Symphony Communication (SYMC)",
    description: "Engineered a cost-effective, high-reliability private cloud virtualization platform for mission-critical company workloads.",
    highlights: [
      "Installed and clustered Proxmox VE nodes with corosync quorum, network bonding (LACP), and automated live VM migration.",
      "Integrated Huawei enterprise SAN storage, configuring Fibre Channel / iSCSI LUN zoning and high-throughput datastore mounts.",
      "Configured automated snapshot schedules and backup pools for disaster recovery readiness."
    ],
    tags: ["Proxmox VE", "Huawei Storage", "SAN Fabric", "LUN Provisioning", "Clustering", "Private Cloud"],
    featured: true
  },
  {
    id: "dwdm-ncet-deployment",
    title: "Huawei DWDM & NCE-T Optical Transport Rollout",
    subtitle: "OptiX OSN9800 DWDM Nodes & Optical Network Management",
    category: "Security & Network",
    clientOrOrg: "Symphony Communication (SYMC)",
    description: "Deployed next-generation DWDM optical transport infrastructure across primary data centers and transmission hubs.",
    highlights: [
      "Installed Huawei OptiX OSN9800 chassis, optical amplifiers, and M24 MUX/DEMUX wavelength management modules.",
      "Deployed and configured Huawei NCE-T (Network Cloud Engine - Transport) software controllers on dedicated servers.",
      "Commissioned wavelength routing channels, calibrated optical attenuation, and configured automated alarm dispatching."
    ],
    tags: ["Huawei DWDM", "OptiX OSN9800", "NCE-T", "M24 MUX/DEMUX", "Optical Transport", "Fiber Optics"],
    featured: false
  },
  {
    id: "mpls-nceip-deployment",
    title: "MPLS Core & NCE-IP Transport Infrastructure",
    subtitle: "Huawei M8 / F1A Routers & Software-Defined IP Control",
    category: "Security & Network",
    clientOrOrg: "Symphony Communication (SYMC)",
    description: "Built resilient IP/MPLS carrier-grade transport backbones utilizing Huawei enterprise routing hardware and NCE-IP management.",
    highlights: [
      "Deployed and cabled Huawei M8 and F1A series MPLS transport routers with resilient power and fiber links.",
      "Configured BGP, OSPF, and MPLS traffic engineering policies to optimize carrier link utilization.",
      "Integrated NCE-IP for centralized topology visualization, automated provisioning, and SLA telemetry."
    ],
    tags: ["Huawei MPLS", "Huawei M8/F1A", "NCE-IP", "BGP", "OSPF", "Routing & Switching"],
    featured: false
  },
  {
    id: "tencent-datacenter-rollout",
    title: "Tencent Large-Scale Data Center Deployment",
    subtitle: "Rapid 300+ Device Rollout & Network Provisioning",
    category: "Infrastructure & HCI",
    clientOrOrg: "Tencent Thailand",
    description: "Executed a large-scale data center infrastructure rollout encompassing over 300 physical devices under tight deployment deadlines.",
    highlights: [
      "Assembled, racked, and cabled 300+ enterprise compute servers, top-of-rack switches, and core network elements.",
      "Configured server IPMI/iDRAC management networks, RAID controllers, and base network configurations in parallel.",
      "Passed rigorous vendor quality acceptance testing (FAT/SAT) with zero compliance violations."
    ],
    tags: ["Data Center", "Tencent", "Server Rollout", "Network Cabling", "Hardware Staging"],
    featured: false
  },
  {
    id: "alibaba-cloud-datacenter",
    title: "Alibaba Cloud Infrastructure Implementation & O&M",
    subtitle: "Hyperscale Cloud Hardware Operations & Maintenance",
    category: "Infrastructure & HCI",
    clientOrOrg: "Alibaba Cloud",
    description: "Delivered hardware staging, initial OS bootstrap, switch configuration, and continuous O&M for Alibaba Cloud data center sites.",
    highlights: [
      "Configured high-density compute nodes, storage chassis, and top-of-rack leaf/spine switches according to Alibaba standard architectures.",
      "Handled hardware replacements, memory/disk diagnostics, and network remediation without interrupting cloud cluster services.",
      "Supported 24/7 reliability operations adhering strictly to hyperscaler ITIL operational guidelines."
    ],
    tags: ["Alibaba Cloud", "Hyperscale Infrastructure", "Hardware O&M", "Networking", "Linux"],
    featured: false
  },
  {
    id: "compliance-checklist-automation",
    title: "Enterprise Linux/Windows Compliance Checklist",
    subtitle: "Automated Host Hardening & Security Audit Engine",
    category: "Cloud & DevOps",
    clientOrOrg: "Enterprise Operations",
    description: "Developed comprehensive compliance audit automation scripts that inspect hundreds of servers and generate executive HTML reports.",
    highlights: [
      "Audited OS firewall status, SentinelOne EDR operational health, BigFix agent status, and SolarWinds SNMP metrics.",
      "Verified NTP synchronization, Active Directory domain connectivity, listening ports, and unauthorized local administrators.",
      "Generated formatted HTML summary emails dispatched automatically to system administrators and security managers."
    ],
    tags: ["Bash", "Python", "PowerShell", "Security Audit", "Compliance", "HTML Reports", "Email Automation"],
    featured: false
  },
  {
    id: "automate-check-service",
    title: "Fleet Service & Port Reachability Scanner",
    subtitle: "Ansible Multi-Host Operational Verification",
    category: "Cloud & DevOps",
    clientOrOrg: "Enterprise Ops",
    description: "Created an Ansible playbook collection to continuously test and report on essential service ports, daemon statuses, and SSH connectivity across server fleets.",
    highlights: [
      "Tested port accessibility across multi-VLAN enterprise zones without causing alert storming on firewalls.",
      "Consolidated multi-host pass/fail health checks into clean tabular operational email digests.",
      "Reduced routine manual morning-check verification time by over 85%."
    ],
    tags: ["Ansible", "Automation", "Port Scanner", "Bash", "System Health", "Email Reporting"],
    featured: false
  },
  {
    id: "postgresql-pgbouncer-stack",
    title: "Hardened PostgreSQL 16 + PgBouncer Cluster",
    subtitle: "Containerized High-Concurrency Database Stack",
    category: "Cloud & DevOps",
    clientOrOrg: "Production Services",
    description: "Engineered a hardened PostgreSQL 16 production database container stack equipped with PgBouncer connection pooling and automated backup rotations.",
    highlights: [
      "Constructed a high-concurrency Docker Compose environment pairing PostgreSQL 16 with PgBouncer session/transaction pooling.",
      "Engineered automated WAL archiving and encrypted pg_dump backup rotations with offsite retention scripts.",
      "Implemented role separation, TLS transport encryption, and automated container healthcheck scripts."
    ],
    tags: ["PostgreSQL 16", "PgBouncer", "Docker Compose", "Database Hardening", "Backup Automation"],
    featured: false
  },
  {
    id: "aws-k8s-rbac",
    title: "AWS EKS Security & Kubernetes RBAC Architecture",
    subtitle: "Enterprise IAM Role Mapping & Least-Privilege Policies",
    category: "Cloud & DevOps",
    clientOrOrg: "Cloud Core",
    description: "Hardened AWS EKS cluster access controls by introducing strict Kubernetes RBAC role bindings mapped cleanly to AWS IAM roles.",
    highlights: [
      "Authored custom Kubernetes ClusterRoles and RoleBindings adhering to strict least-privilege principles.",
      "Automated aws-auth ConfigMap backups, version-controlled auditing, and disaster recovery procedures.",
      "Created enterprise operational runbooks and onboarding workflows for developer and auditor access tiers."
    ],
    tags: ["AWS", "EKS", "Kubernetes", "RBAC", "IAM", "aws-auth", "Security Runbooks"],
    featured: false
  },
  {
    id: "ad-security-group-reporter",
    title: "Active Directory Security Group Enumerator",
    subtitle: "Offline PowerShell Read-Only AD Compliance Tool",
    category: "Security & Network",
    clientOrOrg: "Enterprise Governance",
    description: "Built a standalone, read-only PowerShell utility that enumerates privileged Active Directory security groups and outputs structured Excel/HTML audit logs.",
    highlights: [
      "Extracted group memberships and nested privileges safely without requiring domain admin privileges or online package managers.",
      "Packaged offline ImportExcel libraries to generate multi-sheet styled XLSX spreadsheets for compliance auditors.",
      "Highlighted stale accounts, disabled users, and privilege escalations for immediate remediation."
    ],
    tags: ["PowerShell", "Active Directory", "ImportExcel", "Security Audit", "Compliance Reporting"],
    featured: false
  },
  {
    id: "vm-inventory-dashboard",
    title: "VM Inventory, Validation & Security Dashboard",
    subtitle: "Full-Stack Fleet Visibility & Integration Portal",
    category: "AI & Automation",
    clientOrOrg: "IT Operations",
    description: "Designed a multi-tier web dashboard providing centralized server inventory, configuration validation statuses, and security tool health across multi-cloud environments.",
    highlights: [
      "Constructed fast API endpoints in Python (FastAPI) and Node.js to ingest server metrics and configuration states.",
      "Integrated relational databases to maintain unified records of hardware specs, IP assignments, OS versions, and agent health.",
      "Packaged the entire frontend and backend solution into a modular Docker Compose stack for quick deployment."
    ],
    tags: ["FastAPI", "Python", "Node.js", "Docker Compose", "Dashboard", "System Inventory", "PostgreSQL"],
    featured: false
  },
  {
    id: "linux-ops-runbooks",
    title: "Enterprise Linux Scripts & Production Runbooks",
    subtitle: "Standardized Operations & Incident Remediation Library",
    category: "Cloud & DevOps",
    clientOrOrg: "Infrastructure Team",
    description: "Authored and battle-tested an extensive repository of automation scripts and step-by-step incident response runbooks.",
    highlights: [
      "Created standardized scripts for online disk resizing/rescanning (LVM), OS version upgrades, and local repository mirrors.",
      "Automated Kubernetes node joining, SentinelOne bulk agent push, and PostgreSQL automated failovers.",
      "Documented clear rollback plans and pre/post verification checks for zero-surprise production maintenance."
    ],
    tags: ["Bash", "Linux", "Runbooks", "LVM", "SentinelOne", "K8s Setup", "Disaster Recovery"],
    featured: false
  }
];

// Backward-compatible export for existing components
export const data = projectItems.map((item) => ({
  title: item.title,
  link: item.link || "",
  description: [item.description, ...item.highlights.map((h) => `- ${h}`)],
  picture: "",
  titlePicture: item.category,
  tech: [item.tags.slice(0, 6), item.tags.slice(6)]
}));