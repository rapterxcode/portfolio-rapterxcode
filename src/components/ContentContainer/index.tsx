import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Description from "@/components/Description";
import FormattedDate from "@/components/FormattedDate";
import Picture from "@/components/Picture";
import TitleLink from "@/components/TitleLink";
import Tech from "@/components/Tech";

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
  onImageClick?: (imageSrc: string, title: string) => void;
}

export default function ContentContainer({
  title: sectionTitle = "",
  data = [],
  onImageClick,
}: ContentContainerProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const SECTION_ID = `${sectionTitle.toLowerCase().replace(/\s+/g, "-")}-section`;

  return (
    <section id={SECTION_ID} className="scroll-m-20 py-4">
      <div className="sticky top-0 z-20 backdrop-blur-md bg-[#F8FAFC]/90 dark:bg-[#090D16]/80 py-3 mb-4 border-b border-slate-200/80 dark:border-white/5 lg:border-none lg:static lg:bg-transparent lg:py-0">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
          <span className="size-2 rounded-full bg-sky-500 dark:bg-cyan-400 glow-cyan" aria-hidden="true" />
          <span>{sectionTitle}</span>
        </h2>
      </div>

      <div className="space-y-4">
        {data.map((item, index) => {
          const isHovered = hoveredIndex === index;
          return (
            <Card
              key={`${SECTION_ID}-${index}-${item.title}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "group relative rounded-2xl py-0 transition-all duration-300",
                isHovered
                  ? "bg-white dark:bg-slate-900/80 border-sky-300 dark:border-slate-700/80 shadow-lg shadow-slate-200/60 dark:shadow-none"
                  : "bg-white/90 dark:bg-slate-900/40 border-slate-200/90 dark:border-slate-800/80 hover:border-sky-200 dark:hover:border-slate-700/60 shadow-sm"
              )}
            >
              <CardContent className="p-4 sm:p-5">
                <div className="grid grid-cols-1 md:grid-cols-[25%_75%] gap-4">
                  <div>
                    <FormattedDate isHighlight={isHovered}>{item.date}</FormattedDate>
                    {item.picture && (
                      <Picture
                        picture={item.picture}
                        title={item.titlePicture || item.title}
                        onClick={
                          onImageClick
                            ? () => onImageClick(item.picture!, item.titlePicture || item.title)
                            : undefined
                        }
                      />
                    )}
                  </div>

                  <div className="space-y-2.5">
                    <TitleLink isHighlight={isHovered} title={item.title} link={item.link} />

                    <div className="space-y-1.5">
                      {item.description.map((desc, i) => (
                        <Description key={`${item.title}-desc-${i}`} myDescription={desc} />
                      ))}
                    </div>

                    {item.tech && item.tech.length > 0 && (
                      <div className="pt-2 flex flex-col gap-1.5">
                        {item.tech.map((techGroup, i) => (
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
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
