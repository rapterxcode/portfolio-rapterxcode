import type { ExperienceItem } from "../types/portfolio";

export const experienceItems: ExperienceItem[] = [
  {
    id: "tech-soft-aeon",
    period: "August 2025 - Present",
    role: "Linux System Administrator | Team Cloud & Automation (AWS, GCP)",
    company: "Tech Soft Holding Co., Ltd.",
    client: "AEON Thana Sinsap (Thailand) Public Company Limited",
    location: "Bangkok, Thailand",
    isCurrent: true,
    link: "https://www.aeon.co.th",
    summary: "Responsible for enterprise Linux system administration, cloud infrastructure support, CI/CD automation, and modern DevOps operations across enterprise financial environments.",
    achievements: [
      "Automated Linux/Windows server provisioning, configuration, security hardening, compliance checks, and operational reporting using Ansible Tower/AWX, Bash, Python, and PowerShell.",
      "Managed and supported Red Hat Enterprise Linux 8/9 and Ubuntu LTS servers (patching, local repositories, services, security tools, monitoring agents, and zero-downtime troubleshooting).",
      "Supported AWS, EKS, Kubernetes, VMware Tanzu, Docker, Docker Compose, RBAC, IAM, and deployment configuration for containerized cloud workloads.",
      "Built and maintained GitLab CI/CD pipelines and automated scripts for infrastructure validation, deployment workflows, and operational delivery.",
      "Supported enterprise security and monitoring tools: SentinelOne, BigFix, SolarWinds, Prometheus, Grafana, HashiCorp Vault, and PostgreSQL 16.",
      "Developed internal automation and AI-assisted operations workflows using n8n, FastAPI, PostgreSQL pgvector, Qdrant, Ollama, and API integrations for automated incident triage."
    ],
    technologies: [
      "RHEL 8/9", "Ubuntu LTS", "Ansible Tower/AWX", "Bash", "Python", "PowerShell",
      "AWS", "EKS", "GCP", "Kubernetes", "VMware Tanzu", "Docker",
      "GitLab CI/CD", "HashiCorp Vault", "SentinelOne", "BigFix", "SolarWinds", "Prometheus", "Grafana",
      "FastAPI", "n8n", "PostgreSQL", "pgvector", "Qdrant", "Ollama"
    ]
  },
  {
    id: "le-siam-senior-engineer",
    period: "November 2020 – May 2025",
    role: "Senior Network & Software Engineer",
    company: "Le Siam Internetwork Co., Ltd.",
    location: "Bangkok, Thailand",
    link: "https://www.lsiam.com",
    summary: "Led technical design, deployment, and pre-sales engineering for enterprise virtualization, HCI platforms, SAN storage arrays, and optical DWDM network infrastructure.",
    achievements: [
      "Designed and delivered high-performance Hyper-Converged Infrastructure (HCI) and enterprise virtualization solutions across various client environments.",
      "Implemented Dell and Huawei enterprise storage arrays, executing SAN switch zoning (Dell/Brocade) and multi-terabyte LUN provisioning.",
      "Installed and configured enterprise switches and routers with static routing, OSPF, and BGP protocols with link aggregation.",
      "Deployed VMware ESXi, vCenter, vSAN clusters, and NSX-T Data Center (Managers and Edge Nodes) for resilient multi-tenant data center fabrics.",
      "Built and maintained Proxmox VE enterprise clusters with high availability, backup automation, and bonded network interfaces.",
      "Administered Windows Server and diverse Linux distributions (Ubuntu, SUSE, Debian, CentOS, RHEL) with comprehensive security hardening baselines.",
      "Commissioned Huawei DWDM optical transport (OptiX OSN9800 + M24 MUX/DEMUX) and software controllers (NCE-T, NCE-IP) for service provisioning and alarm management."
    ],
    technologies: [
      "VMware vSphere/vCenter", "vSAN", "NSX-T Data Center", "Proxmox VE",
      "Dell Storage", "Huawei Storage", "SAN Zoning", "LUN Provisioning",
      "Huawei DWDM OSN9800", "NCE-T", "NCE-IP", "Cisco Router/Switch", "Huawei Switches",
      "BGP", "OSPF", "VLAN", "RHEL", "Ubuntu", "Windows Server"
    ]
  },
  {
    id: "le-siam-backend-devops",
    period: "August 2022 - December 2022",
    role: "Backend DevOps Engineer",
    company: "Le Siam Internetwork Co., Ltd.",
    location: "Bangkok, Thailand",
    link: "https://www.lsiam.com",
    summary: "Developed backend microservices, containerization pipelines, and database setups for internal and customer-facing tools.",
    achievements: [
      "Built and deployed containerized services using Docker, Docker Compose, Portainer, and Kubernetes clusters.",
      "Developed RESTful APIs with Node.js/Express, Python (FastAPI), and Go, featuring JWT-based authentication and role authorization.",
      "Provisioned and tuned MySQL, MariaDB, and PostgreSQL relational database systems.",
      "Deployed monitoring stacks with Prometheus and Grafana dashboards for container health and application performance metrics."
    ],
    technologies: [
      "Node.js", "Express", "FastAPI", "Go", "Docker", "Kubernetes", "Portainer", "Nginx",
      "MariaDB", "MySQL", "PostgreSQL", "Prometheus", "Grafana"
    ]
  },
  {
    id: "metrabyte-hosting-support",
    period: "July 2020 – October 2020",
    role: "Hosting Support Engineer",
    company: "Metrabyte One Co., Ltd.",
    location: "Bangkok, Thailand",
    summary: "Delivered tier-2 technical support and server administration for commercial web hosting, VPS instances, and domain infrastructures.",
    achievements: [
      "Provisioned, configured, and troubleshot Linux and Windows VPS servers, cloud email systems, Plesk, and DirectAdmin control panels.",
      "Managed DNS zone files, domain registrations/renewals, and SSL/TLS certificates.",
      "Monitored customer network connectivity, server uptime, and resolved incident escalations within defined SLAs."
    ],
    technologies: [
      "Linux", "Windows Server", "VPS", "Plesk", "DirectAdmin", "DNS", "SSL/TLS", "Server Monitoring"
    ]
  },
  {
    id: "mono-tech-sysadmin",
    period: "January 2020 - May 2020",
    role: "Systems Administrator",
    company: "Mono Technology Public Co., Ltd.",
    location: "Bangkok, Thailand",
    summary: "Maintained uptime and secure internal infrastructure access for media and broadcast operations.",
    achievements: [
      "Ensured secure and reliable staff access to internal mission-critical corporate systems, minimizing downtime during incidents.",
      "Configured network gateway services, DHCP, Asterisk VoIP telephony systems, and VMware ESXi hypervisors.",
      "Conducted 24/7 server health checks, performance monitoring, and proactive patch management."
    ],
    technologies: [
      "VMware ESXi", "Linux", "Windows Server", "Asterisk VoIP", "DHCP", "Network Gateway", "System Monitoring"
    ]
  }
];

// Backward-compatible data export for existing components
export const data = experienceItems.map((item) => ({
  date: item.period,
  title: `${item.role} · ${item.company}${item.client ? ` (Client: ${item.client})` : ""}`,
  link: item.link || "",
  description: item.achievements.map((ach) => `- ${ach}`),
  tech: [item.technologies.slice(0, 8), item.technologies.slice(8)]
}));