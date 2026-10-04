import React from "react";
import About from "../About";
import Skills from "../Skills";
import Experience from "../Experience";
import Projects from "../Projects";
import Certification from "../Certification";
import ContentContainer from "../../components/ContentContainer";
import { data as educationData } from "../../contents/education";
import ContactUs from "../ContactUs";
import Footer from "../Footer";

interface RightSectionProps {
  onInit?: (sectionId: string) => void;
}

const RightSection: React.FC<RightSectionProps> = ({ onInit }) => {
  return (
    <main className="flex flex-col space-y-16 px-4 sm:px-6 lg:px-8 py-6">
      <About onInit={onInit} title="About" />
      <Skills onInit={onInit} title="Skills & Capabilities" />
      <Experience onInit={onInit} title="Experience" />
      <Projects onInit={onInit} title="Featured Projects" />
      <Certification onInit={onInit} title="Certifications & Training" />
      <ContentContainer
        onInit={onInit}
        title="Education"
        data={educationData}
      />
      <ContactUs onInit={onInit} title="Contact & References" />
      <Footer />
    </main>
  );
};

export default RightSection;