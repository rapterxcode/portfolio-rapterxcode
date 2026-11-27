import { useState } from "react";
import {
  Building2,
  Check,
  Copy,
  Mail,
  MessageSquare,
  Phone,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { LineIcon } from "@/components/icons/BrandIcons";
import { contactDetails, references } from "@/contents/contact";

interface ContactUsProps {
  title?: string;
}

export default function ContactUs({ title = "Get In Touch & References" }: ContactUsProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (text: string, key: string) => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      }
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), 2000);
    } catch {
      // Ignore clipboard write errors in restricted contexts
    }
  };

  return (
    <section id="contact-section" className="scroll-m-20 py-4">
      <div className="sticky top-0 z-20 backdrop-blur-md bg-[#F8FAFC]/90 dark:bg-[#090D16]/80 py-3 mb-6 border-b border-slate-200/80 dark:border-white/5 lg:border-none lg:static lg:bg-transparent lg:py-0">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
          <span className="size-2 rounded-full bg-sky-500 dark:bg-cyan-400 glow-cyan" aria-hidden="true" />
          <span>{title}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Contact Channels Card */}
        <Card className="rounded-2xl py-0 gap-0 bg-white/95 dark:bg-slate-900/40 border-slate-200/90 dark:border-slate-800/80 shadow-sm">
          <CardHeader className="p-5 pb-3">
            <CardTitle className="text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-cyan-400 font-mono flex items-center gap-2">
              <MessageSquare className="size-4" aria-hidden="true" />
              <span>Direct Channels</span>
            </CardTitle>
          </CardHeader>

          <CardContent className="p-5 pt-1 space-y-2.5">
            {contactDetails.emails.map((email, idx) => {
              const key = `email-${idx}`;
              const isCopied = copiedKey === key;
              return (
                <div
                  key={email}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm"
                >
                  <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 truncate">
                    <Mail className="size-3.5 text-sky-600 dark:text-cyan-400 shrink-0" aria-hidden="true" />
                    <span className="truncate">{email}</span>
                  </div>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon-xs"
                        onClick={() => handleCopy(email, key)}
                        aria-label={`Copy email ${email}`}
                        className="ml-2 text-slate-500 hover:text-sky-600 dark:hover:text-cyan-300 cursor-pointer"
                      >
                        {isCopied ? (
                          <Check className="size-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="size-3.5" />
                        )}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{isCopied ? "Copied!" : "Copy Email"}</TooltipContent>
                  </Tooltip>
                </div>
              );
            })}

            {/* LINE ID */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                <LineIcon className="size-4 text-emerald-500 shrink-0" />
                <span>
                  LINE: <strong className="text-slate-900 dark:text-white">{contactDetails.lineId}</strong>
                </span>
              </div>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-xs"
                    onClick={() => handleCopy(contactDetails.lineId, "line")}
                    aria-label="Copy LINE ID"
                    className="text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-300 cursor-pointer"
                  >
                    {copiedKey === "line" ? (
                      <Check className="size-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="size-3.5" />
                    )}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{copiedKey === "line" ? "Copied!" : "Copy LINE ID"}</TooltipContent>
              </Tooltip>
            </div>

            {/* Phone */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                <Phone className="size-3.5 text-sky-600 dark:text-emerald-400 shrink-0" aria-hidden="true" />
                <span>
                  Phone: <strong className="text-slate-900 dark:text-white">{contactDetails.phone}</strong>
                </span>
              </div>
              <Button asChild variant="link" size="xs" className="h-auto p-0 font-mono text-xs">
                <a href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}>Call</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Professional References Card */}
        <Card className="rounded-2xl py-0 gap-0 bg-white/95 dark:bg-slate-900/40 border-slate-200/90 dark:border-slate-800/80 shadow-sm">
          <CardHeader className="p-5 pb-3">
            <CardTitle className="text-sm font-semibold uppercase tracking-wider text-sky-600 dark:text-cyan-400 font-mono flex items-center gap-2">
              <UserCheck className="size-4" aria-hidden="true" />
              <span>Professional References</span>
            </CardTitle>
          </CardHeader>

          <CardContent className="p-5 pt-1 space-y-3">
            {references.map((ref, idx) => (
              <div
                key={`ref-${idx}`}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 text-xs space-y-1"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                    {ref.name}
                  </span>
                  <span className="text-[11px] font-mono text-sky-600 dark:text-cyan-300 font-semibold">
                    {ref.title}
                  </span>
                </div>

                {ref.organization && (
                  <div className="text-slate-600 dark:text-slate-400 flex items-center gap-1.5 text-[11px]">
                    <Building2 className="size-3 text-slate-400 shrink-0" aria-hidden="true" />
                    <span>{ref.organization}</span>
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  {ref.email && (
                    <a
                      href={`mailto:${ref.email}`}
                      className="hover:text-sky-600 dark:hover:text-cyan-300 transition-colors"
                    >
                      {ref.email}
                    </a>
                  )}
                  {ref.phone && (
                    <a
                      href={`tel:${ref.phone.replace(/[\s()]/g, "")}`}
                      className="hover:text-emerald-600 dark:hover:text-emerald-300 transition-colors"
                    >
                      {ref.phone}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
