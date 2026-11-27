import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 pb-12 text-xs text-slate-500 dark:text-slate-400">
      <Separator className="mb-8 bg-slate-200 dark:bg-slate-800/80" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-mono text-slate-700 dark:text-slate-300">
            Crafted with passion by{" "}
            <strong className="text-slate-900 dark:text-white">Pasit Chatcharoenkit</strong> (
            <a
              href="https://github.com/rapterxcode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-cyan-400 hover:text-sky-700 dark:hover:text-cyan-300 transition-colors underline decoration-sky-500/30 underline-offset-2 font-medium"
            >
              @rapterxcode
            </a>
            )
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Built with React 19, TypeScript, Vite, Tailwind CSS v4 &amp; shadcn/ui ·{" "}
            <a
              href="https://github.com/rapterxcode/portfolio-rapterxcode"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
            >
              Deployed on Firebase Hosting
            </a>
          </p>
        </div>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={scrollToTop}
          className="font-mono text-xs bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-300 cursor-pointer group"
        >
          <span>Back to Top</span>
          <ArrowUp className="size-3.5 text-sky-600 dark:text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
        </Button>
      </div>
    </footer>
  );
}
