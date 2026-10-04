#!/usr/bin/env python3
"""
Pasit Chatcharoenkit - Resume PDF Generator
Generates an ATS-compliant, executive 2-page vector PDF resume with embedded profile picture,
multi-cloud landing zones, and verified repository links to https://github.com/rapterxcode.
"""

import base64
import os
from playwright.sync_api import sync_playwright

def generate_resume_pdf():
    project_root = "/Users/pasitc/PH/portfolio-rapterxcode"
    photo_path = os.path.join(project_root, "src/assets/phonepic.jpg")
    output_pdf = os.path.join(project_root, "src/assets/Pasit-Chatcharoenkit-Resume.pdf")
    html_output = os.path.join(project_root, "scratch/resume_print.html")

    with open(photo_path, "rb") as f:
        photo_b64 = base64.b64encode(f.read()).decode("utf-8")

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Pasit Chatcharoenkit - Resume</title>
<style>
  @page {{
    size: A4;
    margin: 0;
  }}
  * {{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }}
  body {{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #1e293b;
    background: #ffffff;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }}
  .sheet {{
    width: 210mm;
    height: 297mm;
    padding: 8mm 10mm;
    background: #ffffff;
    box-sizing: border-box;
    position: relative;
    page-break-after: always;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }}
  .sheet:last-child {{
    page-break-after: auto;
  }}

  /* Header */
  .header {{
    display: flex;
    align-items: center;
    gap: 14px;
    border-bottom: 2px solid #0f172a;
    padding-bottom: 6px;
    margin-bottom: 6px;
  }}
  .avatar {{
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
    border: 2px solid #0284c7;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    flex-shrink: 0;
  }}
  .header-info {{
    flex: 1;
  }}
  .name {{
    font-size: 18pt;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.4px;
    line-height: 1.1;
  }}
  .role-title {{
    font-size: 10.5pt;
    font-weight: 700;
    color: #0284c7;
    margin-top: 1px;
  }}
  .role-subtitle {{
    font-size: 8.2pt;
    font-weight: 600;
    color: #475569;
  }}
  .contact-bar {{
    display: flex;
    flex-wrap: wrap;
    gap: 3px 10px;
    margin-top: 4px;
    font-size: 7.6pt;
    color: #334155;
    background: #f8fafc;
    padding: 3px 8px;
    border-radius: 4px;
    border: 1px solid #e2e8f0;
  }}
  .contact-item {{
    display: inline-flex;
    align-items: center;
    gap: 3px;
  }}
  .contact-item strong {{
    color: #0f172a;
  }}
  a {{
    color: #0284c7;
    text-decoration: none;
  }}

  /* Section Styling */
  .section {{
    margin-bottom: 5px;
  }}
  .section-title {{
    font-size: 8.8pt;
    font-weight: 800;
    color: #0f172a;
    text-transform: uppercase;
    letter-spacing: 0.7px;
    border-bottom: 1.5px solid #0284c7;
    padding-bottom: 1.5px;
    margin-bottom: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }}
  .section-badge {{
    font-size: 7.2pt;
    font-weight: 600;
    color: #0284c7;
    text-transform: none;
    letter-spacing: 0;
  }}

  .summary-text {{
    font-size: 8pt;
    color: #334155;
    text-align: justify;
    line-height: 1.35;
  }}

  /* Job Blocks */
  .job-block {{
    margin-bottom: 4.5px;
  }}
  .job-header {{
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }}
  .job-role {{
    font-size: 8.6pt;
    font-weight: 700;
    color: #0f172a;
  }}
  .job-period {{
    font-size: 7.8pt;
    font-weight: 600;
    color: #0284c7;
  }}
  .job-company {{
    font-size: 8pt;
    font-weight: 600;
    color: #334155;
  }}
  .job-client {{
    font-size: 7.6pt;
    color: #64748b;
    font-weight: normal;
  }}
  .job-summary {{
    font-size: 7.6pt;
    color: #475569;
    font-style: italic;
    margin-bottom: 1px;
    line-height: 1.25;
  }}
  ul.achievements {{
    list-style: none;
    padding-left: 0;
  }}
  ul.achievements li {{
    position: relative;
    padding-left: 9px;
    margin-bottom: 1.2px;
    font-size: 7.7pt;
    color: #334155;
    line-height: 1.28;
  }}
  ul.achievements li::before {{
    content: "•";
    position: absolute;
    left: 1px;
    color: #0284c7;
    font-weight: bold;
  }}
  .tech-pill-list {{
    margin-top: 1.5px;
    font-size: 7.2pt;
    color: #475569;
    line-height: 1.25;
  }}
  .tech-pill-list strong {{
    color: #0f172a;
  }}

  /* Page Footer */
  .page-footer {{
    margin-top: auto;
    border-top: 1px solid #e2e8f0;
    padding-top: 3px;
    display: flex;
    justify-content: space-between;
    font-size: 7pt;
    color: #94a3b8;
  }}

  /* Page 2 Specifics */
  .projects-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.5px 8px;
  }}
  .project-card {{
    border-left: 2px solid #0284c7;
    padding-left: 5px;
  }}
  .project-title {{
    font-size: 7.8pt;
    font-weight: 700;
    color: #0f172a;
    line-height: 1.2;
  }}
  .project-desc {{
    font-size: 7.3pt;
    color: #475569;
    line-height: 1.22;
  }}

  .skills-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3px 8px;
  }}
  .skill-domain {{
    margin-bottom: 2px;
  }}
  .domain-title {{
    font-size: 7.8pt;
    font-weight: 700;
    color: #0f172a;
    border-left: 2px solid #0284c7;
    padding-left: 4px;
    margin-bottom: 1px;
  }}
  .domain-detail {{
    font-size: 7.3pt;
    color: #475569;
    padding-left: 6px;
    line-height: 1.22;
  }}

  .certs-grid {{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5px 8px;
    font-size: 7.4pt;
    color: #334155;
  }}
  .certs-grid div {{
    position: relative;
    padding-left: 8px;
    line-height: 1.22;
  }}
  .certs-grid div::before {{
    content: "✓";
    position: absolute;
    left: 0;
    color: #10b981;
    font-size: 7pt;
    font-weight: bold;
  }}

  .bottom-grid {{
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    gap: 8px;
  }}
  .edu-inst {{
    font-size: 7.8pt;
    font-weight: 700;
    color: #0f172a;
  }}
  .edu-degree {{
    font-size: 7.3pt;
    color: #475569;
    margin-bottom: 2px;
  }}
  .ref-card {{
    font-size: 7.2pt;
    color: #475569;
    margin-bottom: 2.5px;
    line-height: 1.2;
  }}
  .ref-name {{
    font-weight: 700;
    color: #0f172a;
    font-size: 7.6pt;
  }}
  .ref-title {{
    color: #0284c7;
    font-weight: 600;
  }}
