import h3cne from "../assets/cert/h3cne.jpg";
import hciatransmission from "../assets/cert/hcia-tranmission.jpg";
import hcsatransmission from "../assets/cert/hcsa-sales-tranmission.jpg";
import digitalpower from "../assets/cert/hcsa-digitalpower.jpg";
import intelligentcollaboration from "../assets/cert/hcsa-intelligent.jpg";
import vcpdcv from "../assets/cert/vcp-dcv.jpg";
import vcpnv from "../assets/cert/vcp-nv.jpg";
import acacloudnative from "../assets/cert/aca-cloud-native.jpg";
import acacloudsecurity from "../assets/cert/aca-cloud-security.jpg";
import futureskillAzureBasic from "../assets/cert/futureskill-azure-basic.jpg";
import futureskillAzureArchitecture from "../assets/cert/futureskill-azure-architecture.jpg";
import futureskillAzureDesignSolution from "../assets/cert/futureskill-azure-design-solution.jpg";
import futureskillAwsGetting from "../assets/cert/futureskill-aws-getting-start.jpg";
import futureskillAwsIntroduction from "../assets/cert/futureskill-aws-introduction.jpg";
import futureskillAwsService from "../assets/cert/futureskill-aws-service.jpg";
import futureskillAwsDeployWebEc2 from "../assets/cert/futureskill-aws-deploy-web-ec2.jpg";

import type { CertificationItem, CourseTrainingItem } from "../types/portfolio";

export const certificationItems: CertificationItem[] = [
  {
    id: "vcp-dcv-2023",
    title: "VCP-DCV: VMware Certified Professional - Data Center Virtualization 2023",
    code: "VCP-DCV",
    issuer: "VMware by Broadcom",
    year: "2023",
    description: "Validates advanced enterprise expertise in VMware vSphere and vSAN technologies, including cluster configuration, high availability, storage policies, and disaster recovery.",
    picture: vcpdcv,
    titlePicture: "VCP-DCV 2023"
  },
  {
    id: "vcp-nv-2023",
    title: "VCP-NV: VMware Certified Professional - Network Virtualization 2023",
    code: "VCP-NV",
    issuer: "VMware by Broadcom",
    year: "2023",
    description: "Validates proficiency in VMware NSX-T architecture, software-defined networking, micro-segmentation, logical routing, and security policies.",
    picture: vcpnv,
    titlePicture: "VCP-NV 2023"
  },
  {
    id: "aca-cloud-native",
    title: "ACA - Cloud Native Certificate Associate",
    code: "ACA Cloud Native",
    issuer: "Alibaba Cloud",
    description: "Validates expertise in cloud-native paradigms including containerization, serverless architectures, and microservice orchestrations.",
    picture: acacloudnative,
    titlePicture: "Alibaba Cloud ACA Cloud Native"
  },
  {
    id: "aca-cloud-security",
    title: "ACA - Cloud Security Certificate Associate",
    code: "ACA Security",
    issuer: "Alibaba Cloud",
    description: "Certifies comprehensive knowledge of cloud security governance, data encryption, IAM access protection, and threat defense.",
    picture: acacloudsecurity,
    titlePicture: "Alibaba Cloud ACA Cloud Security"
  },
  {
    id: "h3cne",
    title: "H3CNE: H3C Certified Network Engineer",
    code: "H3CNE",
    issuer: "H3C Technologies",
    description: "Validates practical networking expertise in routing, switching, VLAN segregation, network security, and infrastructure troubleshooting.",
    picture: h3cne,
    titlePicture: "H3CNE Network Engineer"
  },
  {
    id: "hcia-transmission",
    title: "HCIA - Transmission (Huawei Certified ICT Associate)",
    code: "HCIA Transmission",
    issuer: "Huawei Technologies",
    description: "Validates core competencies in optical transmission networks, SDH/WDM principles, fiber link planning, and optical hardware commissioning.",
    picture: hciatransmission,
    titlePicture: "Huawei HCIA Transmission"
  },
  {
    id: "hcsa-transmission-access",
    title: "HCSA Sales - Transmission & Access Specialist",
    code: "HCSA Transmission",
    issuer: "Huawei Technologies",
    description: "Validates solution sizing and architecture positioning for enterprise transmission, optical transport, and access networks.",
    picture: hcsatransmission,
    titlePicture: "Huawei HCSA Transmission"
  },
  {
    id: "hcsa-digital-power",
    title: "HCSA Sales - Digital Power Specialist",
    code: "HCSA Digital Power",
    issuer: "Huawei Technologies",
    description: "Certifies knowledge in smart data center facilities, modular UPS systems, renewable energy, and power management architectures.",
    picture: digitalpower,
    titlePicture: "Huawei HCSA Digital Power"
  },
  {
    id: "hcsa-intelligent-collaboration",
    title: "HCSA Sales - Intelligent Collaboration Specialist",
    code: "HCSA Collaboration",
    issuer: "Huawei Technologies",
    description: "Validates enterprise unified communications, smart telepresence systems, and video collaboration architectures.",
    picture: intelligentcollaboration,
    titlePicture: "Huawei HCSA Intelligent Collaboration"
  },
  {
    id: "hcsp-storage",
    title: "HCSP - Presales Storage Professional",
    code: "HCSP Storage",
    issuer: "Huawei Technologies",
    description: "Validates enterprise storage sizing, SAN/NAS architecture design, flash storage positioning, and business continuity planning.",
    picture: "",
    titlePicture: "Huawei HCSP Storage"
  },
  {
    id: "futureskill-azure-architecture",
    title: "Cloud Architecture Microsoft Azure",
    code: "Azure Architecture",
    issuer: "FutureSkill",
    description: "Architecting resilient multi-tier Azure cloud workloads with high availability, virtual networks, and scalable compute.",
    picture: futureskillAzureArchitecture,
    titlePicture: "FutureSkill Azure Architecture"
  },
  {
    id: "futureskill-azure-design-solution",
    title: "Cloud Design Solution: Azure Storage & Security",
    code: "Azure Storage & Sec",
    issuer: "FutureSkill",
    description: "Designing end-to-end cloud storage tiers, data encryption, RBAC access policies, and compliance baselines on Azure.",
    picture: futureskillAzureDesignSolution,
    titlePicture: "FutureSkill Azure Solution"
  },
  {
    id: "futureskill-azure-basic",
    title: "Cloud Basic Microsoft Azure",
    code: "Azure Basic",
    issuer: "FutureSkill",
    description: "Core cloud concepts, subscription hierarchy, billing management, and foundational Azure services.",
    picture: futureskillAzureBasic,
    titlePicture: "FutureSkill Azure Basic"
  },
  {
    id: "futureskill-aws-network-sec",
    title: "Cloud AWS - Network Security & Core Services",
    code: "AWS Security",
    issuer: "FutureSkill",
    description: "AWS VPC architecture, Security Groups, NACLs, IAM privilege management, and multi-tier network isolation.",
    picture: futureskillAwsService,
    titlePicture: "FutureSkill AWS Network Security"
  },
  {
    id: "futureskill-aws-deploy-web",
    title: "Cloud AWS - Workshop Deploy Web Application on EC2",
    code: "AWS EC2 Web App",
    issuer: "FutureSkill",
    description: "Practical hands-on web application deployment, security group configuration, and Linux instance management on AWS EC2.",
    picture: futureskillAwsDeployWebEc2,
    titlePicture: "FutureSkill AWS Deploy EC2"
  },
  {
    id: "futureskill-aws-core-services",
    title: "Cloud AWS - Introduction to Core Services",
    code: "AWS Core Services",
    issuer: "FutureSkill",
    description: "Foundational architecture covering Amazon EC2, S3 bucket management, RDS relational databases, and IAM access controls.",
    picture: futureskillAwsIntroduction,
    titlePicture: "FutureSkill AWS Introduction"
  },
  {
    id: "futureskill-aws-getting-start",
    title: "Cloud AWS - Getting Started with Cloud & AWS",
    code: "AWS Getting Started",
    issuer: "FutureSkill",
    description: "Global cloud infrastructure, Regions, Availability Zones, shared responsibility model, and cloud cost governance.",
    picture: futureskillAwsGetting,
    titlePicture: "FutureSkill AWS Getting Started"
  }
];

