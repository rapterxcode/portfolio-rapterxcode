import React from "react";

interface TechProps {
  isHighlight?: boolean;
  data: string[];
}

const Tech: React.FC<TechProps> = ({ isHighlight, data }) => {
  if (!data || data.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {data.map((item, index) => (
        <span
          key={`${item}-${index}`}
          className={`inline-flex items-center text-xs font-mono px-2.5 py-0.5 rounded-full border transition-all duration-200 ${
            isHighlight
              ? "bg-cyan-500/20 text-cyan-200 border-cyan-400/40 shadow-sm"
              : "bg-slate-800/80 text-cyan-300/90 border-slate-700/60 hover:border-cyan-500/40"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default Tech;