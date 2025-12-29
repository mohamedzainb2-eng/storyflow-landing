// src/data/projects.ts

export type Locale = "en" | "ar";

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface ProjectScreen {
  id: string;
  src: string;
  alt: string;
}

export interface ProjectHighlight {
  id: "keyPoints" | "focus" | "role" | "deployment";
  label: LocalizedText;
  body: LocalizedText;
}

export interface ProjectDefinition {
  id: string;
  universe: number;
  slug: string;
  name: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  screens: ProjectScreen[];
  highlights: ProjectHighlight[];
}

export const projects: ProjectDefinition[] = [
  /**
   * 01 – Mini Shop – Single Page Store
   */
  {
    id: "mini-shop",
    universe: 1,
    slug: "project-1",
    name: {
      en: "Mini Shop – Single Page Store",
      ar: "Mini Shop – متجر صفحة واحدة",
    },
    tagline: {
      en: "Single-page Arabic storefront with cart and checkout, built in pure HTML, CSS, and JavaScript.",
      ar: "متجر صفحة واحدة باللغة العربية مع سلة شراء وخطوة دفع، مبني بالكامل باستخدام HTML وCSS وJavaScript.",
    },
    description: {
      en: [
        "Mini Shop – Single Page Store is a lightweight demo shop built with HTML, CSS, and vanilla JavaScript.",
        "The page combines a simple hero, product grid, cart, and checkout section into one scrolling experience to showcase basic front-end e-commerce UX in Arabic.",
      ].join(" "),
      ar: [
        "Mini Shop – Single Page Store هو مشروع متجر إلكتروني خفيف مبني باستخدام HTML وCSS وJavaScript بدون أي إطار عمل.",
        "تجمع الصفحة بين قسم تعريفي بسيط وشبكة منتجات وسلة شراء وقسم دفع في تجربة تمرير واحدة تعرض أساسيات واجهات المتاجر العربية على الويب.",
      ].join(" "),
    },
    techStack: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/mohamedzainb2-eng/single-page-website",
    liveUrl: "https://mohamedzainb2-eng.github.io/single-page-website/",
    screens: [
      {
        id: "mini-shop-1",
        src: "ِ/assets/project1/Screenshot 2025-11-27 151701.png",
        alt: "Mini Shop – Single Page Store screen 1",
      },
      {
        id: "mini-shop-2",
        src: "/assets/project1/Screenshot 2025-11-27 152128.png",
        alt: "Mini Shop – Single Page Store screen 2",
      },
      {
        id: "mini-shop-3",
        src: "/assets/project1/Screenshot 2025-11-27 153625.png",
        alt: "Mini Shop – Single Page Store screen 3",
      },
      {
        id: "mini-shop-4",
        src: "/assets/project1/Screenshot 2025-11-27 153722.png",
        alt: "Mini Shop – Single Page Store screen 4",
      },
      {
        id: "mini-shop-5",
        src: "/assets/project1/Screenshot 2025-11-27 153802.png",
        alt: "Mini Shop – Single Page Store screen 5",
      },
      {
        id: "mini-shop-6",
        src: "/assets/project1/Screenshot 2025-11-27 154052.png",
        alt: "Mini Shop – Single Page Store screen 6",
      },
      {
        id: "mini-shop-7",
        src: "/assets/project1/Screenshot 2025-11-27 154118.png",
        alt: "Mini Shop – Single Page Store screen 7",
      },
      {
        id: "mini-shop-8",
        src: "/assets/project1/Screenshot 2025-11-27 154445.png",
        alt: "Mini Shop – Single Page Store screen 8",
      },
    ],
    highlights: [
      {
        id: "keyPoints",
        label: {
          en: "Key points",
          ar: "أبرز النقاط",
        },
        body: {
          en: "Fake products, add-to-cart flow, cart and checkout section, and a clean one-page responsive layout with navbar and footer.",
          ar: "منتجات تجريبية، إضافة للسلة مع عرض سلة الشراء وقسم الدفع، وتخطيط صفحة واحدة متجاوب مع شريط تنقّل وتذييل بسيطين.",
        },
      },
      {
        id: "focus",
        label: {
          en: "Focus",
          ar: "التركيز",
        },
        body: {
          en: "Showcasing a compact Arabic shopping flow with product listing, cart, and checkout in a single scrollable page.",
          ar: "عرض تجربة تسوّق عربية مضغوطة تجمع عرض المنتجات والسلة والدفع في صفحة واحدة قابلة للتمرير.",
        },
      },
      {
        id: "role",
        label: {
          en: "My role",
          ar: "الدور",
        },
        body: {
          en: "Front-end design and implementation using pure HTML, CSS, and JavaScript.",
          ar: "تصميم الواجهة وتنفيذها بالكامل باستخدام HTML وCSS وJavaScript فقط.",
        },
      },
    ],
  },

  /**
   * 02 – Real Estate UI
   */
  {
    id: "real-estate-ui",
    universe: 2,
    slug: "project-2",
    name: {
      en: "Real Estate UI",
      ar: "Real Estate UI",
    },
    tagline: {
      en: "Arabic RTL real estate interface with advanced filters, dark mode, map, and detailed property pages.",
      ar: "واجهة عقارات عربية باتجاه RTL مع فلاتر متقدمة، وضع داكن، خريطة تفاعلية وصفحات تفاصيل كاملة للعقار.",
    },
    description: {
      en: [
        "Real Estate UI is a modern React + Vite front-end for browsing properties.",
        "It includes a full Arabic RTL layout, advanced filtering by price, area, rooms, property type, and city, text search in titles and locations, a dedicated property details page with image carousel and interactive map built with React Leaflet, plus a dark-mode theme and fully responsive layout.",
      ].join(" "),
      ar: [
        "Real Estate UI هو واجهة حديثة مبنية بـ React وVite لاستعراض العقارات.",
        "يوفّر تخطيطًا عربيًا كاملًا (RTL)، وفلاتر متقدمة حسب السعر والمساحة وعدد الغرف ونوع العقار والمدينة مع بحث نصي في العناوين والمواقع، وصفحة مخصّصة لتفاصيل العقار تضم معرض صور وخريطة تفاعلية مبنية بـ React Leaflet، بالإضافة إلى وضع داكن وتخطيط متجاوب بالكامل.",
      ].join(" "),
    },
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "React Leaflet",
      "Swiper",
    ],
    repoUrl: "https://github.com/mohamedzainb2-eng/real-estate-ui",
    liveUrl: "https://mohamedzainb2-eng.github.io/real-estate-ui/",
    screens: [
      {
        id: "real-estate-1",
        src: "/assets/project2/Screenshot 2025-12-01 003246.png",
        alt: "Real Estate UI home and filters screen",
      },
      {
        id: "real-estate-2",
        src: "/assets/project2/Screenshot 2025-12-01 003410.png",
        alt: "filtered properties screen",
      },
      {
        id: "real-estate-3",
        src: "/assets/project2/Screenshot 2025-12-01 003526.png",
        alt: "showing property page screen",
      },
         {
        id: "real-estate-4",
        src: "/assets/project2/Screenshot 2025-12-01 003635.png",
        alt: " showing property details screen",
      },
          {
        id: "real-estate-5",
        src: "/assets/project2/Screenshot 2025-12-01 003653.png",
        alt: " showing property details with map screen",
      },
          {
        id: "real-estate-6",
        src: "/assets/project2/Screenshot 2025-12-01 003738.png",
        alt: " dark mode screen",
      },
          {
        id: "real-estate-7",
        src: "/assets/project2/Screenshot 2025-12-01 003810.png",
        alt: " ordering section screen",
      },
          {
        id: "real-estate-8",
        src: "/assets/project2/Screenshot 2025-12-01 003825.png",
        alt: " showing property details screen dark mode",
      },
             {
        id: "real-estate-9",
        src: "/assets/project2/Screenshot 2025-12-01 003846.png",
        alt: " showing property details screen dark mode with map",
      },
    ],
    highlights: [
      {
        id: "keyPoints",
        label: {
          en: "Key points",
          ar: "أبرز النقاط",
        },
        body: {
          en: "Hero landing, advanced filters, Arabic RTL layout, property cards grid, details page with gallery, interactive map, and dark mode toggle.",
          ar: "واجهة رئيسية مع قسم Hero، فلاتر متقدمة، تخطيط عربي RTL كامل، شبكة بطاقات للعقارات، صفحة تفاصيل مع معرض صور، خريطة تفاعلية، وزر للتبديل إلى الوضع الداكن.",
        },
      },
      {
        id: "focus",
        label: {
          en: "Focus",
          ar: "التركيز",
        },
        body: {
          en: "Make searching and comparing properties fast through filters, search, and map navigation.",
          ar: "جعل البحث عن العقارات ومقارنتها أسرع عبر الفلاتر والبحث النصي والتصفح من خلال الخريطة التفاعلية.",
        },
      },
      {
        id: "role",
        label: {
          en: "My role",
          ar: "الدور",
        },
        body: {
          en: "Front-end architecture, UI/UX design, RTL layout, and dark-mode implementation.",
          ar: "هندسة الواجهة الأمامية، تصميم واجهة وتجربة المستخدم، ضبط RTL، وتنفيذ نمط الوضع الداكن.",
        },
      },
    ],
  },

  /**
   * 03 – Admin Dashboard – React + Vite
   */
  {
    id: "admin-dashboard",
    universe: 3,
    slug: "project-3",
    name: {
      en: "Admin Control Dashboard",
      ar: "لوحة تحكم إدارية متكاملة",
    },
    tagline: {
      en: "Admin dashboard with analytics, users, orders, products, settings, notifications, and themes.",
      ar: "لوحة تحكم إدارية تضم التحليلات والمستخدمين والطلبات والمنتجات والإعدادات والتنبيهات والسمات.",
    },
    description: {
      en: [
        "A production-style admin dashboard built with React, Vite, Tailwind CSS, and Zustand.",
        "It includes a simple mock login flow, protected routes, responsive sidebar and topbar, analytics with Recharts, rich tables for users, orders, and products, plus notifications, themes, dark mode, and English/Arabic support.",
      ].join(" "),
      ar: [
        "لوحة تحكم إدارية احترافية مبنية بـ React وVite وTailwind CSS وZustand.",
        "توفّر تدفّق تسجيل دخول تجريبي، ومسارات محمية، وشريطًا جانبيًا ورأسيًا متجاوبين، وصفحات تحليلات بمخططات Recharts، وجداول متقدمة للمستخدمين والطلبات والمنتجات، إلى جانب نظام تنبيهات وسمات متعددة ووضع داكن ودعم للغتين العربية والإنجليزية.",
      ].join(" "),
    },
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Router",
      "Recharts",
      "Framer Motion",
    ],
    repoUrl:
      "https://github.com/mohamedzainb2-eng/admin-dashboard-react-vite",
    liveUrl: "https://mohamedzainb2-eng.github.io/dashboard-admin/",
    screens: [
      {
        id: "admin-1",
        src: "/assets/project3/Screenshot 2025-12-02 190940.png",
        alt: "Admin dashboard analytics overview screen",
      },
      {
        id: "admin-2",
        src: "/assets/project3/Screenshot 2025-12-02 191014.png",
        alt: "Admin dashboard analytics sales screen",
      },
      {
        id: "admin-3",
        src: "/assets/project3/Screenshot 2025-12-02 191048.png",
        alt: "Admin dashboard users screen",
      },
      {
        id: "admin-4",
        src: "/assets/project3/Screenshot 2025-12-02 191205.png",
        alt: "Admin dashboard users with sorting screen",
      },
      {
        id: "admin-5",
        src: "/assets/project3/Screenshot 2025-12-02 191304.png",
        alt: "Admin dashboard orders with sorting screen",
      },
      {
        id: "admin-6",
        src: "/assets/project3/Screenshot 2025-12-02 191353.png",
        alt: "Admin dashboard products with sorting screen",
      },
      {
        id: "admin-7",
        src: "/assets/project3/Screenshot 2025-12-02 191426.png",
        alt: "Admin dashboard notifications screen",
      },
      {
        id: "admin-8  ",
        src: "/assets/project3/Screenshot 2025-12-02 191505.png",
        alt: "Admin dashboard settings appearance screen",
      },
      {
        id: "admin-9",
        src: "/assets/project3/Screenshot 2025-12-02 191606.png",
        alt: "Admin dashboard settings appearance with arabic rtl screen",
      },
      {
        id: "admin-10",
        src: "/assets/project3/Screenshot 2025-12-02 191634.png",
        alt: "Admin dashboard settings appearance with dark mode screen",
      },
    ],
    highlights: [
      {
        id: "keyPoints",
        label: {
          en: "Key points",
          ar: "أبرز النقاط",
        },
        body: {
          en: "Analytics, users, orders, products, settings, notifications, themes, dark mode, and a responsive dashboard layout.",
          ar: "صفحات تحليلات ولوحات بيانات، إدارة مستخدمين وطلبات ومنتجات، إعدادات وتنبيهات وسمات متعددة، ووضع داكن في تخطيط لوحة تحكم متجاوب.",
        },
      },
      {
        id: "focus",
        label: {
          en: "Focus",
          ar: "التركيز",
        },
        body: {
          en: "Designing a clean admin UX with protected routes, flexible layout, and clear data presentation.",
          ar: "تصميم تجربة لوحة تحكم نظيفة مع مسارات محمية وتخطيط مرن وعرض واضح ومنظّم للبيانات.",
        },
      },
      {
        id: "role",
        label: {
          en: "My role",
          ar: "الدور",
        },
        body: {
          en: "Front-end engineering, state management with Zustand, chart integration, and UI system.",
          ar: "تطوير الواجهة الأمامية، وإدارة الحالة باستخدام Zustand، وربط المخططات، وبناء نظام مكوّنات الواجهة.",
        },
      },
    ],
  },

  /**
   * 04 – Animation Studio
   */
  {
    id: "animation-studio",
    universe: 4,
    slug: "project-4",
    name: {
      en: "Animation Studio",
      ar: "Animation Studio – محرر حركات للويب",
    },
    tagline: {
      en: "Web-based animation editor with timeline, layers, live preview, and export to CSS, HTML, JSON, and React.",
      ar: "محرر حركات على الويب بخط زمني وطبقات ومعاينة حيّة وتصدير إلى CSS وHTML وJSON وReact.",
    },
    description: {
      en: [
        "Animation Studio is a lightweight front-end animation editor that runs entirely in the browser.",
        "It gives you a mini timeline, layers panel, and live preview so you can design motion visually, then export clean CSS keyframes, HTML structure, JSON config, or a React component using Framer Motion, with undo/redo and localStorage-powered project saving.",
      ].join(" "),
      ar: [
        "Animation Studio هو محرر حركات خفيف يعمل بالكامل داخل المتصفّح.",
        "يوفّر خطًا زمنيًا مصغّرًا ولوحة طبقات ومعاينة مباشرة لتصميم الحركة بصريًا، مع تصدير كود CSS جاهز أو هيكل HTML أو إعدادات JSON أو مكوّن React يعتمد على Framer Motion، بالإضافة إلى دعم التراجع/الإعادة وحفظ المشاريع في المتصفح عبر localStorage.",
      ].join(" "),
    },
    techStack: ["HTML", "CSS", "TypeScript", "Framer Motion"],
    repoUrl: "https://github.com/mohamedzainb2-eng/animation-studio",
    liveUrl: "https://mohamedzainb2-eng.github.io/animation-studio/",
    screens: [
      {
        id: "animation-1",
        src: "/assets/project4/Screenshot 2025-12-01 222924.png",
        alt: "Animation Studio timeline and layers screen",
      },
      {
        id: "animation-2",
        src: "/assets/project4/Screenshot 2025-12-01 223329.png",
        alt: "Animation Studio live preview screen",
      },
      {
        id: "animation-3",
        src: "/assets/project4/Screenshot 2025-12-01 223707.png",
        alt: "Animation Studio export panel screen",
      },
       {
        id: "animation-4",
        src: "/assets/project4/Screenshot 2025-12-01 223957.png",
        alt: "Animation Studio exported React code screen",
      },
    ],
    highlights: [
      {
        id: "keyPoints",
        label: {
          en: "Key points",
          ar: "أبرز النقاط",
        },
        body: {
          en: "Timeline, layers panel, live preview, undo/redo, device presets, and export to CSS, HTML, JSON, and React.",
          ar: "خط زمني ولوحة طبقات ومعاينة حيّة، مع تراجع وتقدّم، وخيارات أجهزة مختلفة، وتصدير إلى CSS وHTML وJSON وReact.",
        },
      },
      {
        id: "focus",
        label: {
          en: "Focus",
          ar: "التركيز",
        },
        body: {
          en: "Make motion design more approachable for front-end developers by keeping everything in the browser in a CSS / Framer Motion-friendly format.",
          ar: "تبسيط تصميم الحركات لمطوّري الواجهة الأمامية من خلال إبقاء كل شيء داخل المتصفّح بصيغة مناسبة لـ CSS وFramer Motion.",
        },
      },
      {
        id: "role",
        label: {
          en: "My role",
          ar: "الدور",
        },
        body: {
          en: "Product idea, UX of the editor, and implementation of the animation engine and export pipeline.",
          ar: "ابتكار الفكرة، وتصميم تجربة استخدام المحرر، وتنفيذ منطق الحركة ونظام التصدير.",
        },
      },
    ],
  },

  /**
   * 05 – HoloSpace OS
   */
  {
    id: "holospace-os",
    universe: 5,
    slug: "project-5",
    name: {
      en: "HoloSpace OS",
      ar: "HoloSpace OS – نظام تشغيل ويب ثلاثي الأبعاد",
    },
    tagline: {
      en: "3D web operating system with desktop, windows, music player, gallery, notes, and system settings.",
      ar: "نظام تشغيل ويب ثلاثي الأبعاد مع سطح مكتب ونوافذ وتطبيقات مدمجة مثل مشغّل الموسيقى ومعرض الصور والملاحظات والإعدادات.",
    },
    description: {
      en: [
        "HoloSpace OS is a 3D spatial web operating system built with React, Vite, TypeScript, TailwindCSS, React Three Fiber, and Framer Motion.",
        "It simulates a futuristic desktop with glassmorphism UI, animated dock, launcher, command palette, notifications panel, and multiple apps such as Music, Gallery, Notes, and Settings with theme, profile, and club-mode visual/audio effects.",
      ].join(" "),
      ar: [
        "HoloSpace OS هو نظام تشغيل ويب ثلاثي الأبعاد مبني بـ React وVite وTypeScript وTailwindCSS وReact Three Fiber وFramer Motion.",
        "يقدّم سطح مكتب مستقبليًا بتصميم زجاجي، وشريط تطبيقات متحرك، وقائمة إطلاق، ولوحة أوامر، ولوحة تنبيهات، وتطبيقات مدمجة مثل مشغّل الموسيقى ومعرض الصور والملاحظات والإعدادات مع تحكم في السمات والملفات الشخصية وتأثيرات بصرية وصوتية مخصّصة لوضع Club Mode.",
      ].join(" "),
    },
    techStack: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "React Three Fiber",
      "@react-three/drei",
      "Framer Motion",
      "HTML5 Audio",
    ],
    repoUrl: "https://github.com/mohamedzainb2-eng/holospace-spatial-os",
    liveUrl: "https://mohamedzainb2-eng.github.io/holospace-web/",
    screens: [
      {
        id: "holospace-1",
        src: "/assets/project5/Screenshot 2025-12-06 235132.png",
        alt: "HoloSpace OS 3D desktop screen",
      },
      {
        id: "holospace-2",
        src: "/assets/project5/Screenshot 2025-12-06 235225.png",
        alt: "HoloSpace OS music player and visualizer screen",
      },
      {
        id: "holospace-3",
        src: "/assets/project5/Screenshot 2025-12-06 235303.png",
        alt: "HoloSpace OS gallery and windows manager screen",
      },
       {
        id: "holospace-4",
        src: "/assets/project5/Screenshot 2025-12-06 235404.png",
        alt: "HoloSpace OS gallery and windows manager screen another theme view",
      },
       {
        id: "holospace-5",
        src: "/assets/project5/Screenshot 2025-12-06 235639.png",
        alt: "HoloSpace OS notes app screen",
      },
       {
        id: "holospace-6 ",
        src: "/assets/project5/Screenshot 2025-12-06 235756.png",
        alt: "HoloSpace OS settings appearance screen",
      },
       {
        id: "holospace-7",
        src: "/assets/project5/Screenshot 2025-12-06 235829.png",
        alt: "HoloSpace OS settings appearance quality choices screen",
      },
       {
        id: "holospace-8",
        src: "/assets/project5/Screenshot 2025-12-06 235902.png",
        alt: "HoloSpace OS settings motions & FX screen",
      },
       {
        id: "holospace-9",
        src: "/assets/project5/screenshot 1.png",
        alt: "HoloSpace OS music player on mobile view screen",
      },
       {
        id: "holospace-10",
        src: "/assets/project5/screenshot 2.png",
        alt: "HoloSpace OS home screen on mobile view",
      },
      {
        id: "holospace-11",
        src: "/assets/project5/screenshot 3.png",
        alt: "HoloSpace OS another theme on mobile view screen",
      },
    ],
    highlights: [
      {
        id: "keyPoints",
        label: {
          en: "Key points",
          ar: "أبرز النقاط",
        },
        body: {
          en: "3D desktop, glassmorphism UI, animated dock and launcher, window manager, notifications panel, and multiple built-in apps.",
          ar: "سطح مكتب ثلاثي الأبعاد، واجهة زجاجية، شريط تطبيقات وقائمة إطلاق متحركة، مدير نوافذ، لوحة تنبيهات، وتطبيقات مدمجة متعددة.",
        },
      },
      {
        id: "focus",
        label: {
          en: "Focus",
          ar: "التركيز",
        },
        body: {
          en: "Exploring spatial OS concepts in the browser using WebGL, motion, and system-level theming and profiles.",
          ar: "استكشاف فكرة أنظمة التشغيل المكانية داخل المتصفّح باستخدام WebGL والحركة ونظام سمات وملفات شخصية على مستوى النظام.",
        },
      },
      {
        id: "role",
        label: {
          en: "My role",
          ar: "الدور",
        },
        body: {
          en: "System design, 3D scene composition, UI design, and front-end implementation.",
          ar: "تصميم النظام، وبناء المشهد الثلاثي الأبعاد، وتصميم الواجهة، وتنفيذ الواجهة الأمامية.",
        },
      },
    ],
  },

  /**
   * PR – PulseReach Media (Website)
   */
  {
    id: "pulsereach-media",
    universe: 6,
    slug: "project-6",
    name: {
      en: "PulseReach Media Website",
      ar: "PulseReach Media – موقع وكالة سوشيال ميديا (صفحات بيع باقات)",
    },
    tagline: {
      en: "Conversion-focused bilingual landing pages for social media management packages (WordPress + coded templates).",
      ar: "صفحات بيع باقات سوشيال ميديا ثنائية اللغة مع قوالب مبرمجة تركّز على التحويل داخل ووردبريس.",
    },
    description: {
      en: [
        "PulseReach Media is a bilingual (AR/EN) marketing agency website built on WordPress using Astra Child Theme and custom coded page templates.",
        "The project focuses on clean, modern UI, strong conversion sections (hero, social proof, pricing, FAQs, CTAs), RTL-first Arabic layout, and scalable template-based pages for Services, Packages, Results, and Contact with WPForms integration.",
      ].join(" "),
      ar: [
        "PulseReach Media هو موقع ثنائي اللغة (عربي/إنجليزي) لوكالة تسويق وسوشيال ميديا مبني على WordPress باستخدام Astra Child Theme وقوالب صفحات مبرمجة (Coded Templates).",
        "يركّز المشروع على واجهة حديثة وتجربة تحويل قوية عبر أقسام الهيرو، إثبات اجتماعي، الباقات والأسعار، الأسئلة الشائعة، وCTA واضح، مع دعم RTL للعربية وقابلية التوسع لصفحات الخدمات والباقات والنتائج والتواصل ودمج WPForms.",
      ].join(" "),
    },
    techStack: [
      "WordPress",
      "PHP",
      "Astra (Child Theme)",
      "HTML5",
      "CSS (Design System Variables)",
      "WPForms",
      "Rank Math SEO",
    ],
    repoUrl: "",
    liveUrl: "https://pulsereachmedia.wuaze.com/",
    screens: [
      {
        id: "pulsereach-1",
        src: "/assets/project6/1.png",
        alt: "PulseReach Media home hero section (Arabic RTL)",
      },
      {
        id: "pulsereach-2",
        src: "/assets/project6/2.png",
        alt: "PulseReach Media pricing packages section",
      },
      {
        id: "pulsereach-3",
        src: "/assets/project6/3.png",
        alt: "PulseReach Media services section",
      },
      {
        id: "pulsereach-4",
        src: "/assets/project6/4.png",
        alt: "PulseReach Media results/case studies page",
      },
      {
        id: "pulsereach-5",
        src: "/assets/project6/5.png",
        alt: "PulseReach Media contact page with WPForms/CTA",
      },
      {
        id: "pulsereach-6",
        src: "/assets/project6/6.png",
        alt: "PulseReach Media mobile navigation and responsive layout",
      },
      {
        id: "pulsereach-7",
        src: "/assets/project6/7.png",
        alt: "PulseReach Media mobile navigation and responsive layout",
      },
      {
        id: "pulsereach-8",
        src: "/assets/project6/8.png",
        alt: "PulseReach Media mobile navigation and responsive layout",
      },
      {
        id: "pulsereach-9",
        src: "/assets/project6/9.png",
        alt: "PulseReach Media mobile navigation and responsive layout",
      },
    ],
    highlights: [
      {
        id: "keyPoints",
        label: {
          en: "Key points",
          ar: "أبرز النقاط",
        },
        body: {
          en: "Bilingual AR/EN, RTL-first layout, coded templates for 8 pages, pricing and conversion sections, reusable design system, and fast iteration inside WordPress.",
          ar: "ثنائي اللغة عربي/إنجليزي، دعم RTL بشكل صحيح، قوالب مبرمجة لعدة صفحات (حتى 8 صفحات)، أقسام تحويل قوية (باقات/CTA/FAQ)، نظام تصميم CSS قابل لإعادة الاستخدام، وسهولة تطوير وتعديل داخل ووردبريس.",
        },
      },
      {
        id: "focus",
        label: {
          en: "Focus",
          ar: "التركيز",
        },
        body: {
          en: "High-conversion landing structure, clean responsive UI, SEO-ready pages, and scalable template-driven architecture for services and packages.",
          ar: "هيكلة Landing Pages عالية التحويل، تصميم Responsive نظيف، جاهزية SEO، وبنية Templates قابلة للتوسع لصفحات الخدمات والباقات.",
        },
      },
      {
        id: "role",
        label: {
          en: "My role",
          ar: "الدور",
        },
        body: {
          en: "UI structure, custom template coding (PHP), design system CSS, content architecture, and basic SEO setup.",
          ar: "بناء الهيكلة والواجهات، برمجة قوالب الصفحات (PHP)، تصميم نظام CSS، تنظيم المحتوى وأقسام التحويل، وتجهيز أساسيات SEO.",
        },
      },
    ],
  },
