import React from "react";
import { useLanguage } from "../core/i18n/LanguageContext";

const scrollToId = (hash: string) => {
  if (typeof window === "undefined") return;
  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar: React.FC = () => {
  const { language, toggleLanguage, direction } = useLanguage();
  const isArabic = language === "ar";

  const homeTarget = "#hero";
  const workTarget = "#project-1";
  const contactTarget = "#contact";

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-[#050816]/95 via-[#050816]/80 to-transparent backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => scrollToId(homeTarget)}
          className="group flex items-center gap-3"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-xs font-bold text-white shadow-lg shadow-violet-500/50">
            SF
          </div>
          <div
            className={
              direction === "rtl"
                ? "flex flex-col items-end"
                : "flex flex-col items-start"
            }
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-200">
              STORYFLOW LANDING
            </span>
            <span className="text-[11px] text-slate-400 transition group-hover:text-slate-200">
              {isArabic
                ? "Web UI portfolio – محمد الحسيني"
                : "Web UI portfolio by Mohamed El-Husseiny"}
            </span>
          </div>
        </button>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
          <button
            type="button"
            onClick={() => scrollToId(homeTarget)}
            className="relative pb-1 text-slate-300 transition hover:text-white"
          >
            {isArabic ? "الرئيسية" : "Home"}
            <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-transform duration-200 hover:scale-x-100" />
          </button>
          <button
            type="button"
            onClick={() => scrollToId(workTarget)}
            className="relative pb-1 text-slate-300 transition hover:text-white"
          >
            {isArabic ? "الأعمال" : "Work"}
            <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-transform duration-200 hover:scale-x-100" />
          </button>
          <button
            type="button"
            onClick={() => scrollToId(contactTarget)}
            className="relative pb-1 text-slate-300 transition hover:text-white"
          >
            {isArabic ? "تواصل" : "Contact"}
            <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-transform duration-200 hover:scale-x-100" />
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden text-[11px] uppercase tracking-[0.2em] text-slate-400 sm:inline">
            {isArabic ? "مرّر لاستكشاف الواجهات" : "Scroll to explore"}
          </span>
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-slate-500/60 bg-slate-900/70 px-4 py-1.5 text-xs font-medium text-slate-100 shadow-sm shadow-slate-900/60 transition hover:border-violet-400 hover:text-white"
          >
            {isArabic ? "English" : "العربية"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
