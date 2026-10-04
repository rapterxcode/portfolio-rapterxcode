import type { SkillCategory } from "../types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    id: "cloud-devops",
    title: "Cloud & Container Orchestration",
    items: [
      {
        name: "Multi-Cloud Landing Zones & Architecture",
        detail: "Enterprise landing zones, transit network topologies, IAM governance, and multi-account hierarchies across AWS, GCP, and Azure.",
        tools: ["AWS (Transit Gateway, Organizations, EKS)", "GCP (Cloud Foundation, Shared VPC)", "Azure (Management Groups, Landing Zones)", "Terraform"]
      },
      {
        name: "Team Leadership & Project Management",
        detail: "Engineering team management, solution architecture reviews, cloud migration roadmaps, FinOps cost optimization, and stakeholder delivery.",
        tools: ["Team Leadership", "Solution Architecture", "Project Roadmaps", "FinOps", "Agile / Sprint Planning", "Vendor Governance"]
      },
      {
        name: "Containers & K8s",
        detail: "Production containerization, multi-stage builds, manifests, Helm charts, and cluster management.",
        tools: ["Kubernetes", "Docker", "Docker Compose", "Docker Swarm", "Portainer", "Helm", "VMware Tanzu"]
      },
      {
        name: "CI/CD & Automation",
        detail: "Automating testing, validation, container building, and zero-touch release workflows.",
        tools: ["GitLab CI/CD", "Git/GitHub", "Jenkins", "Cloud Run Deployments"]
      }
    ]
  },
  {
    id: "infra-automation",
    title: "Enterprise Linux & IaC Automation",
    items: [
      {
        name: "Configuration & Fleet Automation",
        detail: "Fleet provisioning, compliance audits, patching, and security baselines.",
        tools: ["Ansible Tower / AWX", "Playbooks & Roles", "Bash Scripting", "Python", "PowerShell"]
      },
      {
        name: "Operating Systems & Hardening",
        detail: "Deep system administration, kernel tuning, repository management, and security baselines.",
        tools: ["RHEL 8/9", "Ubuntu Server LTS", "CentOS", "Debian", "SUSE Linux", "Windows Server (AD, DNS, WSUS)"]
      },
      {
        name: "Enterprise Monitoring & Observability",
        detail: "Infrastructure telemetry, synthetic monitoring, log aggregation, and customized alert dashboards.",
        tools: ["Prometheus", "Grafana", "SolarWinds", "Node Exporter", "Alertmanager"]
      }
    ]
  },
  {
    id: "virtualization-storage",
    title: "Virtualization, HCI & Storage",
    items: [
      {
        name: "VMware Enterprise Ecosystem",
        detail: "Design, deployment, and operation of enterprise virtualization clusters and software-defined networks.",
        tools: ["VMware vSphere", "vCenter", "vSAN Cluster", "NSX-T Data Center", "Edge Nodes", "HA / DRS"]
      },
      {
        name: "Open-Source Virtualization",
        detail: "Cost-effective hyper-converged infrastructure, backup scheduling, and corosync clustering.",
        tools: ["Proxmox VE", "LXC Containers", "KVM", "Corosync", "Backup Pools"]
      },
      {
        name: "SAN Storage & Data Protection",
        detail: "Fibre Channel / iSCSI fabric zoning, volume provisioning, snapshots, and tape backups.",
        tools: ["Dell Storage", "Huawei OceanStor", "Brocade SAN Switch", "LUN Provisioning", "Veeam Backup", "Veritas Tape"]
      }
    ]
  },
  {
    id: "networking-security",
    title: "Networking, Security & Optical DWDM",
    items: [
      {
        name: "Routing & Switching",
        detail: "Carrier and enterprise campus networking, link aggregation, and dynamic routing protocols.",
        tools: ["BGP", "OSPF", "Static Routing", "VLAN (L2/L3)", "Cisco", "Huawei", "Dell Networking"]
      },
      {
        name: "Optical Transport & Transmission",
        detail: "Wavelength planning, optical amplifier calibration, and software-defined transport controllers.",
        tools: ["Huawei DWDM OptiX OSN9800", "M24 MUX/DEMUX", "NCE-T", "NCE-IP", "Fiber Optics"]
      },
      {
        name: "Security, Secrets & Firewalls",
        detail: "Centralized secret management, next-gen firewalls, endpoint detection, and compliance tooling.",
        tools: ["HashiCorp Vault", "FortiGate", "Huawei Firewalls", "IPsec VPN", "SentinelOne EDR", "BigFix"]
      }
    ]
  },
  {
    id: "backend-ai",
    title: "Backend Development, Databases & AIOps",
    items: [
      {
        name: "REST APIs & Microservices",
        detail: "High-performance backend services with JWT authentication, rate limiting, and clean architectures.",
        tools: ["Node.js (Express)", "Python (FastAPI)", "Go (Fiber / Gin)", "Java (Spring Boot)"]
      },
      {
        name: "Databases & High Availability",
        detail: "Clustering, connection pooling, automated backups, replication, and query optimization.",
        tools: ["PostgreSQL 16", "PgBouncer", "MySQL / MariaDB", "Galera Cluster", "Master-Slave Replication"]
      },
      {
        name: "AIOps & Vector Intelligence",
        detail: "Semantic retrieval, vector search embeddings, local LLM orchestration, and workflow automations.",
        tools: ["n8n Workflows", "pgvector", "Qdrant Vector DB", "Ollama LLMs", "FastAPI AI Endpoints"]
      }
    ]
  }
];