/**
 * Arab Tourism Platform (Website)
 */
{
  id: "arab-tourism-platform",
  universe: 7,
  slug: "project-7",
  name: {
    en: "Arab Tourism Platform",
    ar: "Arab Tourism Platform – منصة المعالم السياحية العربية",
  },
  tagline: {
    en: "Arabic-first static tourism directory with an interactive SVG map, country theming, and rich landmark pages (Next.js Export).",
    ar: "دليل سياحي عربي أولًا بصفحات دول ومعالم + خريطة SVG تفاعلية + ثيمات لكل دولة، جاهز للتصدير كـ Static (Next.js Export).",
  },
  description: {
    en: [
      "Arab Tourism Platform is a modern Arabic-first tourism directory built with Next.js (App Router), React, and Tailwind CSS.",
      "It provides a country → landmarks browsing flow, an interactive SVG map of the Arab world (d3-geo + topojson + world-atlas), and detailed landmark pages including long narrative text, sources, coordinates, and image-search suggestions.",
      "The project is fully static-export ready (outputs an /out folder) and can be deployed to shared hosting like InfinityFree with no backend—data is shipped locally as JSON/CSV and generated into static pages.",
    ].join(" "),
    ar: [
      "Arab Tourism Platform هي منصة دليل سياحي عربية أولًا مبنية باستخدام Next.js (App Router) وReact وTailwind CSS.",
      "توفر تجربة تصفح دولة → معالم، وخريطة SVG تفاعلية للوطن العربي (d3-geo + topojson-client + world-atlas)، وصفحات معالم غنية تحتوي على سرد عربي طويل، مصادر، إحداثيات، واقتراحات بحث عن الصور.",
      "المشروع مُجهّز للتصدير كـ Static بالكامل (ينتج مجلد /out) ويمكن رفعه على استضافات Shared مثل InfinityFree بدون أي Backend، حيث يتم الاعتماد على بيانات محلية JSON/CSV تُحوّل إلى صفحات ثابتة.",
    ].join(" "),
  },
  techStack: [
    "Next.js (App Router)",
    "React",
    "Tailwind CSS",
    "Static Export (output: 'export')",
    "d3-geo",
    "topojson-client",
    "world-atlas",
    "Local JSON/CSV Dataset",
  ],
  repoUrl: "",
  liveUrl: "https://arabesque.lovestoblog.com/",
  screens: [
    {
      id: "arab-tourism-1",
      src: "/assets/project7/1.png",
      alt: "Home page showing the Arab world SVG map and countries directory",
    },
    {
      id: "arab-tourism-2",
      src: "/assets/project7/2.png",
      alt: "Interactive SVG map hover/click states for countries",
    },
    {
      id: "arab-tourism-3",
      src: "/assets/project7/3.png",
      alt: "Country page with themed header, categories, and landmark cards",
    },
    {
      id: "arab-tourism-4",
      src: "/assets/project7/4.png",
      alt: "Landmark details page with long Arabic narrative and quick facts",
    },
    {
      id: "arab-tourism-5",
      src: "/assets/project7/5.png",
      alt: "Landmark sources, coordinates, and image-search suggestions section",
    },
    {
      id: "arab-tourism-6",
      src: "/assets/project7/6.png",
      alt: "Search page results for landmarks and cities",
    },
    {
      id: "arab-tourism-7",
      src: "/assets/project7/7.png",
      alt: "Mobile responsive layout for map and directory browsing",
    },
    {
      id: "arab-tourism-8",
      src: "/assets/project7/8.png",
      alt: "Country theming via CSS variables and background motifs",
    },
    {
      id: "arab-tourism-9",
      src: "/assets/project7/Screenshot_2025-12-28-22-08-38-245_com.android.chrome.jpg",
      alt: "Country theming via CSS variables and background motifs",
    },
    {
      id: "arab-tourism-10",
      src: "/assets/project7/Screenshot_2025-12-28-22-07-12-883_com.android.chrome[1].jpg",
      alt: "Country theming via CSS variables and background motifs",
    },
  ],
  highlights: [
    {
      id: "keyPoints",
      label: {
        en: "Key points",
        ar: "أبرز النقاط",
      },
      body: {
        en: "Arabic-first UI, country → landmarks directory, interactive SVG map (d3-geo/topojson), per-country theming via CSS variables, and rich landmark pages (narrative + sources + coordinates). Fully static export to /out for shared hosting.",
        ar: "واجهة عربية أولًا، دليل دول → معالم، خريطة SVG تفاعلية (d3-geo/topojson)، ثيم لكل دولة عبر CSS Variables، وصفحات معالم غنية (سرد + مصادر + إحداثيات). تصدير Static كامل إلى /out لرفع المشروع على استضافات Shared.",
      },
    },
    {
      id: "focus",
      label: {
        en: "Focus",
        ar: "التركيز",
      },
      body: {
        en: "Performance-friendly static architecture, clean responsive UI, scalable dataset-driven pages, and map usability on mobile (hover/focus/tap).",
        ar: "بنية Static سريعة وخفيفة، واجهة Responsive نظيفة، صفحات قابلة للتوسع بالاعتماد على Dataset محلي، وتحسين تجربة الخريطة على الموبايل (tap/hover/focus).",
      },
    },
    {
      id: "role",
      label: {
        en: "My role",
        ar: "الدور",
      },
      body: {
        en: "UI/UX implementation, components system (cards, pills, sidebar blocks), static routing (country/landmark pages), SVG map integration, theming system, and data utilities for JSON/CSV.",
        ar: "تنفيذ الواجهات وتجربة المستخدم، بناء نظام مكوّنات (Cards/Pills/Sidebar Blocks)، إعداد صفحات Static للدول والمعالم، دمج خريطة SVG التفاعلية، بناء نظام الثيمات، وتجهيز أدوات التعامل مع بيانات JSON/CSV.",
      },
    },
    {
      id: "deployment",
      label: {
        en: "Deployment",
        ar: "النشر والاستضافة",
      },
      body: {
        en: "Static export-ready (Next.js output: 'export') producing /out for uploading via File Manager/FTP to InfinityFree or any static host.",
        ar: "جاهز للتصدير كـ Static (Next.js output: 'export') مع مجلد /out للرفع عبر File Manager/FTP على InfinityFree أو أي استضافة Static.",
      },
    },
  ],
},
];

export type ProjectId = (typeof projects)[number]["id"];
