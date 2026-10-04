export interface ProfileInfo {
  title: string;
  role: string;
  shortBio: string;
  fullBio: string[];
  status: string;
  location: string;
  experienceYears: string;
  resumeFile: string;
  resumeDownloadName: string;
  social: {
    github: string;
    linkedin: string;
    facebook?: string;
    credly?: string;
  };
  contact: {
    phone: string;
    lineId: string;
    emails: string[];
  };
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  client?: string;
  location?: string;
  isCurrent?: boolean;
  link?: string;
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  clientOrOrg?: string;
  period?: string;
  category: 'Cloud & DevOps' | 'AI & Automation' | 'Infrastructure & HCI' | 'Security & Network';
  description: string;
  highlights: string[];
  architecture?: string[];
  tags: string[];
  featured?: boolean;
  link?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName?: string;
  items: {
    name: string;
    detail: string;
    tools: string[];
  }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  code?: string;
  issuer: string;
  year?: string;
  description: string;
  picture?: string;
  titlePicture?: string;
  credentialUrl?: string;
}

export interface CourseTrainingItem {
  id: string;
  title: string;
  provider: string;
  format?: 'Online' | 'Onsite' | 'Course';
  description: string;
  topicCategory: 'Cloud' | 'Virtualization & HCI' | 'Networking & Storage' | 'AI & DevOps';
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  gpa: string;
  year?: string;
}

export interface ReferenceContact {
  name: string;
  title: string;
  organization?: string;
  email?: string;
  phone?: string;
}
