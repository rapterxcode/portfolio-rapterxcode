import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FormattedDateProps {
  children: ReactNode;
  isHighlight?: boolean;
}

export default function FormattedDate({ children, isHighlight }: FormattedDateProps) {
  if (!children) return null;
  return (
    <div className="mb-1">
      <span
        className={cn(
          "text-xs font-mono tracking-wider uppercase transition-colors duration-200",
          isHighlight
            ? "text-sky-600 dark:text-cyan-300 font-semibold"
            : "text-slate-500 dark:text-slate-400"
        )}
      >
        {children}
      </span>
    </div>
  );
}
