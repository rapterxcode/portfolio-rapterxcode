import { cn } from "@/lib/utils";

interface PictureProps {
  picture: string;
  title: string;
  onClick?: () => void;
  className?: string;
}

export default function Picture({
  picture,
  title,
  onClick,
  className = "",
}: PictureProps) {
  if (!picture) return null;

  return (
    <div
      className={cn(
        "mt-3 overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700/60 bg-slate-100 dark:bg-slate-900/60 transition-all duration-300 hover:border-sky-400 dark:hover:border-cyan-500/40",
        className
      )}
    >
      <img
        src={picture}
        alt={title}
        loading="lazy"
        onClick={onClick}
        className={cn(
          "w-full max-h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105",
          onClick && "cursor-zoom-in"
        )}
      />
    </div>
  );
}