</style>
</head>
<body>

  <!-- ==================== SHEET 1 ==================== -->
  <div class="sheet" id="sheet1">
    <!-- Header -->
    <div class="header">
      <img src="data:image/jpeg;base64,{photo_b64}" alt="Pasit Chatcharoenkit" class="avatar">
      <div class="header-info">
        <h1 class="name">Pasit Chatcharoenkit</h1>
        <div class="role-title">Assistant Manager | Team Cloud & Automation</div>
        <div class="role-subtitle">Multi-Cloud Architect (AWS · GCP · Azure) · Senior Infrastructure & DevOps Engineer</div>
        <div class="contact-bar">
          <div class="contact-item"><strong>Location:</strong> Bangkok, TH</div>
          <div class="contact-item"><strong>Phone:</strong> +66 92 415 7139</div>
          <div class="contact-item"><strong>Email:</strong> <a href="mailto:phonepasit9@gmail.com">phonepasit9@gmail.com</a></div>
          <div class="contact-item"><strong>GitHub:</strong> <a href="https://github.com/rapterxcode">github.com/rapterxcode</a></div>
          <div class="contact-item"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pasit-chatcharoenkit-b6b1b1200/">in/pasit-chatcharoenkit</a></div>
          <div class="contact-item"><strong>LINE:</strong> phonegtracing</div>
          <div class="contact-item"><strong>Credly:</strong> <a href="https://www.credly.com/users/pasit-chatcharoenkit">credly.com/users/pasit-chatcharoenkit</a></div>
        </div>
      </div>
    </div>

    <!-- Executive Summary -->
    <div class="section">
      <div class="section-title">
        <span>Executive Summary</span>
        <span class="section-badge">6+ Years Enterprise Engineering & Leadership</span>
      </div>
      <p class="summary-text">
        Strategic Cloud/DevOps & Infrastructure Engineering Leader with over 6 years of hands-on expertise spanning enterprise on-premise datacenters (servers, SAN storage, optical DWDM transport, VMware HCI) and modern multi-cloud architectures (AWS, GCP, Azure, Kubernetes, and IaC automation). Currently serving as <strong>Assistant Manager - Cloud & Automation</strong> at <strong>AEON Thana Sinsap (Thailand) PCL</strong>, directing multi-cloud landing zones, architectural solution design, project management, and team leadership. Proven track record in automated zero-touch server baselines (Ansible AWX, RHEL 8/9), security governance (SentinelOne, HashiCorp Vault), and modern agentic AIOps pipelines.
      </p>
    </div>

    <!-- Professional Experience -->
    <div class="section">
      <div class="section-title">
        <span>Professional Experience</span>
        <span class="section-badge">Career Trajectory</span>
      </div>

      <!-- Role 1: AEON Assistant Manager -->
      <div class="job-block">
        <div class="job-header">
          <span class="job-role">Assistant Manager | Team Cloud & Automation</span>
          <span class="job-period">August 2026 – Present</span>
        </div>
        <div class="job-company">AEON Thana Sinsap (Thailand) Public Company Limited <span class="job-client">• Bangkok, Thailand</span></div>
        <div class="job-summary">Directing the enterprise Cloud & Automation engineering team overseeing multi-cloud landing zones, architectural solution design, project management, and automated operational pipelines for financial services.</div>
        <ul class="achievements">
          <li><strong>Team Leadership & Management:</strong> Led and mentored the Cloud & Automation engineering team, orchestrating sprint priorities, technical architecture reviews, and cross-functional project delivery.</li>
          <li><strong>Multi-Cloud Landing Zone:</strong> Architected, designed, and deployed Enterprise Multi-Cloud Landing Zones across AWS, GCP, and Azure, establishing secure network topologies (Transit Gateway, Direct Connect, Shared VPC), IAM governance, and multi-account hierarchies.</li>
          <li><strong>Architecture & Solution Design:</strong> Spearheaded cloud architecture solution design for mission-critical financial applications, ensuring zero-trust security postures, disaster recovery (DR) readiness, and high availability (99.99%).</li>
          <li><strong>Project Management & FinOps:</strong> Directed end-to-end cloud infrastructure project management: roadmaps, migration plans, budget/FinOps cost optimization, and vendor/stakeholder coordination.</li>
          <li><strong>IaC & Automation Governance:</strong> Standardized Infrastructure as Code (IaC) and automation frameworks across hybrid cloud environments using Terraform, Ansible AWX, and automated CI/CD pipelines.</li>
          <li><strong>Compliance & Security:</strong> Governed enterprise security compliance hardening, secrets management (HashiCorp Vault), audit governance, and automated operational observability.</li>
        </ul>
        <div class="tech-pill-list"><strong>Core Tech:</strong> Multi-Cloud Landing Zones, Team Leadership, Project Management, Solution Architecture, AWS (Transit Gateway, Organizations, EKS), GCP (Shared VPC, Cloud Foundation), Azure (Management Groups, Landing Zones), Terraform, Ansible AWX, RHEL 8/9, Kubernetes, Vault, FinOps, GitLab CI/CD.</div>
      </div>

      <!-- Role 2: Tech Soft Holding @ AEON -->
      <div class="job-block">
        <div class="job-header">
          <span class="job-role">Linux System Administrator | Team Cloud & Automation (AWS, GCP)</span>
          <span class="job-period">August 2025 – 31 July 2026</span>
        </div>
        <div class="job-company">Tech Soft Holding Co., Ltd. <span class="job-client">• Onsite: AEON Thana Sinsap (Thailand) PCL</span></div>
        <div class="job-summary">Responsible for enterprise Linux system administration, cloud infrastructure support, CI/CD automation, and modern DevOps operations onsite at AEON Thana Sinsap.</div>
        <ul class="achievements">
          <li>Automated Linux/Windows server provisioning, configuration, security hardening, compliance checks, and operational reporting using Ansible Tower/AWX, Bash, Python, and PowerShell.</li>
          <li>Managed and supported Red Hat Enterprise Linux 8/9 and Ubuntu LTS servers (patching, local repositories, services, security tools, monitoring agents, and zero-downtime troubleshooting).</li>
          <li>Supported AWS, EKS, Kubernetes, VMware Tanzu, Docker, Docker Compose, RBAC, IAM, and deployment configuration for containerized cloud workloads.</li>
          <li>Built and maintained GitLab CI/CD pipelines and automated scripts for infrastructure validation, deployment workflows, and operational delivery.</li>
          <li>Supported enterprise security and monitoring tools: SentinelOne, BigFix, SolarWinds, Prometheus, Grafana, HashiCorp Vault, and PostgreSQL 16.</li>
          <li>Developed internal automation and AI-assisted operations workflows using n8n, FastAPI, PostgreSQL pgvector, Qdrant, Ollama, and API integrations for automated incident triage.</li>
        </ul>
        <div class="tech-pill-list"><strong>Core Tech:</strong> RHEL 8/9, Ubuntu LTS, Ansible Tower/AWX, AWS, EKS, GCP, VMware Tanzu, Docker, GitLab CI/CD, HashiCorp Vault, SentinelOne, BigFix, SolarWinds, Prometheus, Grafana, FastAPI, n8n, pgvector.</div>
      </div>

      <!-- Role 3: Le Siam Senior Engineer -->
      <div class="job-block">
        <div class="job-header">
          <span class="job-role">Senior Network & Software Engineer</span>
          <span class="job-period">November 2020 – May 2025</span>
        </div>
        <div class="job-company">Le Siam Internetwork Co., Ltd. <span class="job-client">• Bangkok, Thailand</span></div>
        <ul class="achievements">
          <li>Designed and delivered high-performance Hyper-Converged Infrastructure (HCI) and enterprise virtualization solutions.</li>
          <li>Implemented Dell and Huawei enterprise storage arrays, executing SAN switch zoning (Dell/Brocade) and LUN provisioning.</li>
          <li>Deployed VMware ESXi, vCenter, vSAN clusters, and NSX-T Data Center (Managers and Edge Nodes) for resilient multi-tenant fabric.</li>
          <li>Built and maintained Proxmox VE enterprise clusters with high availability, backup automation, and bonded network interfaces.</li>
          <li>Commissioned Huawei DWDM optical transport (OptiX OSN9800 + M24 MUX/DEMUX) and software controllers (NCE-T, NCE-IP).</li>
        </ul>
        <div class="tech-pill-list"><strong>Core Tech:</strong> VMware vSphere/vCenter, vSAN, NSX-T, Proxmox VE, Dell & Huawei SAN Storage, Huawei DWDM OSN9800, NCE-T/IP, BGP, OSPF, RHEL, Ubuntu.</div>
      </div>

      <!-- Compact Roles 4 & 5 -->
      <div class="job-block" style="margin-bottom: 2px;">
        <div class="job-header">
          <span class="job-role">Backend DevOps Engineer (Aug 2022 – Dec 2022) &amp; Hosting Support Engineer (Jul 2020 – Oct 2020)</span>
        </div>
        <div class="job-company">Le Siam Internetwork Co., Ltd. &bull; Metrabyte Co., Ltd.</div>
        <div class="job-summary" style="margin-bottom: 0;">Built containerized microservices (Docker, K8s, FastAPI, Node.js), relational database tuning (PostgreSQL, MariaDB), and enterprise web hosting server administration (DirectAdmin, cPanel, DNS, SSL, Exim).</div>
      </div>
    </div>

    <!-- Sheet 1 Footer -->
    <div class="page-footer">
      <span>Pasit Chatcharoenkit — Curriculum Vitae</span>
      <span>Page 1 of 2</span>
    </div>
  </div>

  <!-- ==================== SHEET 2 ==================== -->
  <div class="sheet" id="sheet2">
    <!-- Projects Section -->
    <div class="section">
      <div class="section-title">
        <span>Key Enterprise & AI Projects</span>
        <span class="section-badge"><a href="https://github.com/rapterxcode">github.com/rapterxcode</a> (19 Active Repositories)</span>
      </div>
      <div class="projects-grid">
        <div class="project-card">
          <div class="project-title">Multi-Cloud Landing Zones (AWS / GCP / Azure)</div>
          <div class="project-desc">Architected multi-account landing zone baselines, transit network routing, security guardrails, and IAM governance for enterprise financial infrastructure.</div>
        </div>
        <div class="project-card">
          <div class="project-title">AIOps Incident & Knowledge Search Prototype</div>
          <div class="project-desc">FastAPI + Qdrant + Ollama + pgvector + n8n for automated runbook semantic search, incident triage, and agentic workflows.</div>
        </div>
        <div class="project-card">
          <div class="project-title">Config New Linux VM (Zero-Touch Baseline)</div>
          <div class="project-desc">Ansible Tower/AWX automated baseline for RHEL 8/9 and Ubuntu (hostname, machine-id, patching, SentinelOne, SolarWinds).</div>
        </div>
        <div class="project-card">
          <div class="project-title">Cisco FMC API Automation & RAG Vector Pipeline</div>
          <div class="project-desc">Automated security policy telemetry ingestion from Cisco Firepower Management Center into PostgreSQL pgvector for LLM queries.</div>
        </div>
        <div class="project-card">
          <div class="project-title">APIGW Project (Apache APISIX + HashiCorp Vault)</div>
          <div class="project-desc">Internal API Gateway on APISIX + Docker Compose with Vault-backed dynamic credential injection and rate limiting.</div>
        </div>
        <div class="project-card">
          <div class="project-title">Enterprise Linux / Windows Compliance Digest</div>
          <div class="project-desc">Automated security hardening audits across enterprise server fleets with centralized HTML/email executive digest reporting.</div>
        </div>
        <div class="project-card">
          <div class="project-title">Vault on Kubernetes (k8s-vault)</div>
          <div class="project-desc">Production Vault deployment manifests on Kubernetes with StatefulSet, HPA, TLS, auto-unseal, and ServiceAccount secrets injection.</div>
        </div>
        <div class="project-card">
          <div class="project-title">Huawei DWDM OptiX OSN9800 & NCE Automation</div>
          <div class="project-desc">Commissioned optical transport with 10G/100G lambdas, optical power budget optimization, and automated alarm monitoring via NCE-T/IP.</div>
        </div>
      </div>
    </div>

    <!-- Technical Skills Matrix -->
    <div class="section">
      <div class="section-title">
        <span>Technical Expertise & Core Capabilities</span>
        <span class="section-badge">Enterprise Competency</span>
      </div>
      <div class="skills-grid">
        <div class="skill-domain">
          <div class="domain-title">Multi-Cloud & Enterprise Landing Zones</div>
          <div class="domain-detail">AWS (Organizations, Transit Gateway, Control Tower, EKS), GCP (Cloud Foundation, Shared VPC), Azure (Landing Zones, ExpressRoute), FinOps.</div>
        </div>
        <div class="skill-domain">
          <div class="domain-title">Infrastructure as Code & Automation</div>
          <div class="domain-detail">Terraform, Ansible Tower/AWX, GitLab CI/CD, GitHub Actions, Bash, Python, PowerShell, Automated Baseline Hardening.</div>
        </div>
        <div class="skill-domain">
          <div class="domain-title">Linux Administration & OS Hardening</div>
          <div class="domain-detail">RHEL 8/9, Ubuntu LTS, CentOS, Debian, SUSE, Local Repositories, LVM, Systemd, PAM, Zero-Downtime Patching.</div>
        </div>
        <div class="skill-domain">
          <div class="domain-title">Container Orchestration & Microservices</div>
          <div class="domain-detail">Kubernetes, AWS EKS, VMware Tanzu, Docker, Docker Compose, Portainer, Ingress, Calico CNI, Microservices Architecture.</div>
        </div>
        <div class="skill-domain">
          <div class="domain-title">Virtualization & Storage Fabric</div>
          <div class="domain-detail">VMware vSphere/vCenter, vSAN Cluster, NSX-T Data Center, Proxmox VE, Dell & Huawei Storage Arrays, Brocade SAN Zoning.</div>
        </div>
        <div class="skill-domain">
          <div class="domain-title">Enterprise Optical & Network Routing</div>
          <div class="domain-detail">Huawei DWDM (OptiX OSN9800), NCE-T, NCE-IP, BGP, OSPF, VLAN, Cisco Routers/Switches, FortiGate Firewalls, IPsec VPN.</div>
        </div>
        <div class="skill-domain">
          <div class="domain-title">Security Governance & Monitoring</div>
          <div class="domain-detail">HashiCorp Vault, SentinelOne EDR, BigFix, Prometheus, Grafana, SolarWinds, Node Exporter, Alertmanager, Compliance Audits.</div>
        </div>
        <div class="skill-domain">
          <div class="domain-title">Modern AI-Assisted Operations (AIOps)</div>
          <div class="domain-detail">FastAPI, PostgreSQL pgvector, Qdrant Vector DB, Ollama Local LLMs, n8n Workflow Automation, Agentic Runbook Retrieval.</div>
        </div>
      </div>
    </div>

    <!-- Certifications -->
    <div class="section">
      <div class="section-title">
        <span>Accreditations & Professional Certifications</span>
        <span class="section-badge">17 Vendor Certifications</span>
      </div>
      <div class="certs-grid">
        <div>VMware Certified Professional - Data Center Virtualization (VCP-DCV 2023)</div>
        <div>VMware Certified Professional - Network Virtualization (VCP-NV 2023)</div>
        <div>Alibaba Cloud Certified Associate - Cloud Native (ACA-Cloud Native)</div>
        <div>Alibaba Cloud Certified Associate - Cloud Security (ACA-Cloud Security)</div>
        <div>H3C Certified Network Engineer (H3CNE)</div>
        <div>Huawei Certified ICT Associate - Transmission (HCIA Transmission)</div>
        <div>Huawei Certified Specialist - Sales-Transmission & Access (HCSA)</div>
        <div>Huawei Certified Specialist - Sales-Digital Power (HCSA)</div>
        <div>Huawei Certified Specialist - Sales-Intelligent Collaboration (HCSA)</div>
        <div>Huawei Certified Specialist Professional - Presales Storage (HCSP)</div>
        <div>FutureSkill - Microsoft Azure Cloud Basic &amp; Architecture</div>
        <div>FutureSkill - Microsoft Azure Cloud Design Solution (Storage & Security)</div>
        <div>FutureSkill - AWS Cloud Getting Started With Cloud and AWS</div>
        <div>FutureSkill - AWS Cloud Introduction to AWS Core Services</div>
        <div>FutureSkill - AWS Cloud Network Security and Services on AWS</div>
        <div>FutureSkill - AWS Workshop: Deploy Web Application on EC2</div>
      </div>
    </div>

    <!-- Bottom: Education & References -->
    <div class="bottom-grid">
      <div class="section" style="margin-bottom: 0;">
        <div class="section-title"><span>Education</span></div>
        <div class="edu-inst">Rajamangala University of Technology Phra Nakhon</div>
        <div class="edu-degree">B.Sc. in Computer Science (North Bangkok Campus) • GPA: 2.60</div>
        <div class="edu-inst">Pongsawadi Technological College</div>
        <div class="edu-degree">B.B.A. in Business Computer • GPA: 3.53</div>
      </div>

      <div class="section" style="margin-bottom: 0;">
        <div class="section-title"><span>Professional References</span></div>
        <div class="ref-card">
          <div class="ref-name">Mr. Amnat Keankasem <span class="ref-title">• Senior Manager</span></div>
          <div>AEON Thana Sinsap (Thailand) PCL | amnatke@aeon.co.th | (+66)87 713 7908</div>
        </div>
        <div class="ref-card">
          <div class="ref-name">Mr. Zhang Xinhua <span class="ref-title">• CEO &amp; Managing Director</span></div>
          <div>Le Siam Internetwork Co., Ltd. | tom@lsiam.com | (+66)82 782 3329</div>
        </div>
        <div class="ref-card">
          <div class="ref-name">Mr. Pharkphum Direkpoke <span class="ref-title">• Senior Project Manager</span></div>
          <div>Enterprise Infrastructure Projects | (+66)80 549 3939</div>
        </div>
      </div>
    </div>

    <!-- Sheet 2 Footer -->
    <div class="page-footer">
      <span>Pasit Chatcharoenkit — Curriculum Vitae</span>
      <span>Page 2 of 2</span>
    </div>
  </div>

</body>
</html>
"""

    with open(html_output, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Wrote HTML template to {html_output}")

    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto(f"file://{html_output}")
        page.pdf(
            path=output_pdf,
            format="A4",
            print_background=True,
            margin={"top": "0", "bottom": "0", "left": "0", "right": "0"}
        )
        browser.close()

    print(f"Successfully generated PDF at {output_pdf}")
    print(f"File size: {os.path.getsize(output_pdf)} bytes")

if __name__ == "__main__":
    generate_resume_pdf()
