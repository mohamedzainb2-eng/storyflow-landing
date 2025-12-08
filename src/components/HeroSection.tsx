import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../core/i18n/LanguageContext";
import { CinematicTitle } from "./CinematicTitle";

interface HeroSectionProps {
  onEnterFirstWorld?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onEnterFirstWorld }) => {
  const { language, direction } = useLanguage();
  const isArabic = language === "ar";

  const kicker = isArabic
    ? "عنّي · محمد الحسيني"
    : "About · Mohamed El-Husseiny";

  const title = isArabic
    ? "مطوّر واجهات أمامية يصمّم تجارب ويب راقية وواضحة"
    : "Front-end engineer crafting refined, cinematic web experiences";

  const aboutLead = isArabic
    ? "أبني واجهات ويب توازن بين الأناقة والوضوح، بحيث يشعر المستخدم أن كل تفاعل محسوب وهادئ."
    : "I build interfaces that balance elegance and clarity, so every interaction feels intentional and calm.";

  const aboutBody1 = isArabic
    ? "أعمل على صفحات هبوط، لوحات تحكّم، متاجر إلكترونية، وتجارب ثلاثية الأبعاد باستخدام React، TypeScript، Tailwind CSS وتقنيات الحركة الحديثة."
    : "I’ve worked on landing pages, dashboards, e-commerce fronts, and 3D web concepts using React, TypeScript, Tailwind CSS, and modern motion libraries.";

  const aboutBody2 = isArabic
    ? "هدفي أن يخرج المستخدم من التجربة وهو يفهم المنتج بسرعة، ويشعر أن التصميم نظيف والحركة خفيفة تخدم الفكرة لا تُشتّت عنها."
    : "The goal is for users to understand the product quickly, while the visual language and motion stay subtle, supportive, and never distracting.";

  const primaryCta = isArabic ? "استكشف الأعمال" : "Explore the work";
  const secondaryCta = isArabic ? "ابدأ تواصلًا مهنيًا" : "Start a conversation";

  const handlePrimaryClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    if (onEnterFirstWorld) {
      e.preventDefault();
      onEnterFirstWorld();
    }
  };

  return (
    <section
      id="hero"
      dir={direction}
      className="relative flex min-h-screen items-center bg-gradient-to-b from-[#020617] via-[#020617] to-black"
    >
      {/* خلفية داكنة مع ثنائي ألوان أنيق (تركوازي + نيلي) */}
      <div className="pointer-events-none absolute inset-0">
        {/* شبكة خفيفة جدًا */}
        <div className="multiverse-grid-overlay h-full w-full opacity-[0.16]" />
        {/* توهّج تركوازي/نيلي ناعم حول منطقة المحتوى */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_0,rgba(56,189,248,0.16),transparent_60%),radial-gradient(circle_at_88%_100%,rgba(129,140,248,0.22),transparent_60%)] mix-blend-screen" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-28 pb-16 md:flex-row md:items-center md:gap-16 md:px-6 lg:px-8">
        {/* عمود النص – عنّي */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
          className={`flex-1 ${
            direction === "rtl" ? "md:order-2 text-right" : "md:order-1"
          }`}
        >
          {/* كابشن رفيع مع خط تركوازي أنيق */}
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-6 rounded-full bg-cyan-300/80" />
            <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-100/85">
              {kicker}
            </span>
          </div>

          <CinematicTitle
            as="h1"
            text={title}
            className="mb-6 text-3xl leading-snug text-slate-50 sm:text-4xl md:text-5xl"
          />

          <p className="mb-3 text-base text-slate-100/95">{aboutLead}</p>
          <p className="mb-3 text-sm text-slate-300 md:text-base">
            {aboutBody1}
          </p>
          <p className="mb-8 text-sm text-slate-400 md:text-base">
            {aboutBody2}
          </p>

          <div
            className={`flex flex-wrap items-center gap-4 ${
              direction === "rtl" ? "justify-start md:justify-start" : ""
            }`}
          >
            <a
              href="#project-1"
              onClick={handlePrimaryClick}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-sm shadow-cyan-400/25 transition hover:shadow-cyan-300/30 hover:brightness-105"
            >
              {primaryCta}
              <span className="inline-block text-[13px] transition group-hover:translate-y-0.5">
                ↓
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-500/60 bg-slate-900/40 px-5 py-2 text-xs font-medium text-slate-100/90 backdrop-blur-sm transition hover:border-cyan-300/80 hover:text-slate-50 md:text-sm"
            >
              {secondaryCta}
            </a>
          </div>
        </motion.div>

        {/* الكارد السينمائي – هادي مع حدود نيلي/تركوازي خفيفة */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`flex-1 ${
            direction === "rtl" ? "md:order-1" : "md:order-2"
          }`}
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 shadow-[0_0_40px_rgba(15,23,42,1)]">
            {/* إطار داخلي رفيع بلمسة تركواز/نيلي ناعمة */}
            <div className="pointer-events-none absolute inset-[1px] rounded-[22px] border border-cyan-300/15" />
            {/* توهج داخلي هادي بنفس درجات الخلفية */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_bottom,rgba(129,140,248,0.20),transparent_55%)] opacity-80" />
            <div className="relative flex min-h-[260px] items-center justify-center px-8 py-10 md:min-h-[320px]">
              <p className="max-w-sm text-center text-sm leading-relaxed text-slate-100/85">
                {isArabic
                  ? "كل مشروع هنا مصمّم كقصة بصريّة قصيرة؛ بداية توضّح الفكرة، وسط يركّز على التجربة، ونهاية تدعو الزائر لفتح الواجهة الحقيقية والتفاعل معها."
                  : "Each project here is treated as a short visual story – an introduction to the idea, a middle that focuses on the experience, and an ending that invites people to open the live interface and explore it themselves."}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
