import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Download,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Terminal,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GitHubIcon, LineIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { data as legacyData, profileData } from "@/contents/header";
import { contactDetails } from "@/contents/contact";
import TerminalSimulator from "@/components/TerminalSimulator";

interface HeroProps {
  onExploreProjects: () => void;
  onExploreContact: () => void;
}

const KEY_SKILLS = [
  "AWS Landing Zone",
  "GCP",
  "Azure",
  "Architecture",
  "Project Mgmt",
  "Team Leadership",
  "Ansible AWX",
  "RHEL 8/9",
] as const;

export default function Hero({ onExploreProjects, onExploreContact }: HeroProps) {
  return (
    <section className="pt-32 pb-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Personal Intro & Headline (Span 7) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Live Availability & Location Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge
              variant="emerald"
              className="gap-2 px-3.5 py-1.5 text-xs shadow-sm backdrop-blur-md whitespace-normal max-w-full text-left"
            >
              <span className="relative flex size-2.5" aria-hidden="true">
                <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full size-2.5 bg-emerald-600 dark:bg-emerald-500" />
              </span>
              <span className="font-semibold">Assistant Manager · Cloud &amp; Automation @ AEON</span>
            </Badge>

            <Badge
              variant="outline"
              className="gap-1.5 px-3 py-1.5 text-xs font-mono bg-white/90 dark:bg-slate-900/70 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-xs"
            >
              <MapPin className="size-3 text-sky-600 dark:text-cyan-400" aria-hidden="true" />
              <span>Bangkok, Thailand</span>
            </Badge>
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 dark:text-white leading-tight">
              {profileData.title}
            </h1>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <h2 className="text-xl sm:text-2xl font-bold text-sky-600 dark:bg-gradient-to-r dark:from-cyan-400 dark:via-teal-300 dark:to-emerald-400 dark:bg-clip-text dark:text-transparent">
                Assistant Manager · Cloud &amp; Automation
              </h2>
            </div>
            <p className="text-xs sm:text-sm font-mono text-slate-600 dark:text-slate-400">
              Multi-Cloud Landing Zone (AWS / GCP / Azure) · Architecture &amp; Team Management
            </p>
          </div>

          {/* Narrative Summary */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
            Infrastructure engineering leader and architect with 6+ years orchestrating enterprise
            datacenters and multi-cloud platforms. Currently serving as{" "}
            <strong className="text-slate-900 dark:text-white font-semibold">
              Assistant Manager - Cloud &amp; Automation
            </strong>{" "}
            at{" "}
            <strong className="text-slate-900 dark:text-white font-semibold">
              AEON Thana Sinsap (Thailand) PCL
            </strong>
            , directing multi-cloud landing zones across AWS, GCP, and Azure, cloud architecture
            solution design, project management, and team leadership. Previously Linux System
            Administrator at Tech Soft Holding.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-teal-600 hover:from-sky-400 hover:to-teal-500 text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 cursor-pointer"
            >
              <a href={profileData.resumeFile} download={profileData.resumeDownloadName}>
                <Download className="size-4" />
                <span>Download CV (PDF)</span>
              </a>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={onExploreProjects}
              className="rounded-xl bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-sky-600 dark:hover:text-white font-semibold text-xs sm:text-sm border-slate-200 dark:border-slate-700/80 hover:border-sky-400 dark:hover:border-cyan-500/40 shadow-xs cursor-pointer"
            >
              <span>Explore 19 Projects</span>
              <ArrowRight className="size-3.5 text-sky-600 dark:text-cyan-400" />
            </Button>

            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={onExploreContact}
              className="rounded-xl font-mono text-xs sm:text-sm cursor-pointer"
            >
              <Mail className="size-3.5 text-sky-600 dark:text-cyan-400" />
              <span>Contact Directly</span>
            </Button>
          </div>

          <Separator className="bg-slate-200 dark:bg-slate-800/80" />

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {profileData.metrics.map((m) => (
              <Card
                key={m.label}
                className="rounded-xl py-0 bg-white/90 dark:bg-slate-950/60 border-slate-200/90 dark:border-slate-800/70 hover:border-sky-300 dark:hover:border-cyan-500/30 transition-colors shadow-xs"
              >
                <CardContent className="p-3">
                  <div className="text-xl sm:text-2xl font-black font-mono text-sky-600 dark:text-cyan-300">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5">
                    {m.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Direct Social & Contact Channels */}
          <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400 pt-1">
            <a
              href={contactDetails.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-sky-600 dark:hover:text-cyan-400 transition-colors inline-flex items-center gap-1.5 text-xs font-mono font-medium"
            >
              <LinkedInIcon className="size-4 text-sky-600 dark:text-cyan-400" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">
              ·
            </span>
            <a
              href={contactDetails.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-slate-950 dark:hover:text-white transition-colors inline-flex items-center gap-1.5 text-xs font-mono font-medium"
            >
              <GitHubIcon className="size-4 text-slate-700 dark:text-slate-300" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">
              ·
            </span>
            <span className="text-xs font-mono text-slate-700 dark:text-slate-300 inline-flex items-center gap-1.5 font-medium">
              <LineIcon className="size-4 text-emerald-500" />
              <span>{contactDetails.lineId}</span>
            </span>
            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">
              ·
            </span>
            <span className="text-xs font-mono text-slate-700 dark:text-slate-300 inline-flex items-center gap-1.5 font-medium">
              <Phone className="size-3.5 text-sky-600 dark:text-cyan-400" aria-hidden="true" />
              <span>{contactDetails.phone}</span>
            </span>
          </div>
        </div>

        {/* Right Column: Unified Developer Console & Profile Showcase (Span 5) */}
        <div className="lg:col-span-5 w-full flex justify-center">
          <Card className="relative w-full max-w-md rounded-3xl py-0 gap-0 bg-white/95 dark:bg-slate-950/90 border-slate-200/90 dark:border-slate-800/90 shadow-xl shadow-slate-200/50 dark:shadow-2xl backdrop-blur-2xl overflow-hidden transition-all duration-300 hover:border-sky-300 dark:hover:border-cyan-500/40">
            <div
              className="absolute -top-24 -right-24 w-56 h-56 bg-sky-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"
              aria-hidden="true"
            />

            <Tabs defaultValue="profile" className="gap-0">
              {/* macOS Developer Console Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-slate-900/95 border-b border-slate-200/90 dark:border-slate-800/80">
                <div className="flex items-center gap-2" aria-hidden="true">
                  <span className="size-3 rounded-full bg-rose-500 inline-block shadow-xs" />
                  <span className="size-3 rounded-full bg-amber-500 inline-block shadow-xs" />
                  <span className="size-3 rounded-full bg-emerald-500 inline-block shadow-xs" />
                </div>

                <TabsList className="h-7 p-0.5 bg-slate-200/80 dark:bg-slate-950/80 border border-slate-300/80 dark:border-slate-800">
                  <TabsTrigger
                    value="profile"
                    className="h-6 px-2.5 text-[11px] font-mono cursor-pointer data-[state=active]:bg-white dark:data-[state=active]:bg-cyan-500/20 data-[state=active]:text-sky-700 dark:data-[state=active]:text-cyan-300"
                  >
                    <User className="size-3" />
                    <span>Profile</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="terminal"
                    className="h-6 px-2.5 text-[11px] font-mono cursor-pointer data-[state=active]:bg-white dark:data-[state=active]:bg-cyan-500/20 data-[state=active]:text-sky-700 dark:data-[state=active]:text-cyan-300"
                  >
                    <Terminal className="size-3" />
                    <span>Terminal</span>
                  </TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                  <span className="size-2 rounded-full bg-emerald-500 motion-safe:animate-pulse" aria-hidden="true" />
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">online</span>
                </div>
              </div>

              {/* Profile Tab */}
              <TabsContent value="profile" className="m-0">
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="relative mb-5 group">
                    <div className="relative p-1 rounded-2xl bg-gradient-to-tr from-sky-400/40 via-indigo-300/30 to-emerald-400/40 shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                      <img
                        src={legacyData.thumbnail}
                        alt={profileData.title}
                        className="w-52 h-64 sm:w-60 sm:h-72 object-cover object-top rounded-xl border border-slate-200 dark:border-slate-800 shadow-inner"
                      />
                    </div>

                    <Badge
                      variant="emerald"
                      className="absolute -bottom-2.5 inset-x-0 mx-auto w-fit px-3 py-1 bg-white dark:bg-slate-900/95 border-emerald-300 dark:border-emerald-500/60 text-[11px] shadow-md backdrop-blur-md font-semibold"
                    >
                      <CheckCircle2 className="size-3.5 text-emerald-500" />
                      <span>Assistant Manager · Cloud &amp; Automation</span>
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight mt-2">
                    {profileData.title}
                  </h3>
                  <p className="text-xs font-mono text-sky-600 dark:text-cyan-400 mt-0.5 font-medium">
                    Assistant Manager · Cloud &amp; Automation
                  </p>

                  <div className="w-full mt-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 text-left text-xs space-y-1.5 shadow-2xs">
                    <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 text-[11px] font-mono">
                      <span className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold">
                        <Briefcase className="size-3" aria-hidden="true" />
                        <span>Current Position</span>
                      </span>
                      <span>Aug 2026 - Present</span>
                    </div>
                    <p className="font-semibold text-slate-900 dark:text-white text-xs">
                      AEON Thana Sinsap (Thailand) PCL
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-[11px] flex items-center gap-1">
                      <ShieldCheck className="size-3 text-sky-600 dark:text-cyan-400 shrink-0" aria-hidden="true" />
                      <span>Multi-Cloud Landing Zone (AWS/GCP/Azure) · Team Mgmt</span>
                    </p>
                  </div>

                  <Separator className="my-4 bg-slate-200 dark:bg-slate-800/80" />

                  <div className="flex flex-wrap justify-center gap-1.5 w-full">
                    {KEY_SKILLS.map((skill) => (
                      <Badge key={skill} variant="slate" className="text-[10px] px-2 py-0.5">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* Terminal Tab */}
              <TabsContent value="terminal" className="m-0">
                <div className="p-4 sm:p-5">
                  <TerminalSimulator />
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
}