export const courseTrainingItems: CourseTrainingItem[] = [
  {
    id: "course-aws-ai-dev",
    title: "Workshop Dev AI – AWS Transformation",
    provider: "AWS Transformation (Onsite)",
    format: "Onsite",
    description: "Practical onsite workshop building modern AI/Dev workflows, agentic automation, and adopting AWS cloud transformation practices.",
    topicCategory: "AI & DevOps"
  },
  {
    id: "course-dwdm-huawei",
    title: "Dense Wavelength Division Multiplexing (DWDM)",
    provider: "Huawei Technologies",
    format: "Course",
    description: "In-depth training on DWDM optical transport fundamentals, wavelength multiplexing, optical channel routing, and chassis operation.",
    topicCategory: "Networking & Storage"
  },
  {
    id: "course-storage-huawei",
    title: "Enterprise Storage Course",
    provider: "Huawei Technologies",
    format: "Course",
    description: "Enterprise storage paradigms, RAID levels, storage pools, LUN mapping, snapshot replication, and backup administration.",
    topicCategory: "Networking & Storage"
  },
  {
    id: "course-ncet-huawei",
    title: "NCE Basic NE Configuration & Management",
    provider: "Huawei Technologies",
    format: "Course",
    description: "Introduction to Huawei Network Cloud Engine (NCE) controller, optical network element (NE) configuration, and alarm diagnostics.",
    topicCategory: "Networking & Storage"
  },
  {
    id: "course-vmware-vcpdcv",
    title: "VMware VCP-DCV vSphere / vCenter Administration",
    provider: "VMware Official (Online)",
    format: "Online",
    description: "vSphere architecture, ESXi host lifecycle, vCenter management, distributed resource scheduling (DRS), and high availability (HA).",
    topicCategory: "Virtualization & HCI"
  },
  {
    id: "course-vmware-vsan",
    title: "VMware vSAN Architecture & Storage Policies",
    provider: "VMware Official (Online)",
    format: "Online",
    description: "Software-defined storage concepts, storage policy-based management (SPBM), vSAN cluster fault domains, and disk troubleshooting.",
    topicCategory: "Virtualization & HCI"
  },
  {
    id: "course-vmware-nsxt",
    title: "VMware NSX-T Data Center – NSX Manager Operations",
    provider: "VMware Official (Online)",
    format: "Online",
    description: "NSX-T core architecture, logical routing tiers (Tier-0 / Tier-1), microsegmentation firewall rules, and NSX Edge gateways.",
    topicCategory: "Virtualization & HCI"
  },
  {
    id: "course-proxmox",
    title: "Proxmox VE Installation & Cluster Configuration",
    provider: "Enterprise Training (Online)",
    format: "Online",
    description: "Proxmox VE hypervisor setup, corosync clustering, ZFS storage, bonded network interfaces, VM lifecycle, and automated backup pools.",
    topicCategory: "Virtualization & HCI"
  },
  {
    id: "course-presales-huawei-storage",
    title: "Presales Huawei Enterprise Storage Solutions",
    provider: "Huawei (Online)",
    format: "Online",
    description: "Storage product positioning, IOPS/capacity sizing calculations, OceanStor all-flash architectures, and proposal preparation.",
    topicCategory: "Networking & Storage"
  },
  {
    id: "course-presales-xfusion",
    title: "Presales xFusion Enterprise Server Platform",
    provider: "xFusion (Online)",
    format: "Online",
    description: "Server hardware portfolio overview, rack/blade server sizing, BOM configuration, and mission-critical hardware architecture.",
    topicCategory: "Networking & Storage"
  },
  {
    id: "course-alibaba-cloud-native",
    title: "ACA – Cloud Native Technologies",
    provider: "Alibaba Cloud Academy",
    format: "Course",
    description: "Cloud-native architectures, container orchestration, microservices patterns, and serverless compute on Alibaba Cloud.",
    topicCategory: "Cloud"
  },
  {
    id: "course-alibaba-security",
    title: "ACA – Cloud Security Best Practices",
    provider: "Alibaba Cloud Academy",
    format: "Course",
    description: "Core cloud defense, identity and access management (RAM), Web Application Firewalls (WAF), and cloud security compliance.",
    topicCategory: "Cloud"
  },
  {
    id: "course-alibaba-compute",
    title: "ACA – Cloud Compute & Elastic Infrastructure",
    provider: "Alibaba Cloud Academy",
    format: "Course",
    description: "Elastic Compute Service (ECS) architectures, auto-scaling groups, instance family sizing, and VPC networking.",
    topicCategory: "Cloud"
  },
  {
    id: "course-azure-basic",
    title: "Microsoft Azure Fundamentals & Subscriptions",
    provider: "FutureSkill",
    format: "Online",
    description: "Cloud concepts, Azure subscriptions, governance, resource groups, and foundational infrastructure offerings.",
    topicCategory: "Cloud"
  },
  {
    id: "course-azure-arch",
    title: "Microsoft Azure Cloud Architecture & Resiliency",
    provider: "FutureSkill",
    format: "Online",
    description: "Designing resilient Azure architectures with virtual networks, VPN gateways, availability sets, and load balancers.",
    topicCategory: "Cloud"
  },
  {
    id: "course-azure-solution",
    title: "Azure Cloud Solutions: Security & Enterprise Storage",
    provider: "FutureSkill",
    format: "Online",
    description: "Storage account access tiers, blob encryption, Key Vault integration, and security compliance frameworks.",
    topicCategory: "Cloud"
  },
  {
    id: "course-aws-getting-started",
    title: "AWS Cloud Fundamentals & Core Concepts",
    provider: "FutureSkill",
    format: "Online",
    description: "AWS cloud geography, identity management baseline, and core compute and storage service architectures.",
    topicCategory: "Cloud"
  },
  {
    id: "course-aws-core-services",
    title: "AWS Core Infrastructure Services In-Depth",
    provider: "FutureSkill",
    format: "Online",
    description: "Hands-on configurations with EC2, S3 bucket policies, IAM role delegations, and RDS database provisioning.",
    topicCategory: "Cloud"
  },
  {
    id: "course-aws-network-security",
    title: "AWS Network Security Architecture & Controls",
    provider: "FutureSkill",
    format: "Online",
    description: "VPC subnetting, internet gateways, NAT gateways, route tables, and defense-in-depth network security controls.",
    topicCategory: "Cloud"
  },
  {
    id: "course-aws-deploy-ec2",
    title: "AWS Practical Workshop: Deploying Web Apps on EC2",
    provider: "FutureSkill",
    format: "Online",
    description: "End-to-end deployment of web applications on Linux EC2 instances, domain mapping, reverse proxying, and SSL setup.",
    topicCategory: "Cloud"
  }
];

// Backward-compatible export
export const data = certificationItems.map((item) => ({
  title: item.title,
  description: [item.description],
  picture: item.picture || "",
  titlePicture: item.titlePicture || item.title
}));