import fileResume from "../assets/Pasit Chatcharoenkit-Resume-Update-26062568.pdf";
import phonethubnail from "../assets/phonepic.jpg";
import type { ProfileInfo } from "../types/portfolio";

export const profileData: ProfileInfo = {
  title: "Pasit Chatcharoenkit",
  role: "Assistant Manager - Cloud & Automation / Senior DevOps Infrastructure Engineer",
  shortBio: "Engineering leader and architect specializing in multi-cloud landing zones (AWS, GCP, Azure), cloud architecture solution design, team management, and enterprise DevOps automation.",
  fullBio: [
    "Assistant Manager (Cloud & Automation) and Senior Infrastructure Engineer with 6+ years' extensive hands-on and leadership experience spanning enterprise on-premise platforms (servers, SAN storage, optical DWDM, virtualization) and modern multi-cloud architectures (AWS, GCP, Azure, Kubernetes, and IaC automation).",
    "Proven track record leading engineering teams, managing cloud infrastructure projects, architecting multi-cloud enterprise landing zones across AWS, GCP, and Azure, driving zero-touch server baselines (Ansible AWX, RHEL 8/9), security governance (HashiCorp Vault, SentinelOne), and modern AI-assisted operations workflows (FastAPI, pgvector, Ollama, n8n)."
  ],
  status: "Assistant Manager · Cloud & Automation @ AEON Thana Sinsap",
  location: "Bangkok, Thailand",
  experienceYears: "6+ Years",
  resumeFile: fileResume,
  resumeDownloadName: "Pasit_Chatcharoenkit_Resume.pdf",
  social: {
    github: "https://github.com/rapterxcode",
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