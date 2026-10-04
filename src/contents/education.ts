import type { EducationItem } from "../types/portfolio";

export const educationItems: EducationItem[] = [
  {
    id: "rmutp-cs",
    degree: "Bachelor of Science (B.Sc.)",
    field: "Computer Science",
    institution: "Rajamangala University of Technology Phra Nakhon (North Bangkok Campus)",
    gpa: "2.60",
    year: "Graduated"
  },
  {
    id: "pongsawadi-bc",
    degree: "Bachelor of Business Administration (B.B.A.)",
    field: "Business Computer",
    institution: "Pongsawadi Technological College",
    gpa: "3.53",
    year: "Graduated (First-Class Equivalent Honors GPA)"
  }
];

// Backward-compatible export
export const data = educationItems.map((item) => ({
  date: item.year,
  title: `${item.degree} in ${item.field}`,
  description: [`${item.institution} · GPA: ${item.gpa}`]
}));