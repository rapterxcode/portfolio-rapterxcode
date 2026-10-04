import type { NavItem } from "../LeftSection";

interface NavbarProps {
  navBarItems: NavItem[];
  currentSection: string;
  onSelect?: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  navBarItems,
  currentSection,
  onSelect
}) => {
  const handleClick = (sectionId: string) => {
    if (onSelect) {
      onSelect(sectionId);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="hidden lg:flex flex-col space-y-2 py-4" aria-label="In-page navigation">
      {navBarItems.map((item, index) => {
        const isActive = currentSection === item.sectionId;
        const formattedIndex = String(index + 1).padStart(2, "0");

        return (
          <button
            key={`nav-${item.sectionId}-${index}`}
            type="button"
            onClick={() => handleClick(item.sectionId)}
            className="group flex items-center py-2 text-left transition-all duration-200 cursor-pointer focus:outline-none"
          >
            {/* Active Indicator Line */}
            <span
              className={`mr-3 h-[2px] rounded-full transition-all duration-300 ${
                isActive
                  ? "w-12 bg-cyan-400 glow-cyan"
                  : "w-6 bg-slate-700 group-hover:w-10 group-hover:bg-slate-400"
              }`}
            />

            {/* Index number */}
            <span
              className={`text-xs font-mono mr-2.5 transition-colors duration-200 ${
                isActive ? "text-cyan-400 font-semibold" : "text-slate-500 group-hover:text-slate-400"
              }`}
            >
              {formattedIndex}
            </span>

            {/* Section Title */}
            <span
              className={`text-xs sm:text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                isActive
                  ? "text-white font-semibold"
                  : "text-slate-400 group-hover:text-slate-200"
              }`}
            >
              {item.title}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;