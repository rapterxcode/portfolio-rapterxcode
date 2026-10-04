import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
import { certificationItems, courseTrainingItems } from "../../contents/certification";
import type { CertificationItem } from "../../types/portfolio";
import Tabs from "../../components/Tabs";
import type { TabItem } from "../../components/Tabs";
import Badge from "../../components/Badge";
import Modal from "../../components/Modal";

interface CertificationProps {
  onInit?: (sectionId: string) => void;
  title?: string;
}

const Certification: React.FC<CertificationProps> = ({
  onInit,
  title = "Certifications & Training"
}) => {
  const SECTION_ID = "certification-section";
  const [activeTab, setActiveTab] = useState<string>("certs");
  const [previewCert, setPreviewCert] = useState<CertificationItem | null>(null);

  useEffect(() => {
    if (onInit) {
      onInit(SECTION_ID);
    }
  }, [onInit, SECTION_ID]);

  const tabs: TabItem[] = [
    { id: "certs", label: "Certifications", count: certificationItems.length },
    { id: "courses", label: "Course Trainings", count: courseTrainingItems.length }
  ];

  return (
    <section id={SECTION_ID} className="scroll-m-20 py-4">
      {/* Sticky section header */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-[#F8FAFC]/90 dark:bg-[#090D16]/80 py-3 mb-4 border-b border-slate-200/80 dark:border-white/5 lg:border-none lg:static lg:bg-transparent lg:py-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-cyan-400 glow-cyan"></span>
            <span>{title}</span>
          </h2>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            17 Accreditations · 20 Professional Courses
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Content depending on active tab */}
      {activeTab === "certs" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certificationItems.map((cert) => (
            <div
              key={cert.id}
              className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/40 border border-slate-200/90 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-sky-600 dark:text-cyan-400 font-semibold">
                    {cert.issuer}
                  </span>
                  {cert.year && (
                    <span className="text-[11px] font-mono text-slate-500">
                      {cert.year}
                    </span>
                  )}
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-cyan-300 transition-colors mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                  {cert.description}
                </p>
              </div>

              {/* Certificate image preview button if available */}
              {cert.picture ? (
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>Verified Credential</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setPreviewCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-600 dark:text-cyan-400 hover:text-sky-700 dark:hover:text-cyan-300 font-medium transition-colors cursor-pointer"
                  >
                    <FontAwesomeIcon icon={faExpand} className="w-3 h-3" />
                    <span>View Certificate</span>
                  </button>
                </div>
              ) : (
                <div className="pt-2 border-t border-slate-200 dark:border-slate-800/60">
                  <span className="text-[11px] font-mono text-slate-500">
                    Accredited Professional
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {courseTrainingItems.map((course) => (
            <div
              key={course.id}
              className="p-4 rounded-2xl bg-white/95 dark:bg-slate-900/40 border border-slate-200/90 dark:border-slate-800/80 hover:border-sky-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold">
                    {course.provider}
                  </span>
                  {course.format && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 border border-slate-200 dark:border-slate-700/60 font-medium">
                      {course.format}
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-200 dark:border-slate-800/60">
                <span className="text-[10px] font-mono text-sky-700 dark:text-cyan-400/80 bg-sky-50 dark:bg-cyan-500/10 px-2 py-0.5 rounded border border-sky-200 dark:border-cyan-500/20 font-medium">
                  {course.topicCategory}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Certificate Image Modal */}
      {previewCert && (
        <Modal
          isOpen={!!previewCert}
          onClose={() => setPreviewCert(null)}
          title={previewCert.title}
          maxWidth="2xl"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-sky-600 dark:text-cyan-300 font-semibold">
                Issuer: {previewCert.issuer}
              </span>
              {previewCert.code && (
                <Badge variant="cyan" size="sm">
                  {previewCert.code}
                </Badge>
              )}
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-950 flex justify-center p-2 shadow-inner">
              <img
                src={previewCert.picture}
                alt={previewCert.titlePicture || previewCert.title}
                className="max-h-[60vh] w-auto object-contain rounded-lg"
              />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {previewCert.description}
            </p>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Certification;
