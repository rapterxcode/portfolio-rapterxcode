import { useState } from "react";
import { Download, Menu, Moon, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { data as legacyData, profileData } from "@/contents/header";
import { useTheme } from "@/context/ThemeContext";

export interface NavItem {
  title: string;
  sectionId: string;
}

interface FloatingNavProps {
  navItems: NavItem[];
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function FloatingNav({
  navItems,
  activeSection,
  onNavigate,
}: FloatingNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleItemClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    onNavigate(sectionId);
  };

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Capsule with Avatar */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-950/85 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-2xl cursor-pointer hover:border-sky-400 dark:hover:border-cyan-500/40 transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Avatar className="size-6 border border-sky-500/80 dark:border-cyan-400/80 shadow-xs">
            <AvatarImage src={legacyData.thumbnail} alt="Pasit Chatcharoenkit" className="object-cover object-top" />
            <AvatarFallback className="text-[10px] font-mono">PC</AvatarFallback>
          </Avatar>
          <span className="font-bold text-xs sm:text-sm font-mono tracking-tight text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors">
            PASIT.DEV
          </span>
          <Badge variant="emerald" className="hidden sm:inline-flex text-[10px] px-2 py-0">
            6+ Yrs DevOps
          </Badge>
        </button>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-950/85 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-2xl"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <Button
                key={item.sectionId}
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => handleItemClick(item.sectionId)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "h-7 rounded-full px-3 text-xs font-medium cursor-pointer transition-all duration-200",
                  isActive
                    ? "bg-sky-500 text-white hover:bg-sky-600 hover:text-white dark:bg-cyan-500/20 dark:text-cyan-300 dark:border dark:border-cyan-500/40 dark:hover:bg-cyan-500/30 shadow-xs font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/60"
                )}
              >
                {item.title}
              </Button>
            );
          })}
        </nav>

        {/* Right Actions: Theme Switcher, Download Resume & Mobile Sheet */}
        <div className="flex items-center gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="rounded-full bg-white/90 dark:bg-slate-950/85 backdrop-blur-xl border-slate-200/80 dark:border-white/10 text-amber-500 dark:text-sky-300 shadow-md hover:bg-slate-100 dark:hover:bg-slate-900 cursor-pointer"
              >
                {theme === "dark" ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              Switch to {theme === "dark" ? "light" : "dark"} mode
            </TooltipContent>
          </Tooltip>

          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-sky-500 to-cyan-600 hover:from-sky-400 hover:to-cyan-500 text-white font-bold text-xs shadow-md shadow-sky-500/20 cursor-pointer"
          >
            <a href={profileData.resumeFile} download={profileData.resumeDownloadName}>
              <Download className="size-3.5" />
              <span>Resume</span>
            </a>
          </Button>

          {/* Accessible Mobile Navigation Drawer (Radix Sheet) */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                aria-label="Toggle Navigation Menu"
                className="md:hidden rounded-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 shadow-lg cursor-pointer"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[340px] bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-slate-200 dark:border-slate-800"
            >
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 font-mono text-sm">
                  <Avatar className="size-6 border border-sky-500/70">
                    <AvatarImage src={legacyData.thumbnail} alt="Pasit Chatcharoenkit" className="object-cover object-top" />
                    <AvatarFallback>PC</AvatarFallback>
                  </Avatar>
                  <span>PASIT.DEV</span>
                </SheetTitle>
                <SheetDescription className="text-xs font-mono">
                  Assistant Manager · Cloud &amp; Automation
                </SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col gap-1.5 px-4" aria-label="Mobile Navigation">
                {navItems.map((item) => {
                  const isActive = activeSection === item.sectionId;
                  return (
                    <Button
                      key={`mobile-${item.sectionId}`}
                      type="button"
                      variant="ghost"
                      onClick={() => handleItemClick(item.sectionId)}
                      className={cn(
                        "w-full justify-between rounded-xl font-mono text-xs cursor-pointer",
                        isActive
                          ? "bg-sky-50 text-sky-700 border border-sky-300 font-semibold hover:bg-sky-100 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border-cyan-500/40"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                      )}
                    >
                      <span>{item.title}</span>
                      {isActive && <span className="size-1.5 rounded-full bg-sky-500 dark:bg-cyan-400" />}
                    </Button>
                  );
                })}
              </nav>

              <div className="mt-auto p-4 space-y-3">
                <Separator />
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="secondary"
                    size="sm"
                    onClick={toggleTheme}
                    className="flex-1 font-mono text-xs cursor-pointer"
                  >
                    {theme === "dark" ? (
                      <Sun className="size-3.5 text-amber-400" />
                    ) : (
                      <Moon className="size-3.5 text-sky-600" />
                    )}
                    <span>{theme === "dark" ? "Light" : "Dark"}</span>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs cursor-pointer"
                  >
                    <a href={profileData.resumeFile} download={profileData.resumeDownloadName}>
                      <Download className="size-3.5" />
                      <span>Resume</span>
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
