import React from "react";

interface DescriptionProps {
  myDescription: string;
}

const Description: React.FC<DescriptionProps> = ({ myDescription }) => {
  if (!myDescription) return null;
  return (
    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-normal">
      {myDescription}
    </p>
  );
};

export default Description;