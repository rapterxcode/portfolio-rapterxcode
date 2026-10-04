import React from "react";

interface PictureProps {
  picture: string;
  title: string;
  onClick?: () => void;
  className?: string;
}

const Picture: React.FC<PictureProps> = ({
  picture,
  title,
  onClick,
  className = ""
}) => {
  if (!picture) return null;

  return (
    <div className={`mt-3 overflow-hidden rounded-lg border border-slate-700/60 bg-slate-900/60 transition-all duration-300 hover:border-cyan-500/40 ${className}`}>
      <img
        src={picture}
        alt={title}
        loading="lazy"
        onClick={onClick}
        className={`w-full max-h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105 ${onClick ? "cursor-zoom-in" : ""}`}
      />
    </div>
  );
};

export default Picture;