import fileResume from "../assets/Pasit Chatcharoenkit-Resume-Update-26062568.pdf";
import phonethubnail from "../assets/phonepic.jpg";
import type { ProfileInfo } from "../types/portfolio";

export const profileData: ProfileInfo = {
  title: "Pasit Chatcharoenkit",
  role: "Backend Full-Stack Developer / DevOps / Cloud / Infrastructure Engineer",
  shortBio: "Continuous learner focused on applying automation, cloud-native architectures, and DevOps practices to engineer measurable value and resilient enterprise infrastructure.",
  fullBio: [
    "Cloud/DevOps & Infrastructure Engineer with 6+ years' extensive hands-on experience spanning enterprise on-premise platforms (servers, SAN storage, high-availability networking, virtualization) and cloud-native stacks (AWS, GCP, Azure, Alibaba Cloud, Kubernetes, and IaC automation).",
    "Proven track record in enterprise Linux administration (RHEL 8/9, Ubuntu LTS), automated server provisioning with Ansible Tower/AWX, CI/CD pipeline automation with GitLab and Docker, security compliance hardening (SentinelOne, BigFix, HashiCorp Vault), and modern AI-assisted operations workflows (FastAPI, pgvector, Ollama, n8n)."
  ],
  status: "Open to High-Impact Roles & Collaborations",
  location: "Bangkok, Thailand",
  experienceYears: "6+ Years",
  resumeFile: fileResume,
  resumeDownloadName: "Pasit_Chatcharoenkit_Resume.pdf",
  social: {
    github: "https://github.com/pasit-chatcharoenkit",
    linkedin: "https://www.linkedin.com/in/pasit-chatcharoenkit-b6b1b1200/",
    facebook: "https://www.facebook.com/phonerapterx",
    credly: "https://www.credly.com/users/pasit-chatcharoenkit",
  },
  contact: {
    phone: "+66 92 415 7139",
    lineId: "phonegtracing",
    emails: [
      "phonepasit9@gmail.com",
      "pasit.working@gmail.com"
    ],
  },
  metrics: [
    { label: "Experience", value: "6+", sublabel: "Years in Enterprise IT & DevOps" },
    { label: "Projects", value: "19+", sublabel: "Enterprise & AI Deliveries" },
    { label: "Certifications", value: "17", sublabel: "Vendor & Cloud Accreditations" },
    { label: "Course Trainings", value: "20", sublabel: "Advanced Technical Programs" }
  ]
};

// Backward compatibility export
export const data = {
  title: profileData.title,
  position: profileData.role,
  description2: profileData.shortBio,
  resume: "View Resume",
  resumeFile: profileData.resumeFile,
  linkedin: profileData.social.linkedin,
  github: profileData.social.github,
  facebook: profileData.social.facebook,
  email: profileData.contact.emails[0],
  thumbnail: phonethubnail,
};