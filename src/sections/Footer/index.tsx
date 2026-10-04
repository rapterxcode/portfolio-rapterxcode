import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 pt-8 pb-12 border-t border-slate-800/80 text-xs text-slate-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-mono text-slate-300">
            Crafted with passion by <strong className="text-white">Pasit Chatcharoenkit</strong> (RapterXCode)
          </p>
          <p className="text-[11px] text-slate-500">
            Built with React 19, TypeScript, Vite & Tailwind CSS v4 · Deployed on GitHub Pages
          </p>
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300 transition-all duration-200 cursor-pointer text-xs font-mono group"
        >
          <span>Back to Top</span>
          <FontAwesomeIcon icon={faArrowUp} className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
