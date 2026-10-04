import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "emerald" | "slate" | "amber" | "purple";
  size?: "sm" | "md";
  className?: string;
}

const variantStyles: Record<string, string> = {
  cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25 hover:border-cyan-500/50 hover:bg-cyan-500/15",
  emerald: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25 hover:border-emerald-500/50 hover:bg-emerald-500/15",
  slate: "bg-slate-800/60 text-slate-300 border-slate-700/60 hover:border-slate-600 hover:text-white",
  amber: "bg-amber-500/10 text-amber-300 border-amber-500/25 hover:border-amber-500/50 hover:bg-amber-500/15",
  purple: "bg-purple-500/10 text-purple-300 border-purple-500/25 hover:border-purple-500/50 hover:bg-purple-500/15"
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
