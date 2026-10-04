import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 pt-8 pb-12 border-t border-slate-200 dark:border-slate-800/80 text-xs text-slate-500 dark:text-slate-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-mono text-slate-700 dark:text-slate-300">
            Crafted with passion by <strong className="text-slate-900 dark:text-white">Pasit Chatcharoenkit</strong> (
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
          <p className="text-[11px] text-slate-500 dark:text-slate-500">
            Built with React 19, TypeScript, Vite & Tailwind CSS v4 ·{" "}
            <a
              href="https://github.com/rapterxcode/portfolio-rapterxcode"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 dark:hover:text-cyan-400 transition-colors"
            >
              Deployed on GitHub Pages
            </a>
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-sky-400 dark:hover:border-cyan-500/50 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-cyan-300 transition-all duration-200 cursor-pointer text-xs font-mono group shadow-xs"
        >
          <span>Back to Top</span>
          <FontAwesomeIcon icon={faArrowUp} className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform text-sky-600 dark:text-cyan-400" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
