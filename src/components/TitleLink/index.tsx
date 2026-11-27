import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface TitleLinkProps {
  isHighlight?: boolean;
  title: string;
  link?: string;
  className?: string;
}

export default function TitleLink({
  isHighlight,
  title,
  link,
  className = "",
}: TitleLinkProps) {
  const titleClasses = cn(
    "text-base sm:text-lg font-semibold tracking-tight transition-colors duration-200",
    isHighlight ? "text-sky-600 dark:text-cyan-300" : "text-slate-900 dark:text-white",
    className
  );

  if (!link) {
    return <h3 className={titleClasses}>{title}</h3>;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
    >
      <h3 className={cn(titleClasses, "group-hover:text-sky-600 dark:group-hover:text-cyan-300")}>
        {title}
      </h3>
      <ExternalLink
        className="size-3.5 text-slate-400 group-hover:text-sky-600 dark:group-hover:text-cyan-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
        aria-hidden="true"
      />
    </a>
  );
}
