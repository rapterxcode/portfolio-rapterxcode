import React, { useState, useEffect } from "react";
import Description from "../Description";
import FormattedDate from "../FormattedDate";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Tech from "../Tech";

interface ContentContainerItem {
  date?: string;
  title: string;
  link?: string;
  description: string[];
  tech?: string[][];
  picture?: string;
  titlePicture?: string;
}

interface ContentContainerProps {
  title: string;
  data: ContentContainerItem[];
  onInit?: (sectionId: string) => void;
  onImageClick?: (imageSrc: string, title: string) => void;
}

const ContentContainer: React.FC<ContentContainerProps> = ({
  title: sectionTitle = "",
  data = [],
  onInit,
  onImageClick
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const SECTION_ID = `${sectionTitle.toLowerCase().replace(/\s+/g, "-")}-section`;

  useEffect(() => {
    if (onInit) {
      onInit(SECTION_ID);
    }
  }, [onInit, SECTION_ID]);

  return (
    <section id={SECTION_ID} className="scroll-m-20 py-4">
      {/* Sticky section header on mobile */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-[#F8FAFC]/90 dark:bg-[#090D16]/80 py-3 mb-4 border-b border-slate-200/80 dark:border-white/5 lg:border-none lg:static lg:bg-transparent lg:py-0">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-cyan-400 glow-cyan"></span>
          <span>{sectionTitle}</span>
        </h2>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <div
              key={`${SECTION_ID}-${index}-${item.title}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${
                isHovered
                  ? "bg-white dark:bg-slate-900/80 border-sky-300 dark:border-slate-700/80 shadow-lg shadow-slate-200/60 dark:shadow-none"
                  : "bg-white/80 dark:bg-slate-900/30 border-slate-200/80 dark:border-white/5 hover:border-sky-200 dark:hover:border-slate-700/50 shadow-sm"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-[25%_75%] gap-4">
                {/* Left col: Date & Image */}
                <div>
                  <FormattedDate isHighlight={isHovered}>{item.date}</FormattedDate>
                  {item.picture && (
                    <Picture
                      picture={item.picture}
                      title={item.titlePicture || item.title}
                      onClick={onImageClick ? () => onImageClick(item.picture!, item.titlePicture || item.title) : undefined}
                    />
                  )}
                </div>

                {/* Right col: Title, Descriptions, Tech */}
                <div className="space-y-2.5">
                  <TitleLink
                    isHighlight={isHovered}
                    title={item.title}
                    link={item.link}
                  />

                  <div className="space-y-1.5">
                    {item.description.map((desc: string, i: number) => (
                      <Description key={`${item.title}-desc-${i}`} myDescription={desc} />
                    ))}
                  </div>

                  {item.tech && item.tech.length > 0 && (
                    <div className="pt-2 flex flex-col gap-1.5">
                      {item.tech.map((techGroup: string[], i: number) => (
                        <Tech
                          key={`${item.title}-techgroup-${i}`}
                          isHighlight={isHovered}
                          data={techGroup}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContentContainer;
