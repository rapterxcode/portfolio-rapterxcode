import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface TitleLinkProps {
  isHighlight?: boolean;
  title: string;
  link?: string;
  className?: string;
}

const TitleLink: React.FC<TitleLinkProps> = ({
  isHighlight,
  title,
  link,
  className = ""
}) => {
  if (!link) {
    return (
      <h3
        className={`text-base sm:text-lg font-semibold tracking-tight transition-colors duration-200 ${
          isHighlight ? "text-cyan-300" : "text-white"
        } ${className}`}
      >
        {title}
      </h3>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
    >
      <h3
        className={`text-base sm:text-lg font-semibold tracking-tight transition-colors duration-200 group-hover:text-cyan-300 ${
          isHighlight ? "text-cyan-300" : "text-white"
        } ${className}`}
      >
        {title}
      </h3>
      <FontAwesomeIcon
        icon={faArrowUpRightFromSquare}
        className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200"
      />
    </a>
  );
};

export default TitleLink;