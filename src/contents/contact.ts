import type { ReferenceContact } from "../types/portfolio";

export const contactDetails = {
  phone: "+66 92 415 7139",
  lineId: "phonegtracing",
  location: "Bangkok, Thailand",
  emails: [
    "phonepasit9@gmail.com",
    "pasit.working@gmail.com"
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/pasit-chatcharoenkit/",
    github: "https://github.com/rapterxcode",
    credly: "https://www.credly.com/users/pasit-chatcharoenkit",
    facebook: "https://www.facebook.com/phonerapterx"
  }
};

export const references: ReferenceContact[] = [
  {
    name: "Mr. Amnat Keankasem",
    title: "Senior Manager",
    organization: "AEON Thana Sinsap (Thailand) Public Company Limited",
    email: "amnatke@aeon.co.th",
    phone: "(+66)87 713 7908"
  },
  {
    name: "Mr. Zhang Xinhua",
    title: "CEO & Managing Director",
    organization: "Le Siam Internetwork Co., Ltd.",
    email: "tom@lsiam.com",
    phone: "(+66)82 782 3329"
  },
  {
    name: "Mr. Pharkphum Direkpoke",
    title: "Senior Project Manager",
    organization: "Enterprise Projects",
    phone: "(+66)80 549 3939"
  }
];

// Backward-compatible export
export const data = [
  {
    title: "LinkedIn",
    link: contactDetails.links.linkedin,
    description: ["pasit-chatcharoenkit"]
  },
  {
    title: "GitHub",
    link: contactDetails.links.github,
    description: ["rapterxcode"]
  },
  {
    title: "Email",
    link: `mailto:${contactDetails.emails[0]}`,
    description: contactDetails.emails
  },
  {
    title: "LINE",
    description: [`ID: ${contactDetails.lineId}`]
  },
  {
    title: "Phone",
    description: [contactDetails.phone]
  }
];