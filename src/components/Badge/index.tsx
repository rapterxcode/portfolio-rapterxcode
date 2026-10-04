import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "emerald" | "slate" | "amber" | "purple";
  size?: "sm" | "md";
  className?: string;
}

const variantStyles: Record<string, string> = {
  cyan: "bg-sky-50 dark:bg-cyan-500/10 text-sky-700 dark:text-cyan-300 border-sky-200 dark:border-cyan-500/25 hover:border-sky-400 dark:hover:border-cyan-500/50 hover:bg-sky-100/70 dark:hover:bg-cyan-500/15 shadow-sm",
  emerald: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/25 hover:border-emerald-400 dark:hover:border-emerald-500/50 hover:bg-emerald-100/70 dark:hover:bg-emerald-500/15 shadow-sm",
  slate: "bg-slate-100 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/60 hover:border-slate-400 dark:hover:border-slate-600 hover:text-slate-950 dark:hover:text-white shadow-sm",
  amber: "bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-500/25 hover:border-amber-400 dark:hover:border-amber-500/50 hover:bg-amber-100/70 dark:hover:bg-amber-500/15 shadow-sm",
  purple: "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/25 hover:border-purple-400 dark:hover:border-purple-500/50 hover:bg-purple-100/70 dark:hover:bg-purple-500/15 shadow-sm"
};

const sizeStyles = {
  sm: "text-xs px-2.5 py-0.5 font-mono",
  md: "text-xs sm:text-sm px-3 py-1 font-mono"
};

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "cyan",
  size = "sm",
  className = ""
}) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border transition-all duration-200 font-medium ${variantStyles[variant] || variantStyles.cyan} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
