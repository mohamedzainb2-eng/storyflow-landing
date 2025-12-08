import React, { useMemo } from "react";
import Navbar from "../components/Navbar";
import { useScrollProgress } from "../core/hooks/useScrollProgress";
import type { ProjectDefinition } from "../data/projects";

interface PageLayoutProps {
  children: React.ReactNode;
  projects: ProjectDefinition[];
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, projects }) => {
  const sectionIds = useMemo(
    () => ["hero", ...projects.map((p) => p.slug), "outro"],
    [projects]
  );

  const { progress } = useScrollProgress(sectionIds);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-50">
      <Navbar />

      <div className="pointer-events-none fixed inset-x-0 top-[64px] z-30 hidden h-px bg-slate-900 md:block">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-sky-400 transition-all duration-300"
          style={{ width: `${Math.max(5, progress * 100)}%` }}
        />
      </div>

      <main className="relative">{children}</main>
    </div>
  );
};

export default PageLayout;
