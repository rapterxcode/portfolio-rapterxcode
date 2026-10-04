import React from "react";

interface FormattedDateProps {
  children: React.ReactNode;
  isHighlight?: boolean;
}

const FormattedDate: React.FC<FormattedDateProps> = ({ children, isHighlight }) => {
  if (!children) return null;
  return (
    <div className="mb-1">
      <span
        className={`text-xs font-mono tracking-wider uppercase transition-colors duration-200 ${
          isHighlight ? "text-cyan-300 font-medium" : "text-slate-400"
        }`}
      >
        {children}
      </span>
    </div>
  );
};

export default FormattedDate;