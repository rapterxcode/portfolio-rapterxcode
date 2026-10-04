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
      title: "Multi-Cloud Landing Zone & Architecture",
      description: "Architecting and governing enterprise landing zones across AWS, GCP, and Azure (VPC/VNet topology, transit routing, IAM governance, security baselines, and FinOps cost optimization)."
    },
    {
      title: "Team Leadership & Project Management",
      description: "Leading the Cloud & Automation engineering team, managing cloud migration roadmaps, architectural reviews, vendor alignments, and cross-functional project execution."
    },
    {
      title: "Modern AI-Assisted Operations (AIOps)",
      description: "Pioneering internal automation and agentic RAG workflows using n8n, FastAPI, PostgreSQL pgvector, Qdrant, and Ollama for rapid incident triage and operational intelligence."
    }
  ],
  narrative: [
    "I am an infrastructure engineering leader and architect with over 6 years of hands-on and managerial expertise designing, scaling, and automating mission-critical systems across both enterprise datacenters and multi-cloud environments.",
    "My journey spans the complete engineering lifecycle: from physical datacenter deployment (SAN storage, DWDM optical transport, VMware HCI) to modern multi-cloud architectures (AWS, GCP, Azure), automated landing zone governance, and zero-touch Ansible frameworks.",
    "Currently serving as Assistant Manager - Cloud & Automation at AEON Thana Sinsap (Thailand) Public Company Limited, I lead the Cloud & Automation team overseeing multi-cloud landing zone design (AWS, GCP, Azure), architectural solution design, project management, and automated operational pipelines. Previously, I served as Linux System Administrator at Tech Soft Holding onsite at AEON, driving zero-touch RHEL automation, security hardening, and containerized workload platforms."
  ]
};

// Backward compatibility export
export const data = {
  title: aboutData.title,
  description: aboutData.narrative.join("\n\n")
};