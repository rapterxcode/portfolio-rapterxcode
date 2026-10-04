import React from "react";
import Header from "../Header";
import Navbar from "../Navbar";
import Contact from "../Contact";

export interface NavItem {
  title: string;
  sectionId: string;
  label?: string;
  badge?: string;
}

interface LeftSectionProps {
  navBarItems: NavItem[];
  currentSection: string;
  onNavigate?: (sectionId: string) => void;
}

const LeftSection: React.FC<LeftSectionProps> = ({
  navBarItems,
  currentSection,
  onNavigate
}) => {
  return (
    <aside className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)] flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col space-y-8">
        <Header />
        <Navbar
          navBarItems={navBarItems}
          currentSection={currentSection}
          onSelect={onNavigate}
        />
      </div>
      <div className="mt-8 pt-6 border-t border-white/5">
        <Contact />
      </div>
    </aside>
  );
};

export default LeftSection;
