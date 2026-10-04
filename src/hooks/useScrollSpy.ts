import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[], offsetPercent = 0.3): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] || "");

  useEffect(() => {
    if (!sectionIds.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * offsetPercent;
      let currentSection = sectionIds[0] || "";

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            currentSection = id;
          }
        }
      }

      setActiveId((prev) => (prev !== currentSection ? currentSection : prev));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offsetPercent]);

  return activeId;
}
