import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../core/i18n/LanguageContext";
import { CinematicTitle } from "./CinematicTitle";
import type { ProjectDefinition, ProjectHighlight } from "../data/projects";
import { getAssetPath } from "../core/utils/assetPath";

interface ProjectSectionProps {
  project: ProjectDefinition;
}

export const ProjectSection: React.FC<ProjectSectionProps> = ({ project }) => {
  const { language, direction } = useLanguage();
  const isArabic = language === "ar";

  const [activeScreen, setActiveScreen] = useState(0);
  const screensCount = project.screens.length;

  useEffect(() => {
    if (!screensCount) return;
    const interval = window.setInterval(
      () => setActiveScreen((prev) => (prev + 1) % screensCount),
      4000
    );
    return () => window.clearInterval(interval);
  }, [screensCount]);

  const universeLabel = isArabic ? "العالم" : "Universe";
  const worldNumber = String(project.universe).padStart(2, "0");

  const title = project.name[language];
  const tagline = project.tagline[language];
  const description = project.description[language];

  const getHighlight = (id: ProjectHighlight["id"]) =>
    project.highlights.find((h) => h.id === id);

  const keyPoints = getHighlight("keyPoints");
  const focus = getHighlight("focus");
  const role = getHighlight("role");

  const currentScreen = project.screens[activeScreen];
  const currentScreenSrc = currentScreen
    ? getAssetPath(currentScreen.src)
    : "";

  const techLine = project.techStack.join(" • ");

  const handleVisit = () => {
    if (!project.liveUrl) return;
    window.open(project.liveUrl, "_blank", "noopener,noreferrer");
  };

  const handleGithub = () => {
    if (!project.repoUrl) return;
    window.open(project.repoUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      dir={direction}
      className="relative mx-auto max-w-6xl px-6 pb-20 lg:px-0"
    >
      
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/70 to-transparent" />

      
      <motion.div
        className="mt-10 mb-6 flex items-center justify-between text-xs text-slate-400"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={direction === "rtl" ? "text-right" : "text-left"}>
          <div className="mb-1 text-[11px] uppercase tracking-[0.25em] text-slate-500">
            {isArabic ? "العالم" : "UNIVERSE"} {worldNumber}
          </div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            {tagline}
          </div>
        </div>
        <div className="hidden text-[11px] uppercase tracking-[0.25em] text-slate-500 md:block">
          {techLine}
        </div>
      </motion.div>

      <div
        className={`grid gap-10 md:grid-cols-2 ${
          direction === "rtl" ? "md:grid-flow-col-dense" : ""
        }`}
      >
        
        <motion.div
          className={direction === "rtl" ? "md:order-2 text-right" : "md:order-1"}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <CinematicTitle
            text={title}
            className="mb-4 text-3xl font-semibold text-slate-50 md:text-4xl"
          />

          <p className="mb-3 text-sm font-medium text-slate-300">
            {tagline}
          </p>

          <p className="mb-4 text-sm leading-relaxed text-slate-300">
            {description}
          </p>

          
          <motion.div
            className="mb-6 grid gap-4 text-xs text-slate-300 md:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {role && (
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {role.label[language]}
                </p>
                <p className="leading-relaxed text-slate-200">
                  {role.body[language]}
                </p>
              </div>
            )}
            {focus && (
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {focus.label[language]}
                </p>
                <p className="leading-relaxed text-slate-200">
                  {focus.body[language]}
                </p>
              </div>
            )}
            {keyPoints && (
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  {keyPoints.label[language]}
                </p>
                <p className="leading-relaxed text-slate-200">
                  {keyPoints.body[language]}
                </p>
              </div>
            )}
          </motion.div>

          
          <motion.div
            className="mb-4 flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-xs text-slate-200"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {project.liveUrl && (
              <button
                type="button"
                onClick={handleVisit}
                className="rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-400 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:shadow-indigo-400/40"
              >
                {isArabic ? "زيارة المشروع" : "Visit project"}
              </button>
            )}
            {project.repoUrl && (
              <button
                type="button"
                onClick={handleGithub}
                className="rounded-full border border-slate-700/70 bg-slate-950/60 px-6 py-2 text-sm font-medium text-slate-100 hover:border-indigo-400"
              >
                {isArabic ? "عرض الكود على GitHub" : "View code on GitHub"}
              </button>
            )}
          </motion.div>
        </motion.div>

        
        <motion.div
          className={direction === "rtl" ? "md:order-1" : "md:order-2"}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative rounded-3xl bg-slate-950/90 p-[1px] shadow-[0_0_30px_rgba(15,23,42,0.9)]">
            <div className="relative rounded-[22px] bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 p-6">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                <span>
                  {universeLabel} {worldNumber}
                </span>
                <span>
                  {activeScreen + 1} / {screensCount}
                </span>
              </div>

              <div className="relative overflow-hidden rounded-2xl bg-slate-900/80">
                {currentScreen && (
                  <img
                    src={currentScreenSrc}
                    alt={currentScreen.alt}
                    className="h-[330px] w-full object-contain"
                    loading="lazy"
                  />
                )}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2">
                {project.screens.map((screen, screenIndex) => {
                  const isActive = screenIndex === activeScreen;
                  return (
                    <button
                      key={screen.id}
                      type="button"
                      onClick={() => setActiveScreen(screenIndex)}
                      className="h-2.5 w-2.5 rounded-full"
                      aria-label={screen.alt}
                    >
                      <span
                        className={`block h-full w-full rounded-full transition-all ${
                          isActive
                            ? "scale-110 bg-slate-50"
                            : "bg-slate-500/60 hover:bg-slate-200/90"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
