export const aboutData = {
  title: "About",
  subtitle: "Architecting Resilient Infrastructure & Automated Systems",
  experienceYears: "6+",
  highlights: [
    {
      title: "Enterprise Linux & Automation",
      description: "Automating enterprise provisioning, configuration baselines, compliance audits, and security hardening on RHEL 8/9 and Ubuntu using Ansible Tower/AWX, Bash, Python, and PowerShell."
    },
    {
      title: "Multi-Cloud & Container Orchestration",
      description: "Designing and supporting workloads on AWS (EKS, IAM, VPC), GCP (Cloud Run), Azure, and Alibaba Cloud, combined with Kubernetes manifests, Helm, Docker, and VMware Tanzu."
    },
    {
      title: "HCI & Enterprise Data Center",
      description: "Deep expertise in VMware (vSphere, vCenter, vSAN, NSX-T), Proxmox VE clustering, Dell/Huawei SAN storage arrays, LUN provisioning, zoning, and Huawei DWDM (OSN9800) transport."
    },
    {
      title: "Modern AI-Assisted Operations (AIOps)",
      description: "Pioneering internal automation and agentic RAG workflows using n8n, FastAPI, PostgreSQL pgvector, Qdrant, and Ollama for rapid incident triage and operational intelligence."
    }
  ],
  narrative: [
    "I am a passionate Cloud/DevOps & Infrastructure Engineer with over 6 years of hands-on expertise building and scaling reliable systems across both mission-critical on-premise data centers and modern cloud-native environments.",
    "My journey spans the complete engineering lifecycle: from physical server racking, SAN fabric zoning, and DWDM optical transport deployment, to VMware enterprise virtualization, multi-cloud Kubernetes architectures, and zero-touch Ansible automation.",
    "Currently at Tech Soft Holding onsite with AEON Thana Sinsap (Thailand) Public Company Limited, I focus on enterprise Linux administration, AWS/GCP cloud automation, security compliance (SentinelOne, BigFix, HashiCorp Vault), and implementing AI-driven operational workflows to maximize uptime and eliminate manual friction."
  ]
};

// Backward compatibility export
export const data = {
  title: aboutData.title,
  description: aboutData.narrative.join("\n\n")
};