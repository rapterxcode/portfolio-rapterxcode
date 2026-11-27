import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { certificationItems, courseTrainingItems } from "@/contents/certification";
import type { CertificationItem } from "@/types/portfolio";

interface CertificationProps {
  title?: string;
}

export default function Certification({
  title = "Certifications & Training",
}: CertificationProps) {
  const [previewCert, setPreviewCert] = useState<CertificationItem | null>(null);

  return (
    <section id="certification-section" className="scroll-m-20 py-4">
      <div className="sticky top-0 z-20 backdrop-blur-md bg-[#F8FAFC]/90 dark:bg-[#090D16]/80 py-3 mb-4 border-b border-slate-200/80 dark:border-white/5 lg:border-none lg:static lg:bg-transparent lg:py-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <span className="size-2 rounded-full bg-sky-500 dark:bg-cyan-400 glow-cyan" aria-hidden="true" />
            <span>{title}</span>
          </h2>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            {certificationItems.length} Accreditations · {courseTrainingItems.length} Professional
            Courses
          </span>
        </div>
      </div>

      <Tabs defaultValue="certs" className="gap-6">
        <TabsList className="h-auto w-full sm:w-fit flex-wrap justify-start gap-1 p-1.5 rounded-xl bg-white/90 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800/80 shadow-xs">
          <TabsTrigger
            value="certs"
            className="flex-none gap-1.5 rounded-lg px-3.5 py-1.5 text-xs sm:text-sm cursor-pointer data-[state=active]:bg-sky-500 data-[state=active]:text-white dark:data-[state=active]:bg-cyan-500/20 dark:data-[state=active]:text-cyan-300 dark:data-[state=active]:border-cyan-500/40"
          >
            <span>Certifications</span>
            <span className="px-1.5 rounded-full text-[11px] font-mono bg-black/10 dark:bg-white/10">
              {certificationItems.length}
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="courses"
            className="flex-none gap-1.5 rounded-lg px-3.5 py-1.5 text-xs sm:text-sm cursor-pointer data-[state=active]:bg-sky-500 data-[state=active]:text-white dark:data-[state=active]:bg-cyan-500/20 dark:data-[state=active]:text-cyan-300 dark:data-[state=active]:border-cyan-500/40"
          >
            <span>Course Trainings</span>
            <span className="px-1.5 rounded-full text-[11px] font-mono bg-black/10 dark:bg-white/10">
              {courseTrainingItems.length}
            </span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="certs" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certificationItems.map((cert) => (
              <Card
                key={cert.id}
                className="rounded-2xl py-0 bg-white/95 dark:bg-slate-900/40 border-slate-200/90 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <CardContent className="p-4 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-sky-600 dark:text-cyan-400 font-semibold">
                        {cert.issuer}
                      </span>
                      {cert.year && (
                        <span className="text-[11px] font-mono text-slate-500">{cert.year}</span>
                      )}
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors mb-2">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                      {cert.description}
                    </p>
                  </div>

                  <div>
                    <Separator className="mb-2.5 bg-slate-200 dark:bg-slate-800/60" />
                    {cert.picture ? (
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 font-medium">
                          <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                          <span>Verified Credential</span>
                        </span>
                        <Button
                          type="button"
                          variant="link"
                          size="xs"
                          onClick={() => setPreviewCert(cert)}
                          className="h-auto p-0 font-mono text-xs text-sky-600 dark:text-cyan-400 hover:text-sky-700 dark:hover:text-cyan-300 cursor-pointer"
                        >
                          <Maximize2 className="size-3" />
                          <span>View Certificate</span>
                        </Button>
                      </div>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-500">
                        Accredited Professional
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="courses" className="m-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courseTrainingItems.map((course) => (
              <Card
                key={course.id}
                className="rounded-2xl py-0 bg-white/95 dark:bg-slate-900/40 border-slate-200/90 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-4 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                        {course.provider}
                      </span>
                      {course.format && (
                        <Badge variant="slate" className="rounded text-[10px] px-2 py-0">
                          {course.format}
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                      {course.title}
                    </h3>

                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {course.description}
                    </p>
                  </div>

                  <div className="mt-3">
                    <Separator className="mb-3 bg-slate-200 dark:bg-slate-800/60" />
                    <Badge variant="cyan" className="rounded text-[10px] px-2 py-0">
                      {course.topicCategory}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Accessible Certificate Lightbox Dialog (Radix UI) */}
      <Dialog
        open={previewCert !== null}
        onOpenChange={(open) => {
          if (!open) setPreviewCert(null);
        }}
      >
        <DialogContent className="sm:max-w-2xl bg-white dark:bg-[#0F172A] border-slate-200 dark:border-slate-700/80 p-0 overflow-hidden gap-0">
          {previewCert && (
            <>
              <DialogHeader className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-left">
                <DialogTitle className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white pr-8">
                  {previewCert.title}
                </DialogTitle>
                <DialogDescription className="text-xs font-mono text-sky-600 dark:text-cyan-300">
                  Issuer: {previewCert.issuer}
                </DialogDescription>
              </DialogHeader>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-sky-600 dark:text-cyan-300 font-semibold">
                    {previewCert.issuer}
                  </span>
                  {previewCert.code && <Badge variant="cyan">{previewCert.code}</Badge>}
                </div>

                {previewCert.picture && (
                  <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-950 flex justify-center p-2 shadow-inner">
                    <img
                      src={previewCert.picture}
                      alt={previewCert.titlePicture || previewCert.title}
                      className="max-h-[60vh] w-auto object-contain rounded-lg"
                    />
                  </div>
                )}

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {previewCert.description}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
