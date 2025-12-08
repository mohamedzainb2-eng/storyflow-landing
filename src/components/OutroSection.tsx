import React from "react";
import { useLanguage } from "../core/i18n/LanguageContext";
import {
  CONTACT_EMAIL,
  CONTACT_GITHUB,
  CONTACT_LINKEDIN,
  CONTACT_WHATSAPP,
} from "../data/contact";

export const OutroSection: React.FC = () => {
  const { language, direction } = useLanguage();
  const isArabic = language === "ar";

  const title = isArabic
    ? "ما زال هناك عوالم أخرى قادمة"
    : "More worlds are already on the way";

  const body = isArabic
    ? "هذه مجرد بداية للملف التعريفي. هناك مشاريع جديدة، واجهات مختلفة، وتجارب أخرى قيد البناء. إذا كنت ترغب في التعاون أو استكشاف فكرة معينة بشكل أعمق، يسعدني أن أسمع منك."
    : "This is only the first wave of interfaces in Storyflow Landing. New projects and experiments are already in progress. If you want to collaborate or dive deeper into a specific idea, I’d be happy to talk.";

  const emailLabel = isArabic ? "تواصل عبر البريد" : "Email";
  const githubLabel = "GitHub";
  const linkedinLabel = "LinkedIn";
  const whatsappLabel = isArabic ? "واتساب" : "WhatsApp";

  return (
    <section
      id="contact"
      dir={direction}
      className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-0"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
        {isArabic ? "النهاية – بداية جديدة" : "Ending · New beginning"}
      </p>

      <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-50 md:text-4xl">
        {title}
      </h2>

      <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-slate-300">
        {body}
      </p>

      <div className="mb-10 flex flex-wrap justify-center gap-4">
        {/* Email */}
        <a
          href={CONTACT_EMAIL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/70 px-5 py-2 text-sm font-medium text-slate-100 hover:border-indigo-400"
        >
          <span>✉</span>
          <span>{emailLabel}</span>
        </a>

        {/* GitHub */}
        <a
          href={CONTACT_GITHUB}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/70 px-5 py-2 text-sm font-medium text-slate-100 hover:border-indigo-400"
        >
          <span>&lt;/&gt;</span>
          <span>{githubLabel}</span>
        </a>

        {/* LinkedIn */}
        <a
          href={CONTACT_LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-950/70 px-5 py-2 text-sm font-medium text-slate-100 hover:border-indigo-400"
        >
          <span>in</span>
          <span>{linkedinLabel}</span>
        </a>

        {/* WhatsApp */}
        <a
          href={CONTACT_WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/70 bg-emerald-900/60 px-5 py-2 text-sm font-medium text-emerald-50 hover:border-emerald-300"
        >
          <span>☎</span>
          <span>{whatsappLabel}</span>
        </a>
      </div>

      <p className="mt-6 text-xs text-slate-500">
        {isArabic
          ? "تكون هذه الواجهة مجرد نقطة بداية لاستعراض مشاريع الويب الخاصة بي المبنية بتقنيات حديثة – يمكنك دائمًا العودة لاحقًا لاكتشاف عوالم جديدة."
          : "This landing page is just a starting point for my web UI experiments. You can always come back later to explore new worlds as they go live."}
      </p>
    </section>
  );
};

export default OutroSection;
